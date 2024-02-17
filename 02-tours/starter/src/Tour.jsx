import React from "react";
import { useState } from "react";

const Tour = ({ image, info, price, name, id, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">$ {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>

        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadmore(!readmore)}>
            {readmore ? "read less" : "read more"}
          </button>
        </p>
      </div>
      <button
        className="delete-btn btn-block btn"
        type="button"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
