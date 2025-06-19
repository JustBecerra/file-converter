import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2 ml-3 sm:ml-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-sm md:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              FileConverter
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-4 mr-4">
            <h3
              className="text-base text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Login
            </h3>
            <h3
              className="text-base text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Register
            </h3>
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              <svg
                className="w-5 h-5 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </div>

          <div className="md:hidden mr-3">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-center justify-between py-2">
                <h3 className="text-base text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  Login
                </h3>
              </div>
              <div className="flex items-center justify-between py-2">
                <h3 className="text-base text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  Register
                </h3>
              </div>
              <div className="flex items-center py-2 gap-x-4">
                <span className="text-base text-gray-600 dark:text-gray-300">Dark Mode</span>
                <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}; 