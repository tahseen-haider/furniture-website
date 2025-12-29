import { Heading, Paragraph, Divider, Button, Input, Select, Textarea } from '@components';
import { AlertCircle, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { adminAPI } from '@services';

const createEmptyVariant = () => ({ variantId: '', title: '', price: 0 });

const MAX_FEATURES = 6;

const MultiAddSelect = ({
  label,
  options,
  selected,
  onAdd,
  onRemove,
  placeholder,
  max = Infinity,
  error,
}) => {
  const [currentValue, setCurrentValue] = useState('');
  const filteredOptions = options.filter((opt) => !selected.some((sel) => sel.value === opt.value));

  return (
    <div className="flex flex-col gap-2">
      <Select
        label={label}
        value={currentValue}
        options={filteredOptions}
        placeholder={placeholder}
        onChange={(val) => {
          if (selected.length >= max) return;
          const item = options.find((o) => o.value === val);
          if (item) {
            onAdd(item);
            setCurrentValue('');
          }
        }}
      />
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((item) => (
            <div
              key={item.value}
              className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm"
            >
              {item.label}
              <button
                type="button"
                onClick={() => onRemove(item)}
                className="text-red-500 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      {error && <p className="px-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

const AddProductForm = ({ onSubmit, onClose }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error');
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const [formData, setFormData] = useState({
    product: {
      title: '',
      slug: '',
      description: '',
      generalCategory: '',
      vendor: '',
      freeShipping: false,
      available: true,
      itemsInStock: 0,
    },
    categories: [],
    variants: [],
    images: [],
    features: [],
    buyTogether: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        setDataLoading(true);
        const resProducts = await adminAPI.products.fetchAll();
        const resCategories = await adminAPI.categories.fetchAll();
        setProductsList(
          (resProducts?.data?.products || []).map((p) => ({ label: p.title, value: String(p.id) }))
        );
        setCategoriesList(
          (resCategories?.data?.categories || []).map((c) => ({ label: c.title, value: c.slug }))
        );
      } finally {
        setDataLoading(false);
      }
    };
    loadData();
  }, []);

  const validateField = (field, value, index = null) => {
    const errs = { ...errors };
    if (field.startsWith('product')) {
      if (!value) errs[field] = `${field.split('.')[1]} is required`;
      else delete errs[field];
    }
    if (field.startsWith('variants')) {
      const key = `variants[${index}].${field.split('.')[1]}`;
      if (field.endsWith('variantId') && !value) errs[key] = 'Variant ID required';
      else if (field.endsWith('title') && !value) errs[key] = 'Variant title required';
      else if (field.endsWith('price') && (typeof value !== 'number' || value <= 0))
        errs[key] = 'Price must be > 0';
      else delete errs[key];
    }
    if (field.startsWith('categories')) {
      if (!value.length) errs['categories'] = 'At least one category is required';
      else delete errs['categories'];
    }
    if (field.startsWith('buyTogether')) {
      if (value.length > 2) errs['buyTogether'] = 'Max 2 products allowed';
      else delete errs['buyTogether'];
    }
    setErrors(errs);
  };

  const updateProduct = (key, value) => {
    setFormData((p) => ({ ...p, product: { ...p.product, [key]: value } }));
    validateField(`product.${key}`, value);
  };
  const updateVariant = (index, key, value) => {
    setFormData((p) => ({
      ...p,
      variants: p.variants.map((v, i) => (i === index ? { ...v, [key]: value } : v)),
    }));
    validateField(`variants.${key}`, value, index);
  };
  const handleCategoriesChange = (categories) => {
    setFormData((p) => ({ ...p, categories }));
    validateField('categories', categories);
  };
  const handleBuyTogetherChange = (buyTogether) => {
    setFormData((p) => ({ ...p, buyTogether }));
    validateField('buyTogether', buyTogether);
  };

  const buildPayload = (data) => ({
    product: data.product,
    categories: data.categories.map((c) => c.value),
    variants: data.variants,
    images: data.images,
    features: data.features,
    buyTogether: data.buyTogether.map((p) => p.value),
  });

  const validateLocal = () => {
    const errs = {};
    const { product, variants, categories, images, features, buyTogether } = formData;
    if (!product.title) errs['product.title'] = 'Title is required';
    if (!product.slug) errs['product.slug'] = 'Slug is required';
    if (!product.description) errs['product.description'] = 'Description is required';
    if (!product.generalCategory) errs['product.generalCategory'] = 'General category is required';
    if (!product.vendor) errs['product.vendor'] = 'Vendor is required';
    if (typeof product.itemsInStock !== 'number' || product.itemsInStock < 0)
      errs['product.itemsInStock'] = 'Items in stock must be >= 0';
    if (!variants.length) errs['variants'] = 'At least one variant is required';
    else
      variants.forEach((v, i) => {
        if (!v.variantId) errs[`variants[${i}].variantId`] = 'Variant ID required';
        if (!v.title) errs[`variants[${i}].title`] = 'Variant title required';
        if (typeof v.price !== 'number' || v.price <= 0)
          errs[`variants[${i}].price`] = 'Price must be > 0';
      });
    if (!categories.length) errs['categories'] = 'At least one category is required';
    if (!images.length) errs['images'] = 'At least one image is required';
    if (!features.length) errs['features'] = 'At least one feature is required';
    if (buyTogether.length > 2) errs['buyTogether'] = 'Max 2 products allowed';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const localErrors = validateLocal();
    if (Object.keys(localErrors).length) {
      setErrors(localErrors);
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    try {
      setLoading(true);
      const payload = buildPayload(formData);
      const success = await onSubmit(payload, {
        setErrors,
        setMessage,
      });

      if (success) {
        setMessageType('success');
        setMessage('Product created successfully');
        setErrors({});
        onClose?.();
      } else {
        setMessageType('error');
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-3xl h-[calc(100vh-6rem)] p-4 flex flex-col gap-8 overflow-y-auto"
    >
      <div className="flex flex-col gap-4">
        <Heading variant="title">Product Information</Heading>
        <Input
          placeholder="Title"
          value={formData.product.title}
          onChange={(v) => updateProduct('title', v)}
          error={errors['product.title']}
        />
        <Input
          placeholder="Slug"
          value={formData.product.slug}
          onChange={(v) => updateProduct('slug', v)}
          error={errors['product.slug']}
        />
        <Textarea
          placeholder="Description"
          value={formData.product.description}
          onChange={(v) => updateProduct('description', v)}
          error={errors['product.description']}
        />
        <Input
          placeholder="Vendor"
          value={formData.product.vendor}
          onChange={(v) => updateProduct('vendor', v)}
          error={errors['product.vendor']}
        />
        <Input
          type="number"
          min={0}
          placeholder="Items in Stock"
          value={formData.product.itemsInStock}
          onChange={(v) => updateProduct('itemsInStock', Math.max(0, Number(v)))}
          error={errors['product.itemsInStock']}
        />
        <Select
          label="General Category"
          value={formData.product.generalCategory}
          options={categoriesList}
          onChange={(v) => updateProduct('generalCategory', v)}
          disabled={dataLoading}
          placeholder="Select general category"
          error={errors['product.generalCategory']}
        />
        <div className="flex gap-4">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={formData.product.freeShipping}
              onChange={(e) => updateProduct('freeShipping', e.target.checked)}
            />
            <Paragraph>Free Shipping</Paragraph>
          </label>
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={formData.product.available}
              onChange={(e) => updateProduct('available', e.target.checked)}
            />
            <Paragraph>Available</Paragraph>
          </label>
        </div>
      </div>

      <Divider />
      <div className="flex flex-col gap-4">
        <Heading variant="title">Categories</Heading>
        <MultiAddSelect
          label="Categories"
          options={categoriesList}
          selected={formData.categories}
          onAdd={(item) => handleCategoriesChange([...formData.categories, item])}
          onRemove={(item) =>
            handleCategoriesChange(formData.categories.filter((c) => c.value !== item.value))
          }
          placeholder="Add category"
          error={errors['categories']}
        />
      </div>

      <Divider />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Heading variant="title">Variants</Heading>
          <Button
            tertiary
            type="button"
            onClick={() =>
              setFormData((p) => ({ ...p, variants: [...p.variants, createEmptyVariant()] }))
            }
          >
            <Plus size={16} /> Add Variant
          </Button>
        </div>
        {formData.variants.length > 0 ? (
          formData.variants.map((v, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input
                placeholder="Variant ID"
                value={v.variantId}
                onChange={(val) => updateVariant(i, 'variantId', val)}
                error={errors[`variants[${i}].variantId`]}
              />
              <Input
                placeholder="Title"
                value={v.title}
                onChange={(val) => updateVariant(i, 'title', val)}
                error={errors[`variants[${i}].title`]}
              />
              <Input
                type="number"
                min={0}
                placeholder="Price"
                value={v.price}
                onChange={(val) => updateVariant(i, 'price', Math.max(0, Number(val)))}
                error={errors[`variants[${i}].price`]}
              />
            </div>
          ))
        ) : (
          <p className="px-2 text-sm text-red-500">{errors['variants'] || 'No variants added'}</p>
        )}
      </div>

      <Divider />
      <div className="flex flex-col gap-4">
        <Heading variant="title">Images</Heading>

        <div className="flex gap-2">
          <Input
            placeholder="Image URL"
            value={formData._imageInput || ''}
            onChange={(v) => setFormData((p) => ({ ...p, _imageInput: v }))}
            error={errors['images']}
          />
          <Button
            type="button"
            tertiary
            onClick={() => {
              if (!formData._imageInput) return;
              setFormData((p) => ({
                ...p,
                images: [...p.images, p._imageInput],
                _imageInput: '',
              }));
              setErrors((e) => {
                const ne = { ...e };
                delete ne.images;
                return ne;
              });
            }}
          >
            Add
          </Button>
        </div>

        {formData.images.length > 0 && (
          <div className="flex gap-3 overflow-x-auto py-2">
            {formData.images.map((src, idx) => (
              <div key={idx} className="relative shrink-0">
                <img src={src} alt="" className="w-24 h-24 object-cover rounded border" />
                <button
                  type="button"
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                  onClick={() =>
                    setFormData((p) => ({
                      ...p,
                      images: p.images.filter((_, i) => i !== idx),
                    }))
                  }
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <Heading variant="title">Features (max 6)</Heading>

        <div className="flex gap-2">
          <Input
            placeholder="Feature"
            value={formData._featureInput || ''}
            onChange={(v) => setFormData((p) => ({ ...p, _featureInput: v }))}
            error={errors['features']}
          />
          <Button
            type="button"
            tertiary
            onClick={() => {
              if (!formData._featureInput || formData.features.length >= MAX_FEATURES) return;

              setFormData((p) => ({
                ...p,
                features: [...p.features, p._featureInput],
                _featureInput: '',
              }));

              setErrors((e) => {
                const ne = { ...e };
                delete ne.features;
                return ne;
              });
            }}
          >
            Add
          </Button>
        </div>

        {formData.features.length > 0 && (
          <div className="flex flex-wrap gap-2 max-w-full">
            {formData.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm break-all"
              >
                {f}
                <button
                  type="button"
                  className="text-red-500 font-bold"
                  onClick={() =>
                    setFormData((p) => ({
                      ...p,
                      features: p.features.filter((_, idx) => idx !== i),
                    }))
                  }
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider />
      <div className="flex flex-col gap-4">
        <Heading variant="title">Buy Together (max 2)</Heading>
        <MultiAddSelect
          label="Buy Together"
          options={productsList}
          selected={formData.buyTogether}
          onAdd={(item) =>
            handleBuyTogetherChange([
              ...formData.buyTogether,
              { ...item, value: String(item.value) },
            ])
          }
          onRemove={(item) =>
            handleBuyTogetherChange(
              formData.buyTogether.filter((bp) => String(bp.value) !== String(item.value))
            )
          }
          placeholder="Add product"
          max={2}
          error={errors['buyTogether']}
        />
      </div>

      {message && (
        <div
          className={`flex items-center gap-2 rounded-md border  px-4 py-2 text-sm
            ${messageType === 'success' ? 'text-green-600 border-green-500 bg-green-50' : 'text-red-600 border-red-500 bg-red-50'}`}
        >
          <AlertCircle className="h-4 w-4" />
          {message}
        </div>
      )}

      <Button secondary type="submit" disable={loading}>
        {loading ? 'Saving...' : 'Save Product'}
      </Button>
    </form>
  );
};

export default AddProductForm;
