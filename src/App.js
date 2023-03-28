import React from "react";

import {NavLink} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <div className="header">
        <NavLink to='/'>
        <h4 className="h4"> AboutUs</h4>
       </NavLink>
       <NavLink to='/login'>
        <h4 className="h4"> Login</h4>
       </NavLink>
       <NavLink to='/register'>
       <h4 className="h4"> Register</h4>
       </NavLink>
      </div>
    </div>
  );
}
