import React, { Component } from "react";
import AboutMenuItem from './about/AboutMenuItem';
import AboutSubHeading from './about/AboutSubHeading';
import subHeadingsData from './about/subHeadingsData';
import personalIcon from '../assets/moebius-triangle.png';
import educationIcon from '../assets/upgrade.png';
import careerIcon from '../assets/triple-corn.png'

export default class AboutMenu extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         activeMenuItem: 1,
    //         activeSubheading: 1,
    //     }
    // }

    // handleMenuItemClick = (menuItem) => {
    //     this.setState({
    //         activeMenuItem: menuItem,
    //         activeSubheading: 1,
    //     })
    // }
    // handleSubheadingClick = (subheading) => {
    //     this.setState({
    //         activeSubheading: subheading,
    //     })
    // }
    render(){
        // const {activeMenuItem, activeSubheading} = this.state;
        // const menuItems = ["About Us", "Mission", "Vision"];
        // const activeMenuTitle = menuItems[activeMenuItem - 1];
        // const activeMenuIcon = 
        //     activeMenuTitle==="About Us"
        //      ? personalIcon
        //      : activeMenuTitle === "Mission"
        //      ? educationIcon 
        //      : careerIcon

        //     const subheadings = subHeadingsData[activeMenuItem]
            return(
                <>
                    {/* <div className="menu">
                        {menuItems.map((item,index) => (
                            <AboutMenuItem 
                            key={index}
                            title={item}
                            active={activeMenuItem === index + 1}
                            onClick={() => this.handleMenuItemClick(index + 1)}
                            />
                        ))}
                    </div>
                    <div className="sub-container">
                        <div className="icon-title-container">
                            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon"/>
                            <h3>{activeMenuTitle}</h3>
                        </div>
                        {subheadings.map((item,index) => (
                            <AboutSubHeading 
                            key={index}
                            title={subheadings.title}
                            content={subheadings.content}
                            active={activeSubheading === index + 1}
                            onClick={() => this.handleSubHeadingClick(index + 1)}
                            menuItem={activeMenuItem}
                            />
                        ))}
                    </div> */}
                </>
            );
        
    }
}