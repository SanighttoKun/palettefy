import React, { useState } from 'react'


import { useState } from 'react';

export default function ColorPickerBackground() {
  const [backgroundColor, setBackgroundColor] = useState('#3498db');
  const [showPicker, setShowPicker] = useState(false);
  
  const handleBackgroundClick = (e) => {
    // Only show picker when clicking directly on the background
    if (e.target === e.currentTarget) {
      setShowPicker(true);
    }
  };
  
  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };
  
  const handleClickOutside = () => {
    setShowPicker(false);
  };

  return (
    <div 
      className="flex justify-center items-center h-screen w-full cursor-pointer relative"
      style={{ 
        backgroundColor: backgroundColor,
        transition: 'background-color 0.3s'
      }}
      onClick={handleBackgroundClick}
    >
      <div className="text-white text-2xl font-bold text-center p-4 shadow-sm">
        Click on the background to open color picker
      </div>
      
      {showPicker && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleClickOutside}>
          <div className="bg-white p-6 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Choose a color</h3>
            <div className="flex flex-col gap-4">
              <input 
                type="color" 
                value={backgroundColor}
                onChange={handleColorChange}
                className="w-full h-12 cursor-pointer"
              />
              <div className="flex gap-4">
                <div className="px-4 py-2 text-sm bg-gray-200 rounded text-gray-800">
                  Current color: {backgroundColor}
                </div>
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleClickOutside}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}