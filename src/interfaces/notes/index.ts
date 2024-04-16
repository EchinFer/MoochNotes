import { Dispatch } from "react";

export type FormControlElement = HTMLElement | null;

export enum ENoteTypeBackground {
    Color,
    Image,
}

export interface INoteBackground {
    type: ENoteTypeBackground
    content: string
}

export interface INoteTag {
    id: number;
    name: string;
}

export interface INote {
    id: number;
    title: string;
    content: string;
    background: INoteBackground
    tag?: INoteTag;
    updatedAt?: string;
    createdAt: string;
}


export enum NoteActionTypes {
    ADD = "ADD",
    REMOVE = "REMOVE",
}

export interface INoteState {
    notes: INote[]
}

export type INoteTypes = {
    type: NoteActionTypes,
    payload: INote
};

export interface INoteContextValues {
    state: INoteState,
    dispatch: Dispatch<INoteTypes>
}