import React ,{useState}from 'react'

const Show = () => {

    const [show, setShow] = useState(false)
  return (
    <div>Show

      <button onClick={() => setShow(!show)}> {show ? 'show element' : 'hide element'}</button>

      {/* {show && <div> show text</div>} */}
      {show ? "show" : "hide"}
    </div>
  )
}

export default Show