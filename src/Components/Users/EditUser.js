import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3005/user/${id}`, user);
    navigate("/");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your user name"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Wevsite Name"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <button className="form-control form-control-lg btn btn-warning btn-block p-2">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
