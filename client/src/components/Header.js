import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/landing.css'
 const Header = (props)=>{
    {console.log(props.user)}
    return (
    <nav className = "landingNav fixed-top"> 
        <NavLink to = "/"><h3 className = "landing-name">E X P E N S O</h3></NavLink> 
        <div className = "float">
            <NavLink to = "/login"><button className = "loginBtn">Log In</button></NavLink>
            <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
            <NavLink>
                <a href= {"https://github.com/smrutipohekar17/Software_Project.git"} ><button className = "Support">Support</button></a></NavLink>
        </div>
    </nav>
    )
}

const mapStateToProps = (state)=>{
    console.log("state is  ",state);
    return{
        user: state.user
    }
}

const fn = connect(mapStateToProps);
export default fn(Header);