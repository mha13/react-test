import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'ride') return { money: state.money + 10 };
    if (action.type === 'fuel') return { money: state.money - 50 };
    return Error();
}

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: true,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer2 = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const reducer3 = (state, action) => {
    if (action === 'hi') return ('hi guys');
    if (action === 'bye') return ('bye guys');
    return Error();
}

const Reducer = (props) => {
    const initialState = { money: parseInt(props.value) }
    const [stete, dispatch] = useReducer(reducer, initialState);

    const [todos, dispatch2] = useReducer(reducer2, initialTodos);

    const initialgreeting = 'hi there';
    const [greeting, dispatch3] = useReducer(reducer3, initialgreeting);

    const handleComplete = (todo) => {
        dispatch2({ type: "COMPLETE", id: todo.id });
    };

    return (
        <div>
            <h1>Wallet : {stete.money}</h1>

            <button onClick={() => dispatch({ type: 'ride' })}>Ride</button>
            <button onClick={() => dispatch({ type: 'fuel' })}>Fuel</button>


            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title} {todo.complete ? 'done' : ' not done'}
                    </label>
                </div>
            ))}

            <h1>{greeting}</h1>
            <button onClick={()=>dispatch3('hi')}>Hi</button>
            <button onClick={()=>dispatch3('bye')}>Bye</button>
        </div>
    )
}

export default Reducer;