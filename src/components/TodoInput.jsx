
import {useState}  from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../redux/reducer/actions'
const ToDoInput = () => {
    const dispatch = useDispatch();   
    const [text, setText] = useState("");
    const handleAdd =()=> {
        if (text !="") {
            dispatch(addTodo(text));
            setText('')
        }
    }
    return (
        <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="Add a task" onChange={event => setText(event.target.value)}/>
            <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleAdd}>Button</button>
        </div>
    );
}

export default ToDoInput;
