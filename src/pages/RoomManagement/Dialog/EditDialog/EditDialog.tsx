import React from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './EditDialog.css';

interface EditRoomDialogProps {
  open: boolean;
  onCloseEdit: () => void;
  onUpdateSuccess: () => void;
}

export const EditRoomDialog: React.FC<EditRoomDialogProps> = ({ open, onCloseEdit, onUpdateSuccess }) => {
  const [form] = Form.useForm();

  const handleClose = () => {
    onCloseEdit();
  };

  const notify = () => {
    notification.success({
      message: 'Update Disease Success!',
      placement: 'top',
    });
  };

  const updateRoom = (values: any) => {
    console.log('Updated values:', values);
    notify();
    onUpdateSuccess();
  };

  return (
    <Modal title="Edit Room" open={open} onCancel={handleClose} footer={null} className="edit-room-dialog">
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          maxNumberPeopleOfRoom: '',
          numberOfBeds: '',
          priceOfRoom: '',
          roomNumber: '',
          statusOfRoom: '',
          descriptionOfRoom: '',
        }}
        onFinish={updateRoom}
      >
        <Form.Item label="Name of room" name="roomName" rules={[{ required: true, message: 'Please enter room name' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Max number people of room"
          name="maxNumberPeopleOfRoom"
          rules={[{ required: true, message: 'Please enter max number of people' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Number of beds"
          name="numberOfBeds"
          rules={[{ required: true, message: 'Please enter number of beds' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price of room"
          name="priceOfRoom"
          rules={[{ required: true, message: 'Please enter price of room' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Room number"
          name="roomNumber"
          rules={[{ required: true, message: 'Please enter room number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Status of room"
          name="statusOfRoom"
          rules={[{ required: true, message: 'Please enter status of room' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description of room"
          name="descriptionOfRoom"
          rules={[{ required: true, message: 'Please enter description of room' }]}
        >
          <Input />
        </Form.Item>
        <div className="dialog-footer">
          <Button icon={<DeleteOutlined />} onClick={handleClose}>
            Cancel
          </Button>
          <Button type="primary" icon={<EditOutlined />} htmlType="submit" style={{ marginLeft: '10px' }}>
            Edit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
