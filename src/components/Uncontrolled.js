import React, { useRef } from 'react'

const Uncontrolled = () => {

    const name = useRef();
     const age = useRef();



    const submit = (e) =>{
               e.preventDefault()

               console.log(name.current.value);
        console.log(age.current.value)
    }




    

  return (
    <form  onSubmit={submit}>
    <div>Uncontrolled
    <input placeholder='your name'  ref={name}/>
          <input placeholder='your age' ref={age} />
          <button type="submit">Submit</button>
    </div>
      </form>
  )
}

export default Uncontrolled