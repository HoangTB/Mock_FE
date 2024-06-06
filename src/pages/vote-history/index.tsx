import React, { useState, useEffect } from 'react';
import {
  Col,
  Dropdown,
  Row,
  Space,
  Table,
  TableProps,
  Modal,
  Form,
  Input,
  Button,
  message,
  Flex,
  InputNumber,
} from 'antd';
import Title from 'antd/es/typography/Title';
import { Voted } from '../../types/voted';
import { DashOutlined } from '@ant-design/icons';
import { deleteRating, getAllVoteHistory, updateVoteHistory } from '../../api/vote-history/vote-history-api';
import styles from './style.module.css';

const VoteHistory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<Voted | null>(null);
  const [voteHistory, setVoteHistory] = useState<Voted[]>([]);
  const [form] = Form.useForm();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [initialValues, setInitialValues] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    fetchVoteHistory();
  }, []);

  const fetchVoteHistory = async () => {
    try {
      const data = await getAllVoteHistory();
      setVoteHistory(data);
    } catch (error) {
      console.error('Error fetching vote history:', error);
    }
  };

  const showModal = (record: Voted) => {
    setCurrentRecord(record);
    const initialFormValues = {
      title: record.titleRating,
      content: record.contentRating,
      starRating: record.starRating,
      hotel: record.nameHotel,
      timeCreated: formatDate(record.timeCreated),
    };
    setInitialValues(initialFormValues);
    form.setFieldsValue(initialFormValues);
    setIsModalVisible(true);
    setIsSubmitDisabled(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const updatedRecord = {
        ...currentRecord!,
        titleRating: values.title,
        contentRating: values.content,
        starRating: values.starRating,
        timeCreated: new Date().toISOString(),
      };
      await updateVoteHistory(
        updatedRecord.idRating,
        updatedRecord.titleRating,
        updatedRecord.contentRating,
        updatedRecord.starRating,
        updatedRecord.timeCreated,
      );
      setIsModalVisible(false);
      fetchVoteHistory();
      message.success('Vote history updated successfully!');
    } catch (error) {
      message.error('Failed to update vote history.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentRecord(null);
    form.resetFields();
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleMenuClick = (key: string, record: Voted) => {
    if (key === '1') {
      showModal(record);
    } else if (key === '2') {
      Modal.confirm({
        title: 'Are you sure you want to delete this record?',
        content: 'This action cannot be undone.',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: async () => {
          try {
            await deleteRating(record.idRating);
            fetchVoteHistory();
            message.success('Vote history deleted successfully!');
          } catch (error) {
            message.error('Failed to delete vote history.');
          }
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
      title: 'Title',
      dataIndex: 'titleRating',
      key: 'titleRating',
    },
    {
      title: 'Content',
      dataIndex: 'contentRating',
      key: 'contentRating',
    },
    {
      title: 'Star Rating',
      dataIndex: 'starRating',
      key: 'starRating',
    },
    {
      title: 'Hotel',
      dataIndex: 'nameHotel',
      key: 'nameHotel',
    },
    {
      title: 'Time Created',
      dataIndex: 'timeCreated',
      key: 'timeCreated',
      render: (timeCreated: string) => formatDate(timeCreated),
    },
    {
      title: '',
      key: 'action',
      render: (_, record: Voted) => (
        <Space size="middle">
          <Dropdown menu={menu(record)}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              <DashOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
      responsive: ['md'],
    },
  ];

  const onValuesChange = (changedValues: { [key: string]: any }, allValues: { [key: string]: any }) => {
    const { title, content, starRating } = allValues;
    const isChanged = Object.keys(changedValues).some((key) => changedValues[key] !== initialValues[key]);
    const isEmpty = !title || !content || !starRating;
    setIsSubmitDisabled(!isChanged || isEmpty);
  };

  return (
    <>
      <Row>
        <Col span={24} className={styles.title}>
          <Title level={3}>Voted History</Title>
        </Col>
        <Col span={24} className={styles.colTable}>
          <Table columns={columns} dataSource={voteHistory} className={styles.table} />
        </Col>
      </Row>

      <Modal
        title="Edit Voted"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} disabled={isSubmitDisabled}>
            Save
          </Button>,
        ]}
        className={styles.modal}
      >
        {currentRecord && (
          <Form form={form} className={styles.formUpdate} onValuesChange={onValuesChange}>
            <Flex gap={10} align="center">
              <label htmlFor="title" className={styles.label}>
                Title
              </label>
              <Form.Item
                name="title"
                className={styles.inputLabel}
                rules={[{ required: true, message: 'Please input the title!' }]}
              >
                <Input />
              </Form.Item>
            </Flex>
            <Flex gap={10} align="center">
              <label htmlFor="content" className={styles.label}>
                Content
              </label>
              <Form.Item
                name="content"
                className={styles.inputLabel}
                rules={[{ required: true, message: 'Please input the content!' }]}
              >
                <Input />
              </Form.Item>
            </Flex>
            <Flex gap={10} align="center">
              <label htmlFor="starRating" className={styles.label}>
                Star Rating
              </label>
              <Form.Item
                name="starRating"
                className={styles.inputLabel}
                rules={[
                  { required: true, message: 'Please input the star rating!' },
                  {
                    validator: (_, value) => {
                      if (typeof value !== 'number' || value < 1 || value > 5) {
                        return Promise.reject('Star rating must be a number between 1 and 5');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <InputNumber min={1} max={5} style={{ width: '100%' }} />
              </Form.Item>
            </Flex>
            <Flex gap={10} align="center">
              <label htmlFor="hotel" className={styles.label}>
                Hotel
              </label>
              <Form.Item name="hotel" className={styles.inputLabel}>
                <Input readOnly disabled />
              </Form.Item>
            </Flex>
            <Flex gap={10} align="center">
              <label htmlFor="timeCreated" className={styles.label}>
                Time Created
              </label>
              <Form.Item name="timeCreated" className={styles.inputLabel}>
                <Input readOnly disabled />
              </Form.Item>
            </Flex>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default VoteHistory;
