function Intro2(props) {
    const styleHeading = {
        padding: "20px",
        border: "5px solid red",
        background: "#000",
    }
    const styleHeading2 = {
        padding: "20px",
        border: "5px solid blue",
        background: "#000",
    }
        if ( props.number < 3) {
        return (<h1 style={styleHeading}>
            we have {props.number} {props.fruit}
        </h1>)
    }else{
        return (<h1 style={styleHeading2}>
            we have {props.number} {props.fruit}
        </h1>)
    }    
};

export default Intro2;