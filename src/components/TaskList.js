import {useState} from "react";

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({task, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }}/>
                {" "}
                <button onClick={() => setIsEditing(false)}>
                    ✅
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                {" "}
                <button onClick={() => setIsEditing(true)}>
                    🖊
                </button>
            </>
        );
    }
    return (
        <label>
            {taskContent}
            {" "}
            <button onClick={() => onDelete(task.id)}>
                ❌
            </button>
        </label>
    );
}