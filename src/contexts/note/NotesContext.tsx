import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { INoteContextValues, INoteState, INoteTypes, NoteActionTypes } from "@/src/interfaces/notes";
import { notesInitialState, notesReducer } from "./notesReducer";

export const NotesContext = createContext({} as INoteContextValues);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(notesReducer, notesInitialState)

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesDispatch = (): Dispatch<INoteTypes> => useContext(NotesContext).dispatch
export const useNotesState = (): INoteState => useContext(NotesContext).state