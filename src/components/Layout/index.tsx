import { Outlet } from "react-router-dom";

import Sidenavbar from "../sidenavbar";
import Header from "../header";

import "./styles.css";

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Sidenavbar />

      <div className="right-section">
        <Header />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;