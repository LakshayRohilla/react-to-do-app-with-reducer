import logo from './logo.svg';
import './App.css';
import VisitStateApp from "./components/VisitStateApp";
import RepoLink from "./components/RepoLink";
import AddTasks from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useReducer } from "react";

function App() {

    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks,
        undefined
    );

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="my-h1">
                    To Do Application
                </h1>
                <h6 className="my-h6">'Using useReducer'</h6>
                <AddTasks onAddTask={handleAddTask}/>
                <RepoLink/>
                <TaskList
                    tasks={tasks}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}
                />
                <VisitStateApp/>
            </header>
        </div>
    );
}


function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 1;
const initialTasks = [
    {id: 0, text: 'Learn React'},
];

export default App;
