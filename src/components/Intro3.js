function Intro3(props) {
    var alarm;
    if (props.children === 'TEST') {
        alarm = 'TEST';
    } else {
        alarm = 'Other thing';
    }
    return (
        <div className="blog-post-intro" date-children={props.children}>
            <h2>{alarm}</h2>
        </div>
    );
};

export default Intro3;