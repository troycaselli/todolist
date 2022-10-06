import {Input} from './Styled';

export default function ToDoAdd(props) {
    const {handleNewTodo, addTodo, newTodo} = props;

    return (
        <Input
            type='text'
            value={newTodo}
            placeholder='new ToDo'
            onChange={evt => handleNewTodo(evt.target.value)}
            onKeyDown={addTodo}>
        </Input>
    );
}