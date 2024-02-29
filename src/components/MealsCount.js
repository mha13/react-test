import { useMealsContext } from '../providers/MealsProvider'

const MealsCount = () => {
    const { meals } = useMealsContext();
    return (
        <div>
            <h1>NUMBER OF TODAY MEALS :  {meals.length}</h1>

        </div>
    );
}

export default MealsCount;