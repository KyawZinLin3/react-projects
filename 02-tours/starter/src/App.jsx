import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    console.log(newTour);
    setTours(newTour);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading == true) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>no tour left</h2>
            <button type="button" className="btn" onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </section>
    </main>
  );
};
export default App;
