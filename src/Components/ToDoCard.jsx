export default  function ToDoCard(props)
{
    const { todo, handleDeleteToDo, handleCompleteToDo, todoIndex } = props 
    
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteToDo(todoIndex)
                }}  disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={ () => {
                    handleDeleteToDo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}