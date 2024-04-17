import { IKanbanColumn, IKanbanItem } from "@/src/interfaces/kanban";
import { DragStartEvent, useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    rectSortingStrategy
} from "@dnd-kit/sortable";
import { Box, Paper, Typography } from "@mui/material";
import KanbanItem from "./KanbanItem";

interface IKanbanColumnProps {
    id: string;
    title: string;
    items: IKanbanItem[];
}
export const KanbanColumn = ({ id, title, items }: IKanbanColumnProps) => {
    const { setNodeRef } = useDroppable({ id: id });

    return (
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <div
                ref={setNodeRef}
                style={{
                    width: "200px",
                    background: "rgba(245,247,249,1.00)",
                    marginRight: "10px"
                }}
            >
                <Typography variant="h6">{title}</Typography>
                {items.map(item_ => (
                    <KanbanItem key={item_.id} item={item_} />
                ))}
            </div>
        </SortableContext>
    )
}
