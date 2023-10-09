import React, { Component } from "react";
import "../styles/Avatar.css";
import avatarImage from "../assets/avatar-image.png"
import PropTypes from "prop-types";

const Avatar = ({page}) => {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay-${page}`;

    return(
        <>
        <span className={spanClass}></span>
        <img src={avatarImage} className={avatarClass} alt="Avatar"/>
        </>
    );
};

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
}

export default Avatar;