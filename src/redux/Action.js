import { Types } from "./types"

export const addJob = (name) => {
    return{
        type: Types.addJob,
        payload: name
    }
}

export const deleteJob = (id) => {
    return{
        type: Types.deleteJob,
        payload: id
    }
}

export const markAsDone = (id) => {
    return{
        type: Types.markAsDone,
        payload: id
    }
}

export const editJob = (id, name) => {
    return{
        type: Types.editJob,
        payload: {id, name}
    }
}

export const markAllAsDone = (allDone) => {
    return{
        type: Types.markAllAsDone,
        payload: allDone
    }
}