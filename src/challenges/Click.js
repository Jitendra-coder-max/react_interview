

import React, { useEffect } from 'react'

const Click = () => {

    const btnClick = () => {
          console.log("Clicked")
    }

  return (
    <div>Click
        <button onClick={btnClick}>clcik </button>
    </div>
  )
}

export default Click