import React from "react"
import { useDispatch } from "react-redux";
import { taskActions } from "../actions/actions"

interface TaskDeleteProps {
    description: string;
}

export const TaskDelete: React.FC<TaskDeleteProps> = ({description}) => {
    const dispatch = useDispatch();


    const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(event.currentTarget.dataset.task !== undefined) {
            dispatch(taskActions.deleteTask(event.currentTarget.dataset.task))
        }
    }

    return (
        <button onClick={onClickDelete} data-task={description}>Delete</button>
    )
}