import people from "./data";
import List from "./List";
import Person from "./Person";
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
        <List persons={persons}></List>
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
