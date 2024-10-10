import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";

import { DarkModeContext } from "../../context/darkModeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <span>Logo</span>
        </div>
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            
          </div>
          <div className="item">
            <img src={Market} alt="" />
            
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            {darkMode ? (
              <WbSunnyOutlinedIcon onClick={toggle} />
            ) : (
              <DarkModeOutlinedIcon onClick={toggle} />
            )}
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default LeftBar;
