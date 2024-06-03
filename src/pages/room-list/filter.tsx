import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Row, Select, Typography, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';

const { Title } = Typography;

interface FilterProps {
  onSearch: (query: any) => void;
}

const RoomSearch: React.FC<FilterProps> = ({ onSearch }) => {
  const [fromDate, setFromDate] = useState<Dayjs>(dayjs());
  const [toDate, setToDate] = useState<Dayjs>(dayjs().add(2, 'hour'));
  const [form] = Form.useForm();

  const handleFromDateChange = (date: Dayjs | null) => {
    form.setFieldsValue({ fromDate: date });
  };

  const handleToDateChange = (date: Dayjs | null) => {
    setToDate(date || dayjs().add(2, 'hour'));
    form.setFieldsValue({ toDate: date });
  };

  const disabledFromDate = (current: Dayjs) => {
    return current && current < dayjs().startOf('day');
  };

  const disabledToDate = (current: Dayjs) => {
    const fromDate = form.getFieldValue('fromDate');
    return (current && current < dayjs().startOf('day')) || (fromDate && current.isBefore(fromDate));
  };

  const filters = {
    fromDate: dayjs(),
    toDate: dayjs().add(3, 'hour'),
    typeRoom: 'ALL',
  };

  const handleOnSearch = () => {
    form
      .validateFields()
      .then((values) => {
        const query = {
          fromDate: values.fromDate ? values.fromDate.format('YYYY-MM-DDTHH:mm:ss') : undefined,
          toDate: values.toDate ? values.toDate.format('YYYY-MM-DDTHH:mm:ss') : undefined,
          typeRoom: values.typeRoom,
        };
        onSearch(query);
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  return (
    <div style={{ marginTop: 20, border: '1px solid #ccc', padding: 20, borderRadius: 10 }}>
      <Form initialValues={filters} form={form}>
        <Row gutter={[16, 16]} style={{ alignItems: 'center' }}>
          <Col xs={24} sm={12} md={6}>
            <div>
              <Title level={5} style={{ padding: 0, margin: 0 }}>
                From
              </Title>
              <Form.Item name="fromDate">
                <DatePicker
                  style={{ width: '100%' }}
                  disabledDate={disabledFromDate}
                  allowClear={false}
                  onChange={handleFromDateChange}
                />
              </Form.Item>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div>
              <Title level={5} style={{ padding: 0, margin: 0 }}>
                To
              </Title>
              <Form.Item name="toDate">
                <DatePicker style={{ width: '100%' }} showTime={{ showHour: true }} disabledDate={disabledToDate} />
              </Form.Item>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <div>
              <Title level={5} style={{ padding: 0, margin: 0 }}>
                Room type
              </Title>
              <Form.Item name="typeRoom">
                <Select
                  defaultValue="lucy"
                  style={{ width: '100%' }}
                  options={[
                    { value: 'ALL', label: 'ALL' },
                    { value: 'VIP', label: 'VIP' },
                    { value: 'Normal', label: 'Normal' },
                  ]}
                />
              </Form.Item>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            style={{
              marginTop: 10,
            }}
          >
            <Button
              size="middle"
              type="primary"
              style={{ width: '100%', background: 'var(--primary-color)' }}
              onClick={handleOnSearch}
            >
              <SearchOutlined />
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default RoomSearch;
