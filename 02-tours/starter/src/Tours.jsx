import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id}></Tour>;
      })}
    </div>
  );
};

export default Tours;
