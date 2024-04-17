"use client"
import { FormControlElement, INote } from "@/src/interfaces/notes/";
import Note from "./Note";
import NoteModal from "./NoteModal";
import { useState, useEffect, MouseEventHandler } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
    DndContext,
    DragEndEvent,
    UniqueIdentifier,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
} from "@dnd-kit/core";
import {
    SortableContext,
    sortableKeyboardCoordinates,
    arrayMove,
    horizontalListSortingStrategy
} from "@dnd-kit/sortable";
import { Box, ClickAwayListener, FormGroup, IconButton, Paper, Stack, TextField, styled } from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';

const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        border: 0
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 0
        },
        '&:hover fieldset': {
            border: 0
        },
        '&.Mui-focused fieldset': {
            border: 0
        },
    },
});
const NoteArea = ({ itemSortables, notes }: { itemSortables: UniqueIdentifier[], notes: INote[] }) => {
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [focusedNote, setFocusedNote] = useState(null);
    const [itemsNotes, setItemsNotes] = useState<UniqueIdentifier[]>(itemSortables);
    const [inputFocused, setInputFocus] = useState(false);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    const handleFocusFormNote = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        setInputFocus(true);
    }
    const handleClickAway = (e: MouseEvent | TouchEvent) => {
        console.log(e);
        setInputFocus(false);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItemsNotes((items) => {
                const oldIndex = items.indexOf(Number(active.id));
                const newIndex = items.indexOf(Number(over?.id));
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    function handleDragStart(event: DragStartEvent) {
        console.log("Drag start");
    }

    const closeNoteModal = () => {
        setShowNoteModal(false);
    }

    return (
        <>
            <Grid container spacing={2} padding={1}>
                <Grid xs={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <ClickAwayListener onClickAway={handleClickAway} mouseEvent={"onMouseDown"}>
                        <Paper
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { width: "100%" },
                                width: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: 1
                            }}
                            noValidate
                            autoComplete="off"
                            onClick={(e) => handleFocusFormNote(e)}
                        >
                            <StyledTextField
                                defaultValue="Title"
                                placeholder="Title"
                                sx={{
                                    display: inputFocused ? "block" : "none"
                                }}
                            />
                            <StyledTextField
                                defaultValue="Hello World"
                                placeholder="Enter a note"
                                multiline
                            />
                            <Box
                                sx={{
                                    width: "100%",
                                    display: inputFocused ? "flex" : "none"
                                }}
                            >
                                <IconButton aria-label="delete">
                                    <PaletteIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    </ClickAwayListener>
                </Grid>
                <Grid xs={12}>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                        onDragStart={handleDragStart}
                    >
                        <SortableContext
                            items={itemsNotes}
                            strategy={horizontalListSortingStrategy}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 3
                                }}
                            >
                                {itemsNotes.map(item_ => {
                                    const note_ = notes.find(note => note.id == item_);
                                    if (note_ === undefined) return null;
                                    const note: INote = {
                                        ...note_
                                    }
                                    return <Note key={note.id} note={note} />
                                })}
                            </Box>
                        </SortableContext>

                    </DndContext>
                </Grid>
            </Grid >
            {
                showNoteModal && <NoteModal toggleModal={closeNoteModal} note={focusedNote} />
            }

        </>
    )
}

export default NoteArea;