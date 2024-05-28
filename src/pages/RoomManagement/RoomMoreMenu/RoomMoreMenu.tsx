import React, { useState } from 'react';
import { Dropdown, Button, Menu, notification } from 'antd';
import { EditOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import './RoomMoreMenu.css';
import { EditRoomDialog } from '../Dialog/EditDialog/EditDialog';

interface RoomMoreMenuProps {
  onUpdateSuccess: () => void;
  onDeleteSuccess: () => void;
  onClose: (isSuccessEdit: boolean) => void;
}

const RoomMoreMenu: React.FC<RoomMoreMenuProps> = ({ onUpdateSuccess, onDeleteSuccess, onClose }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = (isSuccessEdit: boolean) => {
    setOpenEdit(false);
    onClose(isSuccessEdit);
  };

  const notify = () => {
    notification.success({
      message: 'Delete Room Success!',
      placement: 'top',
    });
  };

  const handleMenuClick = ({ key }: { key: React.Key }) => {
    if (key === '1') {
      notify();
    } else if (key === '2') {
      handleOpenEditDialog();
    }
    setMenuVisible(false); // Close the menu after click
  };

  const menu: () => React.ReactNode = () => (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
      <Menu.Item key="2" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <EditRoomDialog open={openEdit} onUpdateSuccess={onUpdateSuccess} onCloseEdit={onUpdateSuccess} />
      {/* <Dropdown menu={menu} open={menuVisible} onOpenChange={setMenuVisible} trigger={['click']}>
        <Button type="text" className="iconButton">
          <MoreOutlined />
        </Button>
      </Dropdown> */}
    </>
  );
};

export default RoomMoreMenu;
