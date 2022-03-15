import React,{useEffect,useState} from 'react'

const Home = () => {
  const [newdata, setnewdata] = useState([])

  useEffect(() => {
    let localtextarry
    let localdata = localStorage.getItem("localdata");
 
    if (localdata == null) {
        localtextarry = [];
 
    } else {
        localtextarry = JSON.parse(localdata);
    }
 
    setnewdata([...localtextarry])
 
    console.log(newdata[0])
  },[])
  return (
    <div>Welcome</div>
  )
}

export default Home