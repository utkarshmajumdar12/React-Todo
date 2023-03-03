import React ,{ Component } from 'react';

class AddTodo extends Component{
    state ={
        content:""
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState(
            {
                content:""
            }
        )
    }
    handleChange =(e)=>{
        this.setState({
            content : e.target.value,
        })
    }
    render(){
        return(
            <div className= "" onSubmit={this.handleSubmit}>
                <label>Add Todo</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}></input>
            </div>
        )
    }
}

export default AddTodo;