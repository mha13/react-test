import React from "react";

const MealsContext = React.createContext();

const todayMeals = ["Taccos", "Kebab", "Spaghetti"];

const styleForMealContext = {
    backgroundColor: 'green',
    marginTop: '40px',
    color: 'white'
}

const MealsProvider = ({ children }) => {
    const [meals, setMealsList] = React.useState(todayMeals);

    return (
        <div style={styleForMealContext}>
            <h1>Context Provider</h1>
            <MealsContext.Provider value={{ meals }}>
                {children}
            </MealsContext.Provider>
        </div>
    )
}

export const useMealsContext = () => React.useContext(MealsContext);

export default MealsProvider;