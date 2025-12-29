import { Heading, Input, Button, Divider } from '@components';
import { AlertCircle } from 'lucide-react';
import { useState, useRef } from 'react';

const AddCategoryForm = ({ onSubmit, onClose }) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    link: '',
    image: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.title) errs.title = 'Title is required';
    if (!formData.slug) errs.slug = 'Slug is required';
    if (!formData.link) errs.link = 'Link is required';
    if (!formData.image) errs.image = 'Image URL is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validate()) {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    try {
      setLoading(true);
      const success = await onSubmit(formData, { setErrors, setMessage });

      if (success) {
        setMessage('Category created successfully');
        setErrors({});
        onClose?.();
      }
    } catch (err) {
      setMessage(err.message || 'Failed to create category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl max-h-[calc(100vh-6rem)] p-4 flex flex-col gap-6 overflow-y-auto"
    >
      <Heading variant="title">Category Information</Heading>

      <Input
        placeholder="Title"
        value={formData.title}
        onChange={(v) => setFormData((p) => ({ ...p, title: v }))}
        error={errors.title}
      />
      <Input
        placeholder="Slug"
        value={formData.slug}
        onChange={(v) => setFormData((p) => ({ ...p, slug: v }))}
        error={errors.slug}
      />
      <Input
        placeholder="Link"
        value={formData.link}
        onChange={(v) => setFormData((p) => ({ ...p, link: v }))}
        error={errors.link}
      />
      <Input
        placeholder="Image URL"
        value={formData.image}
        onChange={(v) => setFormData((p) => ({ ...p, image: v }))}
        error={errors.image}
      />

      {message && (
        <div className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-red-600 border-red-500 bg-red-50">
          <AlertCircle className="h-4 w-4" />
          {message}
        </div>
      )}

      <Button secondary type="submit" disable={loading}>
        {loading ? 'Saving...' : 'Save Category'}
      </Button>
    </form>
  );
};

export default AddCategoryForm;
