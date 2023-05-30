import "./sidebar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">DashBoard</span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
       
        <p style={{fontSize:"14px",color:"gray"}}>Dark mode</p>
<div
  className="colorOption"
  onClick={() => dispatch({ type: "LIGHT" })}
></div>
       
  
   <p style={{fontSize:"14px",color:"gray"}}>Light mode</p>
<div
  className="colorOption"
  onClick={() => dispatch({ type: "DARK" })}
></div>
  
      
      </div>
    </div>
  );
};

export default Sidebar;
