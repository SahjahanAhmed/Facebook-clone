import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar-components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  const currentPath = window.location.pathname;

  return (
    <>
      {currentPath !== "/login" && currentPath !== "/signup" && <Navbar />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
