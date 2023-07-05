import React from 'react';
import { MdDelete,MdCheckCircle } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {toggleTodo, deleteTodo} from '../redux/reducer/actions'
const TodoItem = ({item}) => {
    const dispatch = useDispatch();
    const handleToggle =(id)=> {
        dispatch(toggleTodo(id));

    }
    const handleDelete =(id)=> {
        dispatch(deleteTodo(id));

    }
    const style = {
        backgroundColor: item.status ? "#879fab":'',
        color: item.status ? "#ffffff":'',
        textDecoration: item.status ? "line-through":''
      };
    return (
        <>
            <li className= "list-group-item"  style={style}>
              {item.text}
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className= {item.status ?"btn btn-light":"btn btn-primary"} onClick={()=> handleToggle(item.id)}><MdCheckCircle /></button>
                <button type="button" className= {item.status ?"btn btn-light":"btn btn-primary"} onClick={()=> handleDelete(item.id)}><MdDelete /></button>
              </div>
            </li>
        </>
    );
}

export default TodoItem;
