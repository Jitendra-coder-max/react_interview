import React, { useState } from "react";

const Togglecolor = () => {

    const [show,setShow] = useState(true);

    // const [color, setColor] = useState('blue')

    const toggleHandler = () =>{

        setShow(!show)
        // setColor(color ==='black' ? 'yellow': 'black')

    }
  return (
    <div>

        <button onClick ={ toggleHandler}>click here</button>
         {  <p style={{ color: show? 'red' : 'black' }}>text messages are used for personal, family, business, and social purposes.
      Governmental and non-governmental organizations use text messaging for
      communication between colleagues. In the 2010s, the sending of short
      informal messages became an accepted part of many cultures, as happened
      .</p>}
    </div>
  );
};

export default Togglecolor;
