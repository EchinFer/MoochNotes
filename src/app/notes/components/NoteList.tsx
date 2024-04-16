'use client'
import { INote } from '@/src/interfaces/notes'
import Note from './Note';
import { useDroppable } from '@dnd-kit/core';
import Box from '@mui/material/Box';

const NoteList = ({ notes }: { notes: Array<INote> }) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 3
            }}
        >
            {notes.map(note => (<Note key={note.id} note={note} />))}
        </Box>
    );
}

export default NoteList