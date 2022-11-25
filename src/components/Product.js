import React from "react";

const Product = (props) => {
  const { id, title, description, votes, submitterAvatarUrl, productImageUrl } =
    props;

  const handleUpVote = () => {
    props.onVote(id);
  };
  return (
    <div className="item">
      <div className="image">
        <img src={productImageUrl} alt="first_product" />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={handleUpVote}>
            <i className="large caret up icon" />
          </a>
          {votes}
        </div>
        <div className="description">
          <a href=".">{title}</a>
          <p>{description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img
            className="ui avatar image"
            src={submitterAvatarUrl}
            alt="first_avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
