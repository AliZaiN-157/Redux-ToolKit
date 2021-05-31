import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/reducers/usersReducer";

const Home = () => {
  const state = useSelector((state) => state.users);
  const inputRef = useRef("");
  const dispatch = useDispatch();
  console.log(state);

  const storeUser = (e) => {
    e.preventDefault();
    dispatch(addUser(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={storeUser}>
        <input type="text" name="" placeholder="Add user..." ref={inputRef} />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default Home;
