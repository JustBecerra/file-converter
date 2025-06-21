import React, { useState } from 'react';

interface ConvertButtonProps {
  onConvert: () => void;
  disabled?: boolean;
  isConverting?: boolean;
}

export const ConvertButton: React.FC<ConvertButtonProps> = ({
  onConvert,
  disabled = false,
  isConverting = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <button
        onClick={onConvert}
        disabled={disabled || isConverting}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 transform ${disabled || isConverting
          ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
          } focus:outline-none focus:ring-4 focus:ring-blue-500/50`}
      >
        <div className="flex items-center justify-center space-x-2 sm:space-x-3">
          {isConverting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
              <span className="text-sm sm:text-base">Converting...</span>
            </>
          ) : (
            <>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-sm sm:text-base">Convert File</span>
            </>
          )}
        </div>
      </button>

      {!disabled && !isConverting && (
        <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3">
          Your file will be processed securely and deleted after conversion
        </p>
      )}
    </div>
  );
}; 