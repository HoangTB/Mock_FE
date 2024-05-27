import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CreateRoomDialogProps {
  open: boolean;
  onCloseAdd: () => void;
  onAddSuccess: () => void;
}

export function CreateRoomDialog(props: CreateRoomDialogProps) {
  const handleClose = () => {
    props.onCloseAdd();
  };

  const createRoom = () => {};

  const notify = () => {
    toast.success('Create Room Success!', {
      position: 'top-center' as ToastPosition,
    });
  };

  return (
    <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add new disease</DialogTitle>
      <DialogContent sx={{ minWidth: 500 }}>
        <Formik
          initialValues={{
            nameDisease: '',
            description: '',
          }}
          onSubmit={() => {}}
        >
          <Form style={{ marginTop: 20 }}>
            <TextField id="outlined-multiline-flexible" label="Name of Disease" sx={{ width: '100%' }} />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Symptoms"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <Box sx={{ mt: 3, textAlign: 'right' }}>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineIcon />}
                sx={{ ml: 3 }}
                onClick={() => {
                  notify();
                  createRoom();
                }}
              >
                Create
              </Button>
              <ToastContainer />
            </Box>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
