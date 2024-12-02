import { useState } from "react"
export default function ToDoInput(props)
{
    const {handleAddToDo} = props

    const [inputValue, setInputValue] = useState("")
    console.log(inputValue)

    return (
        <div className="input-container">
            <input placeholder="Add task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => 
            {
                if(!inputValue) { return }
                handleAddToDo(inputValue)
                setInputValue("")
            }
                }>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}