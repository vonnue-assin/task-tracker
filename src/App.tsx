import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import { Dashboard, Home, MyTasks } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          {/* <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
