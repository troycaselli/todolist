import {Input} from './Styled';

export default function ToDoAdd(props) {
    const {toDoList, typeNewTodo, addTodo, newTodo} = props;

    return (
        <Input
            type='text'
            value={newTodo}
            placeholder='new ToDo'
            onChange={typeNewTodo}
            onKeyDown={addTodo}>
        </Input>
    );
}