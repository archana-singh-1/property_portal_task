import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

function Home() {
  const [data, setData] = useState([]); 

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res); 
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data");

  
  return (
    <>
      <Header />
      <Outlet />
  {/*<div className="home-page">*/}
  {/*<div className="row">*/}
          {data.map((item) => (
            <div className="col" key={item.id}>
              {/* <p>ID: {item.id}</p> */}
              {/* <p>Title: {item.title}</p> */}
              <img src={item.image} alt={item.title} />
            </div>
          ))}
         {/*</div>*/}
          {/*</div>*/}
      <Footer />
    </>
  );
}  
export default Home;