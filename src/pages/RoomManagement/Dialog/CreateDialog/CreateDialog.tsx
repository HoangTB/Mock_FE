import React from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './CreateDialog.css';

// Define the props for the component
interface CreateRoomDialogProps {
  open: boolean;
  onCloseEdit: (isSuccessEdit: boolean) => void;
  onUpdateSuccess: () => void;
}

export const CreateRoomDialog: React.FC<CreateRoomDialogProps> = ({ open, onCloseEdit, onUpdateSuccess }) => {
  const [form] = Form.useForm();

  const notify = () => {
    notification.success({
      message: 'Create Room Success!',
      placement: 'top',
    });
  };

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    // Perform your submit logic here
    notify();
    onUpdateSuccess();
    onCloseEdit(true);
  };

  return (
    <Modal
      title="Create Room"
      open={open}
      onCancel={() => onCloseEdit(false)}
      footer={null}
      className="create-room-dialog"
    >
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
        onFinish={handleFinish}
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
          <Button icon={<DeleteOutlined />} onClick={() => onCloseEdit(false)}>
            Cancel
          </Button>
          <Button type="primary" icon={<EditOutlined />} htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
