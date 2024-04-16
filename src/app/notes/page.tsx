import notes from '@/src/data/notes';
import NoteArea from './components/NoteArea';
import { UniqueIdentifier } from '@dnd-kit/core';

const Notes = () => {
 
    const itemsSortables: UniqueIdentifier[] = notes.map(note => {
        const itemSortable: UniqueIdentifier = note.id;
        return itemSortable;
    });

    return (
        <>
            <NoteArea notes={notes} itemSortables={itemsSortables}/>
        </>
    )
}

export default Notes