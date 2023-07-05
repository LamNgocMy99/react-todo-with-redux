import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux";
function TodoList(props) {
    const  list  = useSelector(state => state.todo);
    return (
        <>
            <h4>List todo : </h4>
            
            <ul className="list-group">
                {list.length > 0 ? list.map(item => (
                    <TodoItem key={item.id} item ={item}/>
                )) : 
                <li className="list-group-item disabled" aria-disabled="true">Not Data</li>
            }
               
            </ul>
        </>
    );
}

export default TodoList;