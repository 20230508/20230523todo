import React from "react"
import './style.css'

const Todo = ({todo, onDeleteHandler, onCompleteHandler}) => {
    return (
        <div className="todoList">
            <h2 className ="todoName">{todo.title}</h2>
            <div>{todo.body}</div>
            <div className="buttonSet">
                <button onClick={()=>onDeleteHandler(todo.id)} className="delet_button">삭제하기</button>
                <button onClick={()=>onCompleteHandler(todo.id)} className="complete_button">{todo.isDone ? "취 소" : "완 료"}</button>
            </div>
        </div>
    )
}
export default Todo;