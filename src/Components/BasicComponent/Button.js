import React from "react";

const Button = () => {
    return <button type="button" style={buttonStyle}>Click Me!</button>
}

export default Button;

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
};