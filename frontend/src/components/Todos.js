import React from 'react'


const TodoItem = ({note}) => {
    let status = (note.isActive === true) ? 'yes' : 'no';
    return (
        <tr className="table_tr">
            <td>{note.project.projectName}</td>
            <td>{note.text}</td>
            <td>{note.createdBy}</td>
            <td>{status}</td>
        </tr>
    )
}

const TodoList = ({notes}) => {
   return (
        <table>
            <caption>ToDo notes</caption>
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Note text</th>
                    <th>Note author</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {notes.map((note) => <TodoItem key={note.id} note={note}/>)}
            </tbody>
        </table>
   )
}

export default TodoList