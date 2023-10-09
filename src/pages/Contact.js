import React, {Component} from "react";
import '../styles/routecss.css';
import whatsapp from '../assets/icons8-whatsapp.svg';
import linkedin from '../assets/icons8-linkedin.svg'

export default class Contact extends Component{
    render(){
        return <>
            <div id="contact-us">
                <center>Contact Us</center>
                <div id="contact">"Contact us for inquiries, support, or collaboration opportunities. We're here to assist you. Reach out today for assistance."</div>
                <div id="phone">
                    <img src={whatsapp}/>
                    <a href="https://wa.me/9319069767"><p>+91 9319069767</p></a>
                </div>
                <div id="linkedin">
                    <img src={linkedin}/>
                    <a href="https://linkedin.com/company/apexdev">LinkedIn</a>
                </div>
            </div>
        </>
    }
}
