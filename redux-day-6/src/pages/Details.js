import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/usersAction";
import Loader from "../components/Loader";

function Details() {
  const { id } = useParams();
  const { loader, user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return !loader ? (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <div className="card mt-3">
        <div className="card-header">
          <h3>
            <span className="text-info">{user.name}</span> details
          </h3>
        </div>
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-3">Name</div>
            <div className="col-9 text-end">{user.name}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Email</div>
            <div className="col-9 text-end">{user.email}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Username</div>
            <div className="col-9 text-end">{user.username}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">City</div>
            <div className="col-9 text-end">{user.address.city}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Website</div>
            <div className="col-9 text-end">{user.website}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3">Phone</div>
            <div className="col-9 text-end">{user.phone}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Details;
