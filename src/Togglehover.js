import React, { useState } from 'react'

const Togglehover = () => {

  const [isHover,setIshover] = useState(false);


const toggle = (isEnter) => {
setIshover(isEnter)
}

  return (
    <div>
<p style ={{background : isHover ? "orange" : "red"}}
onMouseEnter={() => toggle(true)}
onMouseLeave ={() => toggle(false)}

> element</p>
<h1> Hii</h1>
    </div>
  )
}

export default Togglehover



{/* <script>
      const element = document.querySelector("#element");

      const toggleColor = (isEntering) => {
        element.style.background = isEntering ? "orange" : "black";
      };

      element.addEventListener("mouseover", () => toggleColor(true));
      element.addEventListener("mouseleave", () => toggleColor(false));
    // </script> */}