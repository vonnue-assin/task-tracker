import { Link } from "react-router-dom";

import { sidebarLinks } from "../../sideBarLinks";

import settingsImage from "../../assets/images/play.png";
import logoutImage from "../../assets/images/round.png";
import { ReactComponent as OrganizoLogo } from "../../assets/svg/organizo.svg";

import "./styles.css";

const Sidenavbar = () => {
  return (
    <div className="sidenavbar">
      <div className="organzo-card">
        <OrganizoLogo className="whole-logo"/>
      </div>

      <div className="nav-card">
        <nav className="nav-links">
          {sidebarLinks.map((link) => (
            <Link to={link.path} className="image-card" key={link.name}>
              <img src={link.icon} width={32} height={32} alt={link.alt} />
              <span className="link-text">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="bottom-links">
          <Link to="/settings" className="bottom-item">
            <img
              src={settingsImage}
              alt="settingsImage"
              height={30}
              width={30}
            />
            Settings
          </Link>
          <Link to="/logout" className="bottom-item logout">
            <img src={logoutImage} alt="settingsImage" width={30} height={30} />
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
