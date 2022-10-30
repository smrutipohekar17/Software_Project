import React from 'react';
import  Header  from './Header';
import '../styles/authentication.css';

export const Login = (props)=>{
    return(
        <div>
        <Header/>
        <div className = "container signup">
        <div className = "signup-logo">
        <img src={require("../images/expenso-icon.png")} alt="" />
        </div>


      <div className = "signup-form">
        <label htmlFor="">Email</label>
        <input id = "email" onChange = {props.input} className = "form-control" type="text"/>

        <label htmlFor="">Password</label>
        <input id = "password" onChange = {props.input} className = "form-control" type="text"/>

      {props.sts && <p style = {{color: "red"}}><i class="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
       <button onClick = {props.login} className = "btn">Log In</button>
     </div>
     </div>
     </div>
    )
} 