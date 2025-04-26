import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="mr-4 hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="mr-4 hover:text-gray-400">
          About Us
        </Link>
        <Link to="/finance" className="mr-4 hover:text-gray-400">
          Finance
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Link to="/profile" className="text-white">
            <button className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600">
              Profile
            </button>
          </Link>
          <button
            onClick={handleAuthClick}
            className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleAuthClick}
          className="px-4 py-2 bg-blue-500 rounded-lg text-black hover:bg-blue-600"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
