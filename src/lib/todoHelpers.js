export const addTodo = (todos, newTodo) => [...todos, newTodo];

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const generateRandomId = () => Math.floor(Math.random()*10000)

export const findTodoById = (todos, id) => todos.find(todo => todo.id === id)

export const updateTodo = (todos, newTodo) => {
    const updatedIndex = todos.findIndex(todo => todo.id === newTodo.id);
    return [
        ...todos.slice(0,updatedIndex),
        newTodo,
        ...todos.slice(updatedIndex+1)
    ]

}