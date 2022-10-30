import React from 'react';
import '../styles/landing.css'
import  Header  from './Header';
import  Footer  from './Footer';

export const Landing = ()=>{
    return (
        <div className = "landing ">
           <Header/>
            <main >
                <div className = "landing-heading">
                <div className = "landing-content">
                <h1 className = "landing-header">Splitting expenses has never been easier</h1>
                <ul>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Track balances</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Organize expenses</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Add expenses easily</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Pay friends back</li>
                </ul>
                <a href="/signup">   <button className = "landing-button">Get Started</button></a>
                </div>
                <img className = "landing-img" src={require('../images/expenso-icon.png')} alt=""/>
                </div>

            </main>
            <Footer/>
        </div>
    )
}