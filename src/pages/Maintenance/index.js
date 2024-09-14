import React from "react";

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#3C5D87] to-[#2c4a72]">
      <div className="text-center p-10 bg-white shadow-xl rounded-lg border border-gray-300 max-w-md mx-auto">
        <div className="mb-6">
          <svg
            className="w-24 h-24 text-blue-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6M9 16h6M9 8h6M12 6h.01M6 12h.01M6 8h.01M18 12h.01M18 8h.01M3 12h.01M3 16h.01M21 12h.01M21 16h.01"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Under Maintenance
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We are currently making improvements to our website. We appreciate
          your patience and understanding. Please check back later.
        </p>
        <div className="mb-6">
          <p className="text-md text-gray-600">
            For urgent inquiries, contact us:
          </p>
          <a
            href="mailto:saraldyes@gmail.com"
            className="text-blue-500 hover:underline mt-2 block">
            saraldyes@gmail.com
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
