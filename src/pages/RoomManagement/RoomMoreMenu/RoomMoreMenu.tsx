import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import { Dropdown, Menu, Button } from 'antd';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RoomMoreMenu.css';
import { EditRoomDialog } from '../Dialog/EditDialog/EditDialog';

interface RoomMoreMenuProps {
  onUpdateSuccess: () => void;
  onDeleteSuccess: () => void;
  onClose: (isSuccessEdit: boolean) => void;
}

const RoomMoreMenu: React.FC<RoomMoreMenuProps> = ({ onUpdateSuccess, onDeleteSuccess, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = (isSuccessEdit: boolean) => {
    setOpenEdit(false);
    onClose(isSuccessEdit);
  };

  const notify = () => {
    toast.success('Delete Room Success!', {
      position: 'top-center' as ToastPosition,
    });
  };

  const menuItems = [
    {
      key: '1',
      icon: <Icon icon={trash2Outline} width={24} height={24} />,
      label: (
        <div onClick={notify}>
          Delete
          <ToastContainer />
        </div>
      ),
    },
    {
      key: '2',
      icon: <Icon icon={editFill} width={24} height={24} />,
      label: <div onClick={handleOpenEditDialog}>Edit</div>,
    },
  ];

  return (
    <>
      <EditRoomDialog open={openEdit} onUpdateSuccess={onUpdateSuccess} onCloseEdit={onUpdateSuccess} />
      <Dropdown menu={{ items: menuItems }} trigger={['click']} onOpenChange={setIsOpen} open={isOpen}>
        <Button type="text" className="iconButton">
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </Button>
      </Dropdown>
    </>
  );
};

export default RoomMoreMenu;
