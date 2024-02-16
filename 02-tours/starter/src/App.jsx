import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTours(data);
    };
    fetchTours();
  }, []);

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
        <Tours tours={tours}></Tours>
      </section>
    </main>
  );
};
export default App;
