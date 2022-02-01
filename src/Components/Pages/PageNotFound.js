import React from 'react';
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return <div>
      <h1 className='display-1'>Page Not Found</h1>
      <Link className="link" to="/">Go to Home</Link>
  </div>;
};

export default PageNotFound;
