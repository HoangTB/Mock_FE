import React, { useState } from 'react';
import { Col, Dropdown, Row, Space, Table, TableProps, Modal, Form, Input, Button } from 'antd';
import Title from 'antd/es/typography/Title';
import styles from './style.module.css';
import { Voted } from '../../types/voted';
import { DashOutlined } from '@ant-design/icons';

const VoteHistory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<Voted | null>(null);

  const showModal = (record: Voted) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Thực hiện cập nhật dữ liệu ở đây
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = (key: string, record: Voted) => {
    if (key === '1') {
      // 'Edit' option
      showModal(record);
    } else if (key === '2') {
      // 'Delete' option
      Modal.confirm({
        title: 'Are you sure you want to delete this record?',
        content: 'This action cannot be undone.',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('Deleted');
          // Xử lý logic xóa ở đây
        },
      });
    }
  };

  const menu = (record: Voted) => ({
    items: [
      { key: '1', label: 'Edit', onClick: () => handleMenuClick('1', record) },
      { key: '2', label: 'Delete', onClick: () => handleMenuClick('2', record) },
    ],
  });

  const columns: TableProps<Voted>['columns'] = [
    {
      title: '#',
      dataIndex: 'voteID',
      key: 'voteID',
      responsive: ['md'],
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      responsive: ['md'],
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
      responsive: ['md'],
    },
    {
      title: 'Type',
      dataIndex: 'typeRoom',
      key: 'typeRoom',
      responsive: ['md'],
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      responsive: ['md'],
    },

    {
      title: '',
      key: 'action',
      render: (_, record: Voted) => (
        <Space size="middle">
          <Dropdown menu={menu(record)}>
            <a>
              <DashOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
      responsive: ['md'],
    },
  ];
  const data: Voted[] = [
    {
      voteID: 1,
      title: 'John Brown',
      branch: 'Ong Ich Khiem-Da Nang',
      typeRoom: 'Vip',
      dateCreated: new Date(2024, 1, 1).toDateString(),
    },
    {
      voteID: 2,
      title: 'kakakakakka',
      branch: 'Ton Duc Thang-Da Nang',
      typeRoom: 'Normal',
      dateCreated: new Date(2024, 12, 5).toDateString(),
    },
    {
      voteID: 3,
      title: 'ssssaasassssssssssssssssssssssssssssssssssssssss',
      branch: 'Ham Nghi-Da Nang',
      typeRoom: 'Vip',
      dateCreated: new Date(2024, 10, 4).toDateString(),
    },
    {
      voteID: 4,
      title: 'asdsdsdsdsdsd',
      branch: 'Ham Nghi-Da Nang',
      typeRoom: 'Normal',
      dateCreated: new Date(2024, 10, 4).toDateString(),
    },
  ];
  return (
    <>
      <Row>
        <Col span={24} className={styles.title}>
          <Title level={3}>Voted History</Title>
        </Col>
        <Col span={24} className={styles.colTable}>
          <Table columns={columns} dataSource={data} className={styles.table} />
        </Col>
      </Row>

      <Modal
        title="Edit Voted"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className={styles.btnSubmit} onClick={handleOk}>
            Save
          </Button>,
        ]}
        className={styles.modal}
      >
        {currentRecord && (
          <Form
            initialValues={{
              title: currentRecord.title,
              branch: currentRecord.branch,
              typeRoom: currentRecord.typeRoom,
              dateCreated: currentRecord.dateCreated,
            }}
            className={styles.formUpdate}
          >
            <Form.Item label="Title" name="title">
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item label="Branch" name="branch">
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item label="Type" name="typeRoom">
              <Input className={styles.input} />
            </Form.Item>
            <Form.Item label="Date Created" name="dateCreated">
              <Input className={styles.input} />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default VoteHistory;
