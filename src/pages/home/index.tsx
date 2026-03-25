import { Routes, Route } from "react-router-dom";

import Sidenavbar from "../../components/sidenavbar";
import { Dashboard, MyTasks } from "../../pages";
import { routes } from "../../router";

export const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidenavbar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.myTasks} element={<MyTasks />} />
        </Routes>
      </div>
    </div>
  );
};
