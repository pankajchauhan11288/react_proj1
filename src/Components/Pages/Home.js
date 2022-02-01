import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3005/user");
    setUser(result.data.reverse());
  };
  const DeletUse = async id=>{
    await axios.delete(`http://localhost:3005/user/${id}`);
    loadUsers();
  }
  return (
    <div>
      <h1>Home Page</h1>
      <table className="table caption-top border shadow">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((users,index)=>(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>
                  <Link className="btn btn-primary m-2" to={`/Users/view/${users.id}`}>View</Link>
                  <Link className="btn btn-success m-2" to={`/Users/edit/${users.id}`}>Edit</Link>
                  <Link className="btn btn-danger" onClick={()=>DeletUse(users.id)} to="#">Delete</Link>
                </td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
