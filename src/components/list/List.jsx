import React from "react"
import './style.css'
import Todo from '../todo/Todo'

const List = ({todos, setTodos}) => {

    const onDeleteHandler = (selectedId) => {
        const remainedTodos = todos.filter((todo)=>{
            return todo.id !== selectedId
        })
        setTodos(remainedTodos)
    }

    const onCompleteHandler = (selectedId) =>{
        const newTodos = todos.map((todo)=>{
            if (todo.id === selectedId) {
                return {...todo, isDone: !todo.isDone}
            } else {
                return {...todo}
            }
        })
        setTodos(newTodos)
    }

    return (
        <div className="list_Total">
            <h1 className="list_Name">Working.. 🔥</h1>
            <div className="list_Body">
                {todos.map((todo)=>{
                    if(todo.isDone === false) {
                        return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler}/>
                        }
                    }
                )}
            </div>
            <h1 className="list_Name">Done..! 🎉</h1>
            <div className="list_Body">
                {todos.map((todo)=>{
                        if(todo.isDone === true) {
                            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler}/>
                            }
                        }
                    )}
            </div>
        </div>
    )
}
export default List;