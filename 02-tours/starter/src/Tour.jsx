import React from "react";

const Tour = ({ image, info, price, name }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="price">$ {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="info-btn">read more</button>
      </div>
      <button className="delete-btn btn-block btn" type="button">
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
