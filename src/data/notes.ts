
import { FormControlElement, INoteBackground, INote, ENoteTypeBackground } from "@/src/interfaces/notes/";
const defaultBackground: INoteBackground = {
    type: ENoteTypeBackground.Color,
    content: "#493434"

};
const now = new Date();
const noteExample1: INote = {
    id: 1,
    title: "Nota de ejemplo 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga?",
    background: defaultBackground,
    createdAt: "Fri Sep 01 2023 16:11:55"
};
const noteExample2: INote = {
    id: 2,
    title: "Nota de ejemplo 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga?",
    background: defaultBackground,
    createdAt: "Fri Sep 01 2023 16:11:55"
};

const noteExample3: INote = {
    id: 3,
    title: "Nota de ejemplo 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga?",
    background: defaultBackground,
    createdAt: "Fri Sep 01 2023 16:11:55"
};

const notes: Array<INote> = [
    noteExample1,
    noteExample2,
    noteExample3
];

export default notes;