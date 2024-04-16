import { INote, INoteState, INoteTypes, NoteActionTypes } from "@/src/interfaces/notes";
import { Dispatch } from "react";

export const addNote = (state: INoteState, dispatch: Dispatch<INoteTypes>) => {

    return (note: INote) => dispatch({ type: NoteActionTypes.ADD, payload: note })
}   