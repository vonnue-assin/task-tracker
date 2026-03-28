import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import { Home } from "./pages/home";

import "./App.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
