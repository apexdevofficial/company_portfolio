import React, {Component} from "react";
import '../styles/routecss.css';
import Avatar from './Avatar.js';
import AboutMenu from './AboutMenu.js';

export default class About extends Component{
    render(){
        return <>
            
            <Avatar page="about"/>
            {/* <AboutMenu/> */}
            <div className="about-content">
                <center>About Us</center>
                <p>
                    Welcome to ApexDev, where we are committed to providing outstanding digital solutions 
                    crafted to meet your specific requirements. Our motive is to Build 
                    Your Online Presence Affordably! It captures our dedication to assisting you in thriving 
                    in the always-changing digital environment.
                </p>
                <p>
                    At ApexDev, we take pride in our expertise and commitment to affordability. Our first 
                    concern is ensuring your success online. Allow us to strengthen your brand, expand your 
                    online presence, and support your success in the digital sphere. We'll create a better 
                    future for your company together.
                </p>
            </div>
        </>
    }
}