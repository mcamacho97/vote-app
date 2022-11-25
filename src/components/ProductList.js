import React from "react";
import Product from "./Product";
import data from "../utils/Data";

const ProductList = () => {
  //Variable with a sorted array of data
  const handleProductUpVote = (productId) => {
    console.log(`${productId} was upvoted`);
  };
  const products = data.sort((a, b) => b.votes - a.votes);
  return (
    <div className="ui unstackable items">
      {products.map((product) => (
        <Product
          key={`product-${product.id}`}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={handleProductUpVote}
        />
      ))}
    </div>
  );
};

export default ProductList;
