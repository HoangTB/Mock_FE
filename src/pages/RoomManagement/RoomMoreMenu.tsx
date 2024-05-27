import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateRoomDialog } from './dialog/CreateDialog';

// Define props interface
interface RoomMoreMenuProps {
  onUpdateSuccess: () => void;
  onDeleteSuccess: () => void;
  onClose: (isSuccessEdit: boolean) => void;
}

// Functional component with props type
const RoomMoreMenu: React.FC<RoomMoreMenuProps> = ({ onUpdateSuccess, onDeleteSuccess, onClose }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = (isSuccessEdit: boolean) => {
    setOpenEdit(false);
    onClose(isSuccessEdit);
  };

  const handleDeleteDisease = () => {};

  const notify = () => {
    toast.success('Delete Disease Success!', {
      position: 'top-center' as ToastPosition,
    });
  };

  return (
    <>
      {<CreateRoomDialog open={openEdit} onCloseEdit={handleCloseEdit} onUpdateSuccess={onUpdateSuccess} />}
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          sx={{ color: 'text.secondary' }}
          onClick={() => {
            notify();
            handleDeleteDisease();
          }}
        >
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
          <ToastContainer />
        </MenuItem>

        <MenuItem
          sx={{ color: 'text.secondary' }}
          onClick={() => {
            handleOpenEditDialog();
          }}
        >
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default RoomMoreMenu;
