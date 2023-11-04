import React, { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";

// Custom hook for fetching and managing data
function useDataFetching() {
  const [dataState, setDataState] = useState({
    data: [],
    error: null,
    loading: true,
  });

  useEffect(() => {
    fetch("http://localhost:4000/get_photo")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        if (Array.isArray(res)) {
          setDataState({ data: res, error: null, loading: false });
        } else {
          console.error("Data received is not an array", res);
          setDataState({ data: [], error: "Data received is not an array", loading: false });
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setDataState({ data: [], error: error.message, loading: false });
      });
  }, []);

  return dataState;
}

function Home() {
  const { data, error, loading } = useDataFetching();

  return (
    <div>
      <Header />
      <div className="home-page">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="row">
            {data.map((item) => (
              <div className="col" key={item.id}>
                <img src={`http://localhost:4000/uploads/${item.photos}`} alt={item.geo_location} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
