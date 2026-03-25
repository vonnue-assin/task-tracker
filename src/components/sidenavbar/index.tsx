import { Link } from "react-router-dom";

import { sidebarLinks } from "../../sideBarLinks";

import { ReactComponent as OganzoLogo } from "../../assets/svg/organization-svgrepo-com.svg";

import "./styles.css";

const Sidenavbar = () => {
  return (
    <div className="sidenavbar">
      <div className="organzo-card">
        <OganzoLogo className="organzo-logo" width={30} height={30} />
        <h2 className="organizo-title">ORGANIZO</h2>
      </div>

      <nav className="nav-links">
        {sidebarLinks.map((link) => (
          <div className="image-card" key={link.name}>
            <img src={link.icon} width={25} height={25} alt={link.alt} />
            <Link to={link.path} className="link">
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidenavbar;
