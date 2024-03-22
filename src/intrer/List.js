import React, { useState } from 'react'


const List = () => {
    const arr =  ["Play cricket", "Play Games", "play hockey"];

    const [games, setGames] = useState(arr);

    const handleDelete = (i,checked) => {
 if(checked){
   const filteredGames =  games.filter((game,index) => ( index !== i))
setGames(filteredGames)
    }
    }
  return (
    <div>List
 <ul>
        {
            games.map((game,index) => {
                return (
                    <li key ={index}>
                        <input  type="checkbox" onChange={(e) => handleDelete(index, e.target.checked)}/>
                        
                         {game}

                    <button  onClick ={ () => handleDelete(index,true)}> Delete</button>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default List