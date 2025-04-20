import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 p-6 mb-6 rounded-lg">
      <div className="flex flex-col items-center mb-4 relative">
        <div className="absolute right-0 top-0">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to night mode"}
            title={darkMode ? "Switch to light mode" : "Switch to night mode (reduces eye strain)"}
          >
            {darkMode ? (
              // sun icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // moon icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
        <h1 className="text-3xl font-bold font-kanit text-gray-800 dark:text-white text-center">Electric Vehicle (EV) Population Data Dashboard </h1>

      </div>
      <p className="text-l font-Questrial text-gray-600 dark:text-gray-300 text-center">
        This database contains detailed data regarding electric cars registered in Washington State.
It contains information like vehicle model, make, year, electric range, type of vehicle (BEV or PHEV),
location information (county, city, zip code), and clean fuel alternative vehicle qualification.
The data can be utilized for the analysis of EV adoption patterns, geographic spread, and best-selling vehicle models
throughout various parts of Washington.
      </p>
    </header>
  );
};

export default Header;
