import React from "react";
import GridShape from "../common/GridShape";
import { Link } from "react-router-dom"; 
import ThemeTogglerTwo from "../common/ThemeTogglerTwo";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/signin" className="block mb-4">
                <img
                  width={430}
                  height={14}
                  src="/images/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
