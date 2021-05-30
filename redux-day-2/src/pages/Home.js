import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.users);
  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
