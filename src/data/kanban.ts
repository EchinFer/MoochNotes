
import { EKanbanItemTypeBackground, IKanbanColumn, IKanbanItem, IKanbanItemBackground } from "../interfaces/kanban";
const defaultBackground: IKanbanItemBackground = {
    type: EKanbanItemTypeBackground.Color,
    content: "#493434"

};
const noteExample1: IKanbanItem = {
    id: "1",
    title: "Nota de ejemplo 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga?",
    background: defaultBackground,
    createdAt: "Fri Sep 01 2023 16:11:55"
};
const noteExample2: IKanbanItem = {
    id: "2",
    title: "Nota de ejemplo 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga?",
    background: defaultBackground,
    createdAt: "Fri Sep 01 2023 16:11:55"
};

const noteExample3: IKanbanItem = {
    id: "3",
    title: "Nota de ejemplo 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga?",
    background: defaultBackground,
    createdAt: "Fri Sep 01 2023 16:11:55"
};

const kanban: IKanbanItem[] = [
    noteExample1,
    noteExample2,
    noteExample3
];

export const columns: IKanbanColumn[] = [
    {
        id: "10",
        title: "Pendiente",
        cards: [noteExample1]
    },
    {
        id: "20",
        title: "En progreso",
        cards: [noteExample2]
    },
    {
        id: "30",
        title: "Hecho",
        cards: [noteExample3]
    }
];

export default kanban;



