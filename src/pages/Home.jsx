// src/pages/Home.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Product from "../components/Home/Product";

const Home = () => {
  const products = useLoaderData();
  
  return (
    <div>
      <Banner />
      <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-36 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;