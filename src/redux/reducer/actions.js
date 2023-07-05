export const TOGGLE = 'TOGGLE';
export const DELETE = 'DELETE';
export const ADD = 'ADD';
export function toggleTodo(payload) {
    return {
      type: TOGGLE,
      payload
    }
  }
export function deleteTodo(payload) {
    return {
      type: DELETE,
      payload
    }
}
export function addTodo(payload) {
    return {
      type: ADD,
      payload
    };
  };