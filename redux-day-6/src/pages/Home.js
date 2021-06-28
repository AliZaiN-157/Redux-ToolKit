import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions/usersAction";
import User from "../components/User";
import Loader from "../components/Loader";
import Filter from "../components/Filter";

const Home = () => {
  const { users, loader } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return !loader ? (
    <>
      <Filter />
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={index} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
