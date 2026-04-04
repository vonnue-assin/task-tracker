import { Link } from "react-router-dom";
import { sidebarLinks } from "../../sideBarLinks";

import settingsImage from "../../assets/images/play.png";
import logoutImage from "../../assets/images/round.png";
import { ReactComponent as OrganizoLogo } from "../../assets/svg/organizo.svg";

import "./styles.css";

const Sidenavbar: React.FC = () => {
  return (
    <aside className="sidenavbar">
      <div className="organzo-card">
        <OrganizoLogo className="whole-logo" />
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
            <img src={settingsImage} alt="settings" width={30} height={30} />
            <span>Settings</span>
          </Link>

          <Link to="/logout" className="bottom-item logout">
            <img src={logoutImage} alt="logout" width={30} height={30} />
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidenavbar;