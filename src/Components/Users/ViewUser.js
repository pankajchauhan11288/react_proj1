import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/user/${id}`);
    setUser(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container p-4">
      <Link className="btn btn-primary" to="/">Back to Home</Link>
      <h1 className="display-4">User Id:{id}</h1>
      <hr />
      <ul className="list-group w-50">
          <li className="list-group-item"><b>Name:</b> {user.name}</li>
          <li className="list-group-item"><b>User Name:</b> {user.username}</li>
          <li className="list-group-item"><b>Email:</b> {user.email}</li>
          <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
          <li className="list-group-item"><b>Website:</b> {user.website}</li>
      </ul>
    </div>
  );
};

export default ViewUser;
