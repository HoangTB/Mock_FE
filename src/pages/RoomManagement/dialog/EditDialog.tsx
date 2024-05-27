import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Form, Formik } from 'formik';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EditRoomDialogProps {
  open: boolean;
  IDDisease: number;
  onCloseEdit: () => void;
  onUpdateSuccess: () => void;
}

export function EditRoomDialog(props: EditRoomDialogProps) {
  const handleClose = () => {
    props.onCloseEdit();
  };

  const updateRoom = () => {};

  const notify = () => {
    toast.success('Update Disease Success!', {
      position: 'top-center' as ToastPosition,
    });
  };

  return (
    <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Room</DialogTitle>
      <DialogContent sx={{ minWidth: 500 }}>
        <Formik
          initialValues={{
            maxNumberPeopleOfRoom: '',
            numberOfBeds: '',
            priceOfRoom: '',
            roomNumber: '',
            statusOfRoom: '',
            descriptionOfRoom: '',
          }}
          onSubmit={() => {}}
        >
          <Form style={{ marginTop: 20 }}>
            <TextField id="outlined-error" label="Name of room" sx={{ width: '100%' }} />
            <TextField
              id="outlined-multiline-flexible"
              label="Max number people of room"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Number of beds"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Price of room"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Room number"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Status of room"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description of room"
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
                startIcon={<UpdateIcon />}
                sx={{ ml: 3 }}
                onClick={() => {
                  notify();
                  updateRoom();
                }}
              >
                Update
              </Button>
              <ToastContainer />
            </Box>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
