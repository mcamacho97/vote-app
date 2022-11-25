import React from "react";
import Product from "./Product";
import data from "../utils/Data";

const ProductList = () => {
  return (
    <div className="ui unstackable items">
      {data.map((product) => (
        <Product
          key={`product-${product.id}`}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
