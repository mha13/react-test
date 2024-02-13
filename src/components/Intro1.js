import React from "react";

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
        <h3 style={shape}>
            {props.children}
            {/* <h6>Number of children: {props.children.length}</h6> */}
            <h6 style={{color:'blue'}}>Number of children: {numberOfChildren}</h6>
        </h3>
    );
    // }

};

export default Intro1;