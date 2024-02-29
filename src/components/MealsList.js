import { useMealsContext } from '../providers/MealsProvider'

const MealsList = () => {
    const { meals } = useMealsContext();
    return (
        <div>
            <h1>LIST OF TODAY MEALS</h1>
            {
                meals.map((meal, index) => (
                    <h2 key={index}>{meal}</h2>
                ))
            }
        </div>
    );
}

export default MealsList;