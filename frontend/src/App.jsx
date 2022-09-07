import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons";
import { Route,Routes } from "react-router-dom";
import Home from "./Page/Home";
import Signin from "./Page/Signin";
import Signup from "./Page/signup";
import Admin from "./Page/Admin";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
