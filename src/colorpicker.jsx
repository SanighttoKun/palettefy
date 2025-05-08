import React, { useState } from 'react'
import { ChromePicker } from 'react-color'


function ColorPicker() {
  const [color, setColor] = useState('#FFF233')
  const [showPicker, setShowPicker] = useState(false)

  const handleClickChange = (event) =>{
    if (e.target === e.currentTarget) {
      setShowPicker(true);
    }
  }

  const handleColorChange = (event) =>{
    setColor(event.target.value)
  }

  const handleClickOutside = () => {
    setShowPicker(false);
  };

   

  return (
      <div className="color-palette-container">
        <h2>Color Picker</h2>
        <div className ="color-display" 
             style={{ backgroundColor: color}} 
             onclick ={handleClickChange} 
        >
        <p>Selected Color: {color}</p>
        
        </div>


        {showPicker && (
          <div className = "close-picker" onclick = {handleClickOutside}>
            <ChromePicker
              color = {color}
              onChange={handleColorChange}/>
          </div> 
        )}    
      </div>  
                        
      
    )
  
}
export default ColorPicker