import React, {useState, useRef} from "react"
import './style.css'


const Form = ({todos, setTodos}) => {

    const initialState = {id: 0, title: "", body: "", isDone: false} 

    const [inputTodo, setInputTodo] = useState(initialState)

    const nextId = useRef(3)

    const onChangeHandler=(event)=>{
        
        const {value, name} = event.target 

        setInputTodo({...inputTodo, [name]: value, id: nextId.current})
        nextId.current++ 
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault() 
        setTodos([...todos, inputTodo])
        setInputTodo(initialState) 
    }
    
    return (
        <form onSubmit={onSubmitHandler} className="form_body">
            <div className='input_body'>
                <span>제목</span>
                <input type='text' name="title" onChange={onChangeHandler} value={inputTodo.title} required/> 
                <span>내용</span>
                <input type='text' name="body" onChange={onChangeHandler} value={inputTodo.body}/>
            </div>
            <button>추가하기</button>
        </form>
    )
}
export default Form;