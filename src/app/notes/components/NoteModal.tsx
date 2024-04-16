"use client"
import { useState } from 'react';
import { INote } from '@/src/interfaces/notes/index';
import { Box, Button, FormGroup, Modal, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function NoteModal(prop: { toggleModal: Function, note: INote | null }) {
    const { toggleModal, note } = prop;
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        toggleModal();
    }

    return (
        <>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>
                    <FormGroup>
                        <TextField
                            placeholder="Add a title"
                            value={note?.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            placeholder="Write here..."
                            value={note?.content}
                            multiline
                        />
                    </FormGroup>

                    <Button variant={"contained"} onClick={handleClose}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default NoteModal;