import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventDeleted, eventStartDelete } from '../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        // dispatch(eventDeleted(activeEvent));
        dispatch(eventStartDelete());
    }
    return (
        <button
            className = 'btn btn-danger fab-danger'
            onClick = {handleDelete}
        >
            <i className = 'fas fa-trash'></i>
            <span> Borrar evento</span>
        </button>
    )
}
