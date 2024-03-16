import React ,{useState}from 'react'



const Formimp = () => {
    const [formData, setFormData] = useState({ name: " ", email: " " })

    const handleChange = (e) => {
        // let data = { [e.target.name]: e.target.value }
        setFormData(prevFormdata => ({...prevFormdata,[e.target.name]: e.target.value}))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }


  return (
    <form onSubmit={handleSubmit}>
    <div>Formimp
    
    <input  type="text" placeholder ="enter name" name="name" value={formData.name} onChange={handleChange}/>
    <input  type="text" placeholder='Enter your email' name="email"  value={formData.email} onChange={handleChange}/>
   <button type="submit">Submit</button> 
    </div>
    </form>
  )
}

export default Formimp