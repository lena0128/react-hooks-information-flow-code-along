import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] =useState("#FFF");

  function handleChnageColor(newChildColor){
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChnageColor} />
      <Child color={childrenColor} onChangeColor={handleChnageColor} />
    </div>
  );
}

export default Parent;
