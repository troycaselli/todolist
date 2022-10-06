import './App.css';
import {useState} from 'react';
import ToDoList from './components/ToDoList';
import ToDoAdd from './components/ToDoAdd';
import {Container, Header} from './components/Styled';
import useInput from './components/useInput';


function App() {
const [toDoList, setTodoList] = useState([{id: 1, description: 'Make a todo list!', isDone: false}]);
// const [newTodo, setNewTodo] = useState('');
const [newTodo, setNewTodo, handleNewTodo] = useInput('');

const markOff = id => {
  setTodoList(toDoList.filter(todo => todo.id !== id));
}

const addTodo = event => {
  if (event.key === 'Enter' && newTodo !== '') {
    const newObj = {id: toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1, description: newTodo, isDone: false}
    setTodoList([...toDoList, newObj])
    setNewTodo('');
  }
}

  return (
    <Container>
      <Header>ToDo List:</Header>
      <ToDoAdd toDoList={toDoList} handleNewTodo={handleNewTodo} addTodo={addTodo} newTodo={newTodo}/>
      <ToDoList toDoList={toDoList} markOff={markOff}/>
    </Container>
  );
}

export default App;
