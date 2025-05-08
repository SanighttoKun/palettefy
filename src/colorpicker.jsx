import React, { useState } from 'react'

function colorSelector(){

}



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
            
      </div>  
                        
      
    )
  
}
export default ColorPicker