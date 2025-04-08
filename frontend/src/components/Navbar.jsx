import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import AuthService from "../services/authService";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const isAuthenticated = AuthService.isAuthenticated();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    AuthService.logout();
    navigate("/signin");
  };

  const MenuIcon = isMenuOpen ? FaTimes : FaBars;

  const AuthLinks = () => (
    <>
      <span className="text-white mr-4 flex items-center">
        <FaUser className="mr-1" />
        {currentUser?.firstName || "User"}
      </span>
      <button
        onClick={handleLogout}
        className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg shadow flex items-center transition-colors duration-300"
      >
        <FaSignOutAlt className="mr-1" />
        Logout
      </button>
    </>
  );

  const GuestLinks = () => (
    <div className="space-x-3">
      <Link
        to="/signin"
        className="text-white hover:text-gray-200 font-medium transition-colors duration-300"
      >
        Sign In
      </Link>
      <Link
        to="/signup"
        className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-300"
      >
        Sign Up
      </Link>
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-white font-bold text-xl flex items-center"
          >
            <FaLock className="h-5 w-5 mr-2" />
            AuthSystem
          </Link>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {isAuthenticated ? <AuthLinks /> : <GuestLinks />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <span className="text-white flex items-center px-2 py-1">
                    <FaUser className="mr-2" />
                    {currentUser?.firstName || "User"}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-300 flex items-center w-full justify-center"
                  >
                    <FaSignOutAlt className="mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="text-white hover:text-gray-200 font-medium transition-colors duration-300 px-2 py-1"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-300 text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
