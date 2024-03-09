import React,{useState} from "react";

const App = ()=>{
  const [data,setData] =useState({
    username:'',
    password:''
  })
  const {username,password}=data;
  const changeHandler =e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.praventDefault()
    console.log(data)
  }
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input  type="text" name="Username" value={username} placeholder="enter user name" onChange={changeHandler}/><br/>
          <input type="password" name="Password" value={password} placeholder="enter valid password" onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}
export default App;
