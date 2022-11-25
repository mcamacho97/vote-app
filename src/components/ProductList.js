import React from "react";
import Product from "./Product";
import data from "../utils/Data";

const ProductList = () => {
  const products = data[0];
  return (
    <div className="ui unstackable items">
      <Product
        id={products.id}
        title={products.title}
        description={products.description}
        url={products.url}
        votes={products.votes}
        submitterAvatarUrl={products.submitterAvatarUrl}
        productImageUrl={products.productImageUrl}
      />
    </div>
  );
};

export default ProductList;
