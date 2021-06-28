import React, { useRef } from "react";
import { filteredUsers } from "../store/reducers/usersReducer";
import { useDispatch } from "react-redux";

function Filter() {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const filterUsers = () => {
    dispatch(filteredUsers(inputRef.current.value));
  };
  return (
    <>
      <input
        type="text"
        name=""
        className="form-control my-3"
        placeholder="Search user by name ..."
        ref={inputRef}
        onChange={filterUsers}
      />
    </>
  );
}

export default Filter;
