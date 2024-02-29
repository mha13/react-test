import React from "react";

const clicking =()=>{
    console.log('Cilck Event happend');
}

const handleClick = (e) => {
    // Accessing the target element that triggered the click event
    console.log(e.target);
  }


const mouseOver =()=>{
    console.log('Hover Event happend');
}

function Intro1(props) {
    const shape = {
        padding: "20px",
        paddingBottomRight: '10px',
        border: "1px solid gray",
        background: "#fff",
        color: "red",
        margin: "20px 0"
    }
    // if (props.children.length > 0) {

    // Get the count of children
    const numberOfChildren = React.Children.count(props.children);
    return (
        <div style={shape} onMouseOver={mouseOver} onClick={clicking}>
            {props.children}
            {/* <h6>Number of children: {props.children.length}</h6> */}
            <h6 style={{color:'blue'}}>Number of children: {numberOfChildren}</h6>
        </div>
    );
    // }

};

export default Intro1;