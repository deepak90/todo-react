import {addTodo, toggleTodo, generateRandomId, findTodoById, updateTodo} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ]
  const newTodo = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ]
  const newTodo = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos);
})

test('toggleTodo should toggle the isComplete prop of the todo', () => {
  const startTodo = {id:1, name: 'one', isComplete: false};
  const toggledTodo ={id:1, name: 'one', isComplete: true};

  const result = toggleTodo(startTodo)

  expect(result).toEqual(toggledTodo);
})

test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id:1, name: 'one', isComplete: false};
  const toggledTodo ={id:1, name: 'one', isComplete: true};

  const result = toggleTodo(startTodo)

  expect(result).not.toBe(toggledTodo);
})

test('findTodoById should find a todo by its id' , () => {
    const startTodos = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
  const result = findTodoById(startTodos, 2);
  const expected = {id:2, name: 'two', isComplete: false}

  expect(result).toEqual(expected);
})

test('updateTodo should update a todo by id', ()=> {
    const startTodos = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
    const newTodo = {id:2, name: 'twoo', isComplete: true}

    const result = updateTodo(startTodos, newTodo);

    const expected = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'twoo', isComplete: true},
        {id:3, name: 'three', isComplete: false}
    ]

    expect(result).toEqual(expected);
})