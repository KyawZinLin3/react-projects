import React from "react";
import Person from "./Person";

const List = ({ persons }) => {
  return (
    <section>
      {persons.map((person) => {
        const { id } = person;

        return <Person key={id} {...person} />;
      })}
    </section>
  );
};

export default List;
