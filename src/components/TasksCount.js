import {useTaskContext} from '../providers/TaskProvider';

const TasksCount=()=>{
    const {tasks} = useTaskContext();
    return(
        <div>
            <h2>List of Tasks: {tasks.length}</h2>
        </div>
    )
}

export default TasksCount;