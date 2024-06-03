import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Flex, Typography, Form, Select, Input, Row, Col, GetProp, Checkbox, Button, DatePicker, ConfigProvider, DatePickerProps, SelectProps, FormProps } from 'antd';

import { CarOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import { roomApi } from '../../api/room/room-api';
import { useLocation, useParams } from 'react-router-dom';
import { IRoom, IRoomDetail } from '../../types/room';
const { Title } = Typography;



const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const hourOptions: any[] | undefined = [];

for (let i = 1; i < 13; i++) {
  hourOptions.push({
    value: i,
    label: i + " giờ",
  });
}

const BookingRoom = () => {
  const [form] = Form.useForm();
  const { idRoom } = useParams()

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<{
    room: IRoomDetail,
    services: {
      nameService: string,
      idService: number,
    }[]
  }>({
    room: {
      nameHotel: "",
      address: "",
      typeRoom: "",
      descriptionOfRoom: "",
      images: [],
      priceOfRoom: 0,
      available: true,
      roomID: ""
    },
    services: []
  });

  useEffect(() => {
    (async () => {
      if (idRoom) {
        const { room, services } = await roomApi.getRoomById(idRoom);

        setData({
          room,
          services
        });
        setIsLoading(true);
      }
    })()
  }, [])

  const calculateNewDate = () => {

    if (selectedDate && selectedHour) {
      const currentDate = new Date();
      const selectedDateObj = new Date(selectedDate);

      selectedDateObj.setHours(selectedDateObj.getHours() + parseInt(selectedHour));

      const year = selectedDateObj.getFullYear();
      const month = String(selectedDateObj.getMonth() + 1).padStart(2, '0'); // Thêm số 0 phía trước nếu cần
      const date = String(selectedDateObj.getDate()).padStart(2, '0');
      const hours = String(selectedDateObj.getHours()).padStart(2, '0');
      const minutes = String(selectedDateObj.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${date} ${hours}:${minutes}`;
    }
    return '';
  };

  const onChangeDate: DatePickerProps['onChange'] = (_: any, dateStr: any) => {
    setSelectedDate(dateStr);
    form.setFieldsValue({ DatePicker: dateStr });
  };
  const disabledDate = (current: any) => {
    const today = new Date();
    return current && current < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const handleHourChange = (value: string) => {
    setSelectedHour(value);
  };


  const onFinish: FormProps['onFinish'] = (values) => {
    console.log("123")
    console.log('Form Values:', values);

  };

  return (
    <>
      {' '}

      {isLoading &&

        <>
          <div>
            <img
              src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
              className={styles.banner}
            ></img>
          </div>
          <Container>
            <StepByStep />
          </Container>
          <Container>
            <div className={styles.address}>
              <h1 style={{ fontSize: 30, lineHeight: 2 }}>{data.room.nameHotel}</h1>
              <p>{data.room.address}</p>
              <hr className={styles.border}></hr>
              <div>
                <Title level={4}>Service</Title>
                <Flex gap="middle">
                  <div className={styles.flex}>
                    <CarOutlined
                      style={{
                        fontSize: 50,
                      }}
                    />
                    <p>Car parking</p>
                  </div>
                  <div className={styles.flexmiddle}>
                    <DesktopOutlined style={{ fontSize: 50 }} />
                    <p>Tivi</p>
                  </div>
                  <div className={styles.flex}>
                    <UserOutlined style={{ fontSize: 50 }} />
                    <p>Service 24/24</p>
                  </div>
                </Flex>
              </div>
              <hr className={styles.border2}></hr>
              <Form name="basic"

                initialValues={{ remember: true }}
                onFinish={onFinish}

                autoComplete="off">
                <Row className={styles.rowLeft}>
                  <Col span={13} md={11} sm={24} xs={24} className={styles.roomBorder1}>
                    <img
                      className={styles.imageroom}
                      alt="example"
                      src="https://www.claridges.co.uk/siteassets/rooms/2023-claridges-rooms-and-suites-balcony-room-1920_720.jpg"
                    />

                    <Flex className={styles.roomElement}>

                      <div>
                        <b className={styles.title}>Room number: {data.room.roomNumber}</b>
                        <ul>
                          <li key="1">Type of room: {data.room.typeRoom}</li>
                          <li key="2">Number of bed: {data.room.numberOfBeds}</li>
                          <li key="3">Description: {data.room.descriptionOfRoom}</li>
                        </ul>
                      </div>
                      <b className={styles.price}>{data.room.priceOfRoom}$</b>
                    </Flex>
                  </Col>
                  <Col span={11} md={12} sm={24} xs={24} className={styles.roomBorder2}>
                    <Form.Item
                      name="fullName"
                      label={<span className={styles.labelStyle}>FullName</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your full name!!' }]}
                    >
                      <Input
                        className={styles.inputStyle}
                      />
                    </Form.Item>
                    <Form.Item
                      name="cccd"
                      label={<span className={styles.labelStyle}>CCCD</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your CCCD!!' }]}
                    >
                      <Input className={styles.inputStyle}
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label={<span className={styles.labelStyle}>Email</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your email!!' }]}
                    >
                      <Input className={styles.inputStyle} />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label={<span className={styles.labelStyle}>Phone</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your phone!!' }]}
                    >
                      <Input className={styles.inputStyle} />
                    </Form.Item>
                    <Form.Item
                      name="gender"
                      label={<span className={styles.labelStyle}>Gender</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your gender!!' }]}
                    >
                      <Select className={styles.inputStyleSelect}>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24} md={24} sm={24} xs={24} className={styles.roomBorder3}>

                    <Flex className={styles.dateBook}>
                      <Col span={11}>
                        <Form.Item
                          label={<span className={styles.labelStyle}>Check-in date: </span>}
                          labelCol={{ span: 24 }}
                          name="datePicker"
                          rules={[{ required: true, message: 'Please input date!' }]}
                        >
                          <ConfigProvider>

                            <DatePicker showTime={{ format: 'HH' }} onChange={onChangeDate} disabledDate={disabledDate}
                            />

                          </ConfigProvider>
                          <p className={styles.labelStyle1}>Check-out date: {calculateNewDate()}</p>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="hours"
                          label={<span className={styles.labelStyle}>Hours Booking</span>}
                          labelCol={{ span: 24 }}
                          rules={[{ required: true, message: 'Please input hour!!' }]}
                        >
                          <Select options={hourOptions} onChange={handleHourChange} className={styles.inputStyleSelect} />

                        </Form.Item>
                        <Form.Item
                          name="numberOfPeople"
                          label={<span className={styles.labelStyle}>Number of people</span>}
                          labelCol={{ span: 24 }}
                          rules={[{ required: true, message: 'Please input number of people!!' }]}
                        >
                          <Select className={styles.inputStyleSelect}>
                            <Select.Option value="1">1</Select.Option>
                            <Select.Option value="2">2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                          </Select>

                        </Form.Item>
                      </Col>
                    </Flex>
                  </Col>
                  <hr className={styles.border2}></hr>
                </Row>

                <Row>
                  <Col span={12} md={12} sm={24} xs={24}>
                    <h1 className={styles.titleService}>Select service: </h1>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                      <Row gutter={5} style={{ width: '100%' }}>
                        {data.services.map((item) => (
                          <Col key={item.idService} span={8} md={8} sm={24} xs={24}>
                            <Checkbox value={item.idService}>{item.nameService}</Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Col>
                  <Col span={12} md={12} sm={24} xs={24} className={styles.btnSubmit} style={{ textAlign: 'center' }}>
                    <h1 className={styles.totalPrice}>Total: 100$</h1>
                    <Form.Item>
                      <Button htmlType="submit" className={styles.btnCheckout}>Checkout</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>

        </>}
    </>
  );
};
export default BookingRoom;
