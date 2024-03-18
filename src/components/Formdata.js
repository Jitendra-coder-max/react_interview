import React ,{useState}from 'react'
// fundamental
const Formdata = () => {

    const [objData,setObjData] = useState({})

    // const handleChange = (e) => { 
    //     console.log(e.target.value)
    // }

    const handleChange = (value,name) => {
        // console.log(value);
        // console.log(name);
    //   console.log({[name] : value})

    let data = {[name]: value}
    setObjData({...objData, ...data})

    // console.log(data)
    }
    console.log(objData)

const submit = (e) => {
    e.preventDefault();
    console.log(objData)
}

  return (
    <form onSubmit={submit}>
    <div>Formdata
    
  {/* <input  placeholder="Enter Text Here" onChange={handleChange}/> */}  
    <input name="name" type="text" placeholder='Enter Text'  onChange={(e) => handleChange(e.target.value,e.target.name)}/>
    <br/>
          <input name="age" type="number" placeholder='Enter age' onChange={(e) => handleChange(e.target.value, e.target.name)} />
          <br/>
          <input name="hobbies"  type="text" placeholder='Enter you hobbies' onChange={(e) => handleChange(e.target.value, e.target.name)} />
          <br/>
          <input name="date"  type="date" placeholder='Enter date' onChange={(e) => handleChange(e.target.value, e.target.name)} />
       { /* <button  onClick={submit}> Submit</button>*/} 
       <button type="submit"> Submit</button>
       <button type="reset"> Reset</button>
    </div>
      </form>
  )
}

export default Formdata