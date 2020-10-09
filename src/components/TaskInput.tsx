import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { taskActions } from '../actions/actions';


export const TaskInput = () => {
    const dispatch = useDispatch();

    const [localDescription, setDescription] = useState("")

    const onChangeUpdateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const onClickUpdateTask = () => {
        dispatch(taskActions.addTask({ description: localDescription }))
        setDescription("")
    }

    return (
        <>
            <input onChange={onChangeUpdateTask} type="text" name="task" placeholder="Input task..." />
            <button onClick={onClickUpdateTask}>Add Task</button>
        </>
    )
}