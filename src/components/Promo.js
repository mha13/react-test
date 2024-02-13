function Promo(props) {

    const styles = {
        color: "tomato",
        fontSize: "40px",
        marginRight: "100px",
        background: 'green',
        borderRadius: "20px",
        borderBottomLeftRadius: "50px"
    }

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1;

    const getRandom2 = () => Math.floor(Math.random() * 100) + 1;

    return (
        <div className="promo-section">
            <div>
                <h1 style={styles}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading+ ' SSS'}</h2>
                <h3>{Math.random() >= 0.5 ? Math.random() + " Over 0.5" : Math.random() + " Under 0.5"}</h3>
                <h1>Here's a random number from 0 to 10: {getRandomNum()} and 0 to 100:{getRandom2()}</h1>
            </div>
        </div>
    );
}

export default Promo;