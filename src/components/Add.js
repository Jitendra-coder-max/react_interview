import React from 'react'

export const Add = () => {

    // const addNum = () => {

    //     console.log(2+5)
    // }

    const addNum = (x, y) => {

        console.log(x + y)
    }
    return (
        <div>Add

            { /* <button onClick={addNum}> Add two num</button> */}

            <button onClick={() => addNum(2, 4)}>Add two num</button> // passing para meter
        </div>
    )
}
