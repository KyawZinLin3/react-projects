import people from "./data";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState(people);
  // setPersons(people);
  console.log(persons);
  const count = persons.length;
  console.log(count);
  return (
    <main>
      <section className="container">
        <h3>{count} Birthdays Today</h3>
        <section>
          {persons.map((person) => {
            const { id, name, age, image } = person;

            return (
              <article className="person" key={id}>
                <img src={image} alt={name} className="img" />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
        </section>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPersons([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
