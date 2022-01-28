import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
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
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3005/user", user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
            <button className="btn btn-primary btn-block p-2">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
