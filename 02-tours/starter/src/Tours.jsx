import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} removeTour={removeTour}></Tour>;
      })}
    </div>
  );
};

export default Tours;
