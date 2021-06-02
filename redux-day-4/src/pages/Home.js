import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions/usersAction";

const Home = () => {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>List of users</h1>
    </div>
  );
};

export default Home;
