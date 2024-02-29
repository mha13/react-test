import {useTaskContext} from '../providers/TaskProvider';

const TasksList=()=>{
    const {tasks,addTask,removeTask} = useTaskContext();
    return(
        <div>
            <h2>List of Tasks</h2>
            {tasks.map((task,index)=>(<h4>{index+1}. {task} <span onClick={()=>removeTask(index)}>-</span></h4>))}
            <button onClick={()=>addTask('new task')}>Add New Task</button>
        </div>
    )
}

export default TasksList;