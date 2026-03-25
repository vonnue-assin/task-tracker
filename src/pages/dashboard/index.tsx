import "./styles.css";

import dashboardImage from "../../assets/images/dashboard.png";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="image-card">
        <img
          src={dashboardImage}
          width={30}
          height={30}
          alt="Dashboard"
          className="dashboard-image"
        />
        <h2 className="dashboard-title">Dashboard</h2>
      </div>
    </div>
  );
};
