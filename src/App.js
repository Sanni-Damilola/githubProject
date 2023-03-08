// import logo from './logo.svg';

import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Victor from "./Components/pratice/victor";

import "./App.css";

import Olami from "./Components/pratice/olami";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <AllRoutes />
      <Olami />
      <Victor />
    </div>
  );
}

export default App;
