import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from 'react-router-dom';

const ToDo = ({ id, text, onDeleteToDo }) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button
                onClick={onDeleteToDo}
            >Del</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        onDeleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);