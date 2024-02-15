import { FaBeer } from "react-icons/fa";
import { useState } from "react";
import data from "./data";

const App = () => {
  console.log(data);
  const [people, setPeople] = useState();

  return (
    <main>
      <article className="review"></article>
    </main>
  );
};
export default App;
