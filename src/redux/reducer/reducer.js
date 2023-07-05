import { TOGGLE, DELETE,ADD } from './actions';
const initialState ={
    number: 0,
    todo: []
  };


export const todoReducer = (state = initialState,action) =>{
    console.log('todoReducer');
    switch (action.type) {
        case TOGGLE: {
            return {
                ...state,
                todo: state.todo.map(item=> item.id ===action.payload ? {...item, status: !item.status}: item)
            }
        
        }
        case DELETE: {
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload)
                
            }
        }
        case ADD: {
            return {
                number: state.number + 1,
                todo: [
                    ...state.todo,
                    {id: state.number + 1, text: action.payload, status: false}
                ]                
            }
        }
        default:
            return state
    }
}