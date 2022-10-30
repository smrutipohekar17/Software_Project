import React from 'react';
import '../styles/authentication.css';
import { withRouter } from "react-router-dom";
import {instance} from '../utils/AxiosConfig';
import  Header  from './Header';

var obj = {};
 const SignUp = (props)=>{
   return(
   <div>
      <Header/>
      <div className = "container signup">
      <div className = "signup-logo">
      <img  src={require("../images/expenso-icon.png")} alt=""/>
    </div>


    <div className = "signup-form">
      <label htmlFor="">Name</label>

      <input id = "username" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

      <label htmlFor="">Email</label>

      <input id = "email" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

      <label htmlFor="">Password</label>

      <input id = "password" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

     <button onClick = {()=>{
       console.log(obj);
       if(obj.password == undefined || obj.email == undefined || obj.username == undefined){
          alert("form is Incomplete");
       }
   else{
       var pr = instance.post('/signup',obj);
       pr.then((response)=>{
          console.log(response.data.Status);
          if(response.data.Status == "S"){
             alert("successful Registerd");
             props.history.push("/Dashboard");
          }else if(response.data.Status == "F"){
             alert("username or Email Id Already exist");
          }
       })}
     }} className = "btn">Sign up</button>
     
   </div>
   </div>
   </div>
   
   )
} 

export default withRouter(SignUp);
