import {List, Button} from './Styled';

export default function ToDoList(props) {
    const {toDoList, markOff} = props
    
    return (
        <ul>
            {toDoList.map(toDo => {
                return <List key={toDo.id}>{toDo.description} <Button onClick={() => markOff(toDo.id)}>Completed?</Button></List>
            })}
        </ul>
    );
}