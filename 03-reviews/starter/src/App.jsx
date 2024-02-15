import { FaBeer } from "react-icons/fa";
import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <main>
      <article className="review">
        {people.map((person) => {
          const { id, name, job, image, text, author } = person;
          return (
            <>
              <div className="img-container">
                <img src={image} alt={name} className="person-img" />
              </div>
              <h4 className="author">{name}</h4>
              <p className="job">{job}</p>
              <p className="info">{text}</p>
            </>
          );
        })}
      </article>
    </main>
  );
};
export default App;
