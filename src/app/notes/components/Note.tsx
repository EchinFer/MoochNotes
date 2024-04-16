'use client'
import { INote } from "@/src/interfaces/notes";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardActions from "@mui/material/CardActions"

const Note = (props: { note: INote }) => {
    const { note } = props;
    // const { attributes, listeners, setNodeRef, transform } = useDraggable({
    //     id: note.id.toString(),
    // });
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: note.id });

    const style = {
        transform: CSS.Translate.toString(transform),
        flexBasis: "33%",
        transition: transition,
    };
    console.log("title: ", note.title);
    return (
        <Card
            {...listeners}
            {...attributes}
            sx={{
                ...style,
                bgcolor: "primary.main"
            }}
            ref={setNodeRef}

        >

            <CardHeader title={note.title} />
            <CardContent>
                {note.content}
            </CardContent>
            <CardActions className="text-muted">
                {note.updatedAt ?? note.createdAt}
            </CardActions>
        </Card>
    )
}

export default Note