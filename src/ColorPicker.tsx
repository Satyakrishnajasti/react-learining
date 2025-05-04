import { useState } from "react";

export function ColorPicker() {
  const [color, setColor] = useState("FFFFF");

  function handelColorChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handelColorChange} />
    </div>
  );
}

export default ColorPicker;
