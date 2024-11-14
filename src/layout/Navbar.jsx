import React from 'react';
import { FaHome, FaUserPlus, FaSignInAlt } from 'react-icons/fa'; 
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const menuItems = [
    {
      name: 'Home',
      icon: <FaHome />,
      path: '/',
    },
    {
      name: 'Register',
      icon: <FaUserPlus />,
      path: '/register',
    },
    {
      name: 'Login',
      icon: <FaSignInAlt />,
      path: '/login',
    },
  ];

  return (
    <nav className="w-full bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">MyApp</div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center space-x-2 hover:text-sky-300"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white">
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
