import React from 'react'
// set innerHTML in react
const InnerH = () => {
let data = `<p style="color :red"> This is inner Text </P>`

  return (
    <div>InnerH
    <div dangerouslySetInnerHTML={{ __html:data}}></div>
    <p style={{color: "orange"}}> paragraph</p>
    </div>
  )
}

export default InnerH