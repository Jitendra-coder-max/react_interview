import React,{useState} from  'react';

const Toggle = () => {
  
    const [show, setShow] = useState(true)


    const toggleHandler = () => {
        setShow(!show)
    }
    return (
        <>
        <h1>Toggle</h1>

        {/* <button onClick={ () => setShow(!show)}> */}
            {/* {show ? 'Hide element' : 'Show element'} click here */}

           
        {/* </button> */}

<button onClick={toggleHandler}> Click here </button>

        {show && <p> This is challenge string</p>}
    {/* {show ? 'Hide element' : ' '}  */}
        </>

    )
}

export default Toggle;