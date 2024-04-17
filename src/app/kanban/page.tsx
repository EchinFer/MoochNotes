import kanbanData, { columns } from '@/src/data/kanban';
import { UniqueIdentifier } from '@dnd-kit/core';
import KanbanView from './components/KanbanView';

const Notes = () => {

    const itemsSortables: UniqueIdentifier[] = kanbanData.map(note => {
        const itemSortable: UniqueIdentifier = note.id;
        return itemSortable;
    });

    return (
        <>
            <KanbanView
                // initialItems={kanbanData}
                data={columns}
                // itemSortables={itemsSortables}
            />
        </>
    )
}

export default Notes;