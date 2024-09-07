// components/FeaturedProducts.tsx
import React from "react";
import ProductCard from "./ProductCard";
import '../css/FeaturedProducts.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image_01: string;
  availability: string;
  category: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const getMainCategoryName = (category: string) => {
    // Replace this with your logic to fetch the main category name
    return category;
  };

  return (
    <div>
      <div className="separator">
        <h4>Featured Products</h4>
        <div className="line"></div>
      </div>
      <div className="featured-products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            getMainCategoryName={getMainCategoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
