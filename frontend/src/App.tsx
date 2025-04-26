import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import Home from "./components/Home";
import Finance from "./components/Finance";
import Profile from "./components/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/finance" element={<Finance isLoggedIn={isLoggedIn} username={username}/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile username={username} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
