import { BrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
