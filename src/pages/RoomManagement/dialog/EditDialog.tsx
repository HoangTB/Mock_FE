import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Form, Formik } from 'formik';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EditDiseaseDialogProps {
  open: boolean;
  IDDisease: number;
  onCloseEdit: () => void;
  onUpdateSuccess: () => void;
}

export function EditDiseaseDialog(props: EditDiseaseDialogProps) {
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
      <DialogTitle id="form-dialog-title">Edit disease</DialogTitle>
      <DialogContent sx={{ minWidth: 500 }}>
        <Formik
          initialValues={{
            nameDisease: '',
            description: '',
            symptoms: '',
            cause: '',
            risk: '',
            complication: '',
            preparing: '',
            tests: '',
            treatment: '',
            lifeStyle: '',
            prevention: '',
          }}
          onSubmit={() => {}}
        >
          <Form style={{ marginTop: 20 }}>
            <TextField id="outlined-error" label="Name of Disease" sx={{ width: '100%' }} />
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
            <TextField
              id="outlined-multiline-flexible"
              label="Cause"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Risk"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Complication"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Preparing"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Tests"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Treatment"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Life Style"
              multiline
              minRows={4}
              sx={{ width: '100%', mt: 3 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Prevention"
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
