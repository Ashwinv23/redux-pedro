import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themeActions } from "../features/theme";

function Theme() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      {console.log("color - ", color)}
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(themeActions.changeColor(color));
        }}
      >
        Color
      </button>
    </div>
  );
}

export default Theme;
