import React from "react";

const Product = () => {
  return (
    <div className="item">
      <div className="image">
        <img
          src="/images/products/image-aqua.png"
          alt="first_product"
        />
      </div>
      <div className="middle aligned content">
        <div className="description">
          <a href=".">Fort Knight</a>
          <p>Authentic renaissance actors, deliverd in just two week</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img
            className="ui avatar image"
            src="/images/avatars/daniel.jpg"
            alt="first_avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
