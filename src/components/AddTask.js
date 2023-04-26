import {useState} from "react";

export default function AddTasks({onAddTask}) {
    const [text, setText] = useState('');
    return (
        <div>
            <label>
                {'Add task   '}
            </label>
            <input value={text} placeholder="Enter Your Task Here" onChange={(e) => setText(e.target.value)}/>
            {'     '}
            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>➕
            </button>
        </div>
    )
}