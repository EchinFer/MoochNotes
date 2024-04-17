'use client'
import { IKanbanItem } from "@/src/interfaces/kanban";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const KanbanItem = ({ item: { id, title } }: { item: IKanbanItem }) => {
    // useSortableに指定するidは一意になるよう設定する必要があります。s
    const { attributes, listeners, setNodeRef, transform } = useSortable({
        id: id
    });

    const style = {
        margin: "10px",
        opacity: 1,
        color: "#333",
        background: "white",
        padding: "10px",
        transform: CSS.Transform.toString(transform)
    };

    return (
        // attributes、listenersはDOMイベントを検知するために利用します。
        // listenersを任意の領域に付与することで、ドラッグするためのハンドルを作ることもできます。
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <div id={id}>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default KanbanItem