import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { taskActions } from "../actions/actions"

interface TaskEditProps {
    description: string
}

export const TaskEdit: React.FC<TaskEditProps> = ({description}) => {
    const dispatch = useDispatch()

    const [localDescription, setDescription] = useState("")

    const onChangeUpdateEditTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget.value)
    }

    const onClickEditTask = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(event.currentTarget.dataset.task !== undefined) {
            dispatch(taskActions.editTask(event.currentTarget.dataset.task, localDescription))
        }
        setDescription("")
    }

    return(
        <>
            <input onChange={onChangeUpdateEditTask} type="text" name="task" placeholder="Edit task..." />
            <button onClick={onClickEditTask} data-task={description}>Edit Task</button>
        </>
    )
}