import React, {Component} from "react";
import '../styles/routecss.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

export default class Projects extends Component{
    render(){
        return <>
            <div className="project-content">
                <center>Our Recent Projects</center>
                <div className="web-image">
                    <div className="imag">
                        <img src={project1}/>
                    </div>
                    <div className="desc">
                        <h2>Food ordering website</h2>
                        <p>
                            "Experience seamless food ordering with our React-based website. Our user-friendly platform lets you browse a wide variety of delicious cuisines, customize your orders, and securely pay online. With a responsive design and intuitive interface, ordering your favorite meals has never been easier. Savor the convenience!"
                        </p>
                    </div>
                </div>
                <div className="web-image">
                    <div className="imag">
                        <img src={project2}/>
                    </div>
                    <div className="desc">
                        <h2>Ecommerce website</h2>
                        <p>
                        "Elevate your shopping experience with our React-powered ecommerce website. Explore a curated selection of stylish clothing and footwear, shop with ease, and enjoy secure transactions. Our intuitive design ensures a seamless browsing and checkout process, making fashion accessible at your fingertips. Upgrade your wardrobe effortlessly!"
                        </p>
                    </div>
                </div>
            </div>
        </>
    }
}