import React, {Component} from "react";
import '../styles/routecss.css';
import Avatar from './Avatar.js';
import SkillsMenu from './SkillsMenu.js';

export default class Skills extends Component{
    render(){
        return <>
            <Avatar page="skills"/>
            <div className="service-content">
                <center>Services we Offer</center>
                <ul>
                    <div className="service-list">
                        <li>Web Development - </li>
                        <p>Craft captivating and functional websites that leave a lasting impression on your audience.</p>
                    </div>
                    <div className="service-list">
                        <li>App Development - </li>
                        <p>Create custom mobile applications that enhance user engagement and streamline business operations.</p>
                    </div>
                    <div className="service-list">
                        <li>SEO - </li>
                        <p>Boost your online visibility with our proven search engine optimization strategies.</p>
                    </div>
                    <div className="service-list">
                        <li>Social Media Marketing - </li>
                        <p>Harness the power of social media to connect with your audience and drive growth.</p>
                    </div>
                </ul>
            </div>
        </>
    }
}