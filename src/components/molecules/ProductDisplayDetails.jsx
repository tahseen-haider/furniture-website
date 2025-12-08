import {
  Link,
  Heading,
  Price,
  Divider,
  Paragraph,
  BWButton,
  QuantitySelector,
  Button,
  ProductDisplayDetailsSkeleton,
} from '@components';
import { useState } from 'react';

const ProductDisplayDetails = ({ product, loading }) => {
  if (loading) return <ProductDisplayDetailsSkeleton />;

  const { vendor, title, price, id, description, features, variants, freeShipping } = product;

  const [openDetails, setOpenDetails] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState({});
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full md:w-2/5 relative md:sticky top-0 md:top-20 flex flex-col gap-4 lg:gap-6">
      <Link to="/collections" underline="center-inverse" className="font-base! w-fit">
        {vendor}
      </Link>

      <div className="flex flex-col gap-4">
        <Heading level={2} variant="medium">
          {title}
        </Heading>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-start lg:items-center">
          <Price amount={selectedVariant?.price || price} />{' '}
          <span className="text-xs">SHIPPING CALCULATED AT CHECKOUT.</span>
        </div>
        <div className="p-1 px-2 bg-gray-200 w-fit"># {id}</div>
      </div>

      <Divider />

      <div className="flex flex-col gap-2">
        <Paragraph variant="H" maxChars={openDetails ? null : 120}>
          {description}
        </Paragraph>
        {features && (
          <div>
            {openDetails && (
              <div className="mb-2">
                <span className="">Features:</span>{' '}
                <div className="ml-4">
                  {features.map((feat, i) => (
                    <Paragraph variant="H">- {feat}</Paragraph>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Paragraph
        onClick={() => {
          setOpenDetails(!openDetails);
        }}
        variant="H"
        underline="center-inverse"
        className="cursor-pointer"
      >
        READ MORE +
      </Paragraph>

      {variants?.length > 0 && (
        <div className="flex flex-col gap-2">
          <div>
            <Paragraph variant="H" className="inline">
              SELECTED VARIANT:{' '}
            </Paragraph>{' '}
            <Paragraph variant="H" className="inline font-semibold! ml-2">
              {selectedVariant?.title || 'N/A'}
            </Paragraph>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            {variants.map((variant, i) => (
              <div
                key={i}
                className={`
                    p-1 px-2 border cursor-pointer 
                    ${selectedVariant?.title === variant?.title ? 'border-gray-900' : 'border-gray-300'}`}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant?.title}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-2/5 h-full">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className="w-full">
          <BWButton text="ADD TO CART" onClick={() => {}} />
        </div>
      </div>

      <Button secondary className="font-medium!">
        Chat With Our Interior Consultant
      </Button>

      <div className="flex flex-col gap-2">
        {freeShipping && <Paragraph variant="H">✓ Free delivery and shipping</Paragraph>}
        <Paragraph variant="H">✓ Secure online payment</Paragraph>
      </div>
    </div>
  );
};

export default ProductDisplayDetails;
