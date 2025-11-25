import { ProductCard } from '@components';

export default function ProductsPageTemplate({ products = [] }) {
  return (
    <div className="products-page container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.length
          ? products.map((product) => <ProductCard key={product.id} product={product} />)
          : Array(6)
              .fill(0)
              .map((_, idx) => (
                <ProductCard key={idx} product={{ name: 'Loading...', price: 0 }} />
              ))}
      </div>
    </div>
  );
}
