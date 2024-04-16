import { INoteState, INoteTypes, NoteActionTypes } from "@/src/interfaces/notes"

export const notesInitialState: INoteState = {
    notes: []
}

export const notesReducer = (state: INoteState, action: INoteTypes) => {
    switch (action.type) {
        case NoteActionTypes.ADD:
            return {
                ...state,
                note: state.notes.push(action.payload)
            }
        case NoteActionTypes.REMOVE:
            return {
                ...state,
                note: state.notes.push(action.payload)
            }
        default:
            return state
    }
}