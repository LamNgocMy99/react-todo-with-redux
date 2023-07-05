import { useState } from 'react';
//component
import ToDoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//from redux
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
        <div className="container">
            <div className="row">
            <h3 style={{textAlign: 'center', margin: '20px'}}>TO DO LIST</h3>
                <div className="todo-main">
                    <ToDoInput/>
                    <TodoList/>          
                </div>
            </div>
        </div>
    </Provider>
    
  )
}

export default App

