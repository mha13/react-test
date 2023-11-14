function Intro1(props) {
    const shape = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        color: "red",
        margin: "20px 0"
    }
    return (
        <h3 style={shape}>
            {props.children}
        </h3>
    );
};

export default Intro1;