
"use client"
import { DragEndEvent, DragStartEvent, UniqueIdentifier, useDraggable, useDroppable } from '@dnd-kit/core';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import GridLayout from 'react-grid-layout';
import { useState } from 'react';


interface DraggableProps {
    children: React.ReactNode
}
interface DroppableProps {
    children: React.ReactNode
}
const DragrableExample = () => {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable>Drag me</Draggable>
    );

    function handleDragEnd(event: DragEndEvent) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? draggableMarkup : null}
            <Droppable>
                {isDropped ? draggableMarkup : 'Drop here'}
            </Droppable>
        </DndContext>
    )
}

const Draggable = ({ children }: DraggableProps) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </button>
    );
}

const Droppable = ({ children }: DroppableProps) => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}

export default DragrableExample 