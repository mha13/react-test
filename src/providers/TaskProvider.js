import React from "react";

const TasksContext = React.createContext();

const taskList = ['exercise', 'study', 'work', 'prepare dinner', 'sleep'];

const styleForTaskContext = {
    backgroundColor: 'blue',
    marginTop: '40px',
    color: 'white'
}


const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = React.useState(taskList);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const [text,setText]=React.useState('kiri');

    const changeText=(e)=>{
        setText(e.target.value);
    }

    return (
        <div style={styleForTaskContext}>
            <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
                {children}
            </TasksContext.Provider>
            <input type='text' onChange={changeText} value={text}/>
            <button onClick={()=>addTask(text)}>add  2222</button>
            
        </div>
    )

}

export const useTaskContext = () => React.useContext(TasksContext);
export default TaskProvider;