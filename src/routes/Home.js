import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo, deleteToDo }) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDo(text);
        setText('');
    } 

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={text}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
            <ul>
                { 
                    toDos.map(toDo => {
                        return (
                            <ToDo 
                                key={toDo.id}
                                {...toDo}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {toDos: state};
}

const mapDispatchToProps = (dispatch) => {
   
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
        deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);