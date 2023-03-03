import React from 'react';

const Todos = ({todos, deleteTodo}) =>{

    const todosList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className='collection-item' key ={todo.id}>
                <span onClick ={()=>deleteTodo(todo.id)}>
                    {todo.content}
                </span>

                </div>
            )
        })
    ):(
        <p className="center"> You have no todos left, yay!</p>
    )
    return(
        <div className='todos collection'>
            {todosList}
        </div>
    )
}

export default Todos;