import React,{useState } from 'react'
import { NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Login = () => {


    const [email, setemail] = useState()
    const [password, setpassword] = useState()
 const [show, setshow] = useState()

 let navigate = useNavigate()


 
 const submit = (deleteme) => {
    let localtextarry;
    let localdata = localStorage.getItem("localdata");

    if (localdata == null) {
      localtextarry = [];
    } else {
      localtextarry = JSON.parse(localdata);
    }

    setshow(localtextarry);

    for (const key in show) {
      if (email === show[key].email && password == show[key].password ) {
 
        redrect()
      

      } else {
       alert("no")
      }
    }
    
    deleteme();
  };
  
  const deleteme = () => {
    setTimeout(() => {
      setemail("");
      setpassword("");


    }, 2000);
  };
  const redrect = () =>{
    setTimeout(() => {
     return navigate("/home")
    },100);
  }
  
  return (
<>
<div className='main'>
    <div className='center'>
        <h1>LOGIN</h1>
        <div className='inputs'>
        <input type="text" placeholder='email' value={email} onChange={(e)=> setemail(e.target.value)}/>
          <input type="password" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
        </div>
        <button onClick={submit}>Submit</button>
        <NavLink to="/signup"><button >
            signup
          </button>
          </NavLink>
    </div>
</div>
</>
  )
}

export default Login