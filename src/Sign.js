import React,{useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
const Sign = () => {

  const [name, setname] = useState()
 const [email, setemail] = useState()
 const [password, setpassword] = useState()
 const [data, setdata] = useState([]);

 const obj = {
     name : name,
     email : email,
     password : password
 }
   
 let navigate = useNavigate();
    const submit = () => {
        let localtextarry
       let localdata = localStorage.getItem("localdata");
      
       if (localdata == null) {
           localtextarry = [];
      
       } else {
           localtextarry = JSON.parse(localdata);
       }
       if (email.endsWith("@gmail.com") ) {
           localtextarry.push(obj);
           redrect()
       } else {
        alert("sorry wrong")
       }
      
       localStorage.setItem("localdata", JSON.stringify(localtextarry))
       setdata(localtextarry)
      
       setemail("")
       setpassword("")
       setname("")
      
      }
       // storing data to localtorage
       const redrect = () =>{
         setTimeout(() => {
          return navigate("/")
         },500);
       }
  return (
      <>
    <div className='main'>
    <div className='center'>
        <h1>signin</h1>
        <div className='inputs'>
         <input type="text" placeholder='Name' value={name} onChange={(e)=> setname(e.target.value)}/>
          <input type="text" placeholder='email' value={email} onChange={(e)=> setemail(e.target.value)}/>
          <input type="password" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
        </div>
        <button onClick={submit}>Submit</button>
        <NavLink to="/"><button >
            login
          </button>
          </NavLink>
    </div>
</div>
</>
  )
}

export default Sign