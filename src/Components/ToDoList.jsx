import ToDoCard from "./ToDoCard";

export default function ToDoList(props)
{
    const { todos, selectedTab} = props

    const filterToDoList = selectedTab === "All" ?
    todos : 
    selectedTab  === "Completed" ?
    todos.filter(val => val.complete) :
    todos.filter(val => !val.complete)

    return(
        <>
        {filterToDoList.map((todo, todoIndex) => {
            return (
            <ToDoCard 
            key={todoIndex} 
            todoIndex={todos.findIndex(val => val.input === todo.input )}
            {...props}
            todo={todo}
             />
        )
        })}

        </>
    )
}