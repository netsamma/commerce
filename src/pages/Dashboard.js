import React, { useContext } from "react";
import Login from "../components/Login";
import Navbar from "../components/NavBar";
import { Sidebar } from "../components/Sidebar";
import Users from "../components/Users";
import AuthContext from "../context/AuthContext";

function Dashboard(props) {
  const {success} =  useContext(AuthContext);

  return (
    <div>
		<Navbar numbOfCartItems={props.numbOfCartItems} />
    
		{success?
      <>
        <Sidebar/>
        <Users />
      </>:
        <Login/>}
	</div>
  );
}

export default Dashboard;
