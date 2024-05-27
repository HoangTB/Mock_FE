import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box, DialogProps } from '@mui/material';
import { Formik, Form } from 'formik';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the props for the component
interface CreateRoomDialogProps extends DialogProps {
  open: boolean;
  onCloseEdit: (isSuccessEdit: boolean) => void;
  onUpdateSuccess: () => void;
}

export const CreateRoomDialog: React.FC<CreateRoomDialogProps> = (props) => {
  const { open, onCloseEdit, onUpdateSuccess } = props;

  const updateDisease = () => {};

  const notify = () => {
    toast.success('Create ROom Success!', {
      position: 'top-center' as ToastPosition,
    });
  };

  return (
    <Dialog open={open} onClose={() => onCloseEdit(false)} aria-labelledby="form-dialog-title">
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
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onCloseEdit(false)}>
                Cancel
              </Button>
              <Button
                variant="outlined"
                startIcon={<UpdateIcon />}
                sx={{ ml: 3 }}
                onClick={() => {
                  notify();
                  updateDisease();
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
};
