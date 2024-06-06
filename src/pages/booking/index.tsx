import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import {
  Flex,
  Form,
  Select,
  Input,
  Row,
  Col,
  Checkbox,
  DatePicker,
  ConfigProvider,
  DatePickerProps,
  SelectProps,
  FormProps,
  Carousel,
} from 'antd';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import { roomApi } from '../../api/room/room-api';
import { useNavigate, useParams } from 'react-router-dom';
import { IBookingRoom, IRoomDetail, IService, IUserInfo } from '../../types/room';
import CustomButton from '../../components/buttons/submit-button/custom-button';
import { calculateNewDate } from '../../utils/date-time-format';

const hourOptions: any[] = [];

for (let i = 1; i < 13; i++) {
  hourOptions.push({
    value: i,
    label: `${i} giờ`,
  });
}

const BookingRoom = () => {
  const noData = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
  const [form] = Form.useForm();
  const navigate = useNavigate();
  let [isDisable, setIsDisable] = useState(false);
  const { idRoom } = useParams();
  let [sum, setSum] = useState(0);
  let [total, setTotal] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IBookingRoom>({
    room: {} as IRoomDetail,
    services: [] as IService[],
    user: {} as IUserInfo,
  });

  useEffect(() => {
    (async () => {
      if (idRoom) {
        const { room, services, user } = await roomApi.getRoomById(idRoom);
        setData({ room, services, user });
        setSum(room.priceOfRoom);
        setIsLoading(true);
        setTotal(room.priceOfRoom);
        if (user) {
          setIsDisable(true);
          form.setFieldsValue({
            fullName: user.userName,
            cccd: user.identificationCard,
            email: user.email,
            phone: user.phoneNumber,
            gender: user.gender ? 'male' : 'female',
          });
        }
      }
    })();
  }, [idRoom]);

  // const onChange = (checkedValues: any) => {
  //   let sum = data.room.priceOfRoom;
  //   checkedValues.forEach((item: any) => {
  //     sum += Number.parseInt(item.priceOfService);
  //   });
  //   setSum(sum);
  // };

  const onChangeDate: DatePickerProps['onChange'] = (_, dateStr: any) => {
    setSelectedDate(dateStr);
    form.setFieldsValue({ checkInDate: dateStr, checkOutDate: calculateNewDate(dateStr, selectedHour) });
  };

  const handleHourChange: SelectProps['onChange'] = (value) => {
    setSelectedHour(value);
    setTotal(value * data.room.priceOfRoom);
    form.setFieldsValue({ checkOutDate: calculateNewDate(selectedDate, value) });
  };

  const onFinish: FormProps['onFinish'] = (values) => {
    values.sum = values.hours * data.room.priceOfRoom;
    setTotal(values.hours * sum);
    localStorage.setItem('booking', JSON.stringify(values));
    navigate(`/booking/${data.room.idRoom}`);
    setIsDisable(false);
  };

  const disabledDate = (current: any) => {
    const today = new Date();
    return current && current < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const numberOfPeopleOptions = Array.from({ length: data.room.maxNumberPeopleOfRoom ?? 0 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  return (
    <>
      {isLoading && (
        <>
          <div>
            <img src={data.room.imageUrl} className={styles.banner} alt="Room Banner" />
          </div>
          <Container>
            <StepByStep />
          </Container>
          <Container>
            <div className={styles.address}>
              <h1 style={{ fontSize: 30, lineHeight: 2 }}>{data.room.nameHotel}</h1>
              <p>{data.room.address}</p>
              <hr className={styles.border}></hr>
              <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                <Row className={styles.rowLeft}>
                  <Col span={13} md={11} sm={24} xs={24} className={styles.roomBorder1}>
                    <Carousel autoplay arrows>
                      {data.room.images.map((image) => (
                        <img key={image} className={styles.imageroom} alt="example" src={image ? image : noData} />
                      ))}
                    </Carousel>

                    <Flex className={styles.roomElement}>
                      <div>
                        <b className={styles.title}>Room number: {data.room.roomNumber}</b>
                        <ul>
                          <li key="1">Type of room: {data.room.typeRoom}</li>
                          <li key="2">Number of bed: {data.room.numberOfBeds}</li>
                          <li key="3">Description: {data.room.descriptionOfRoom}</li>
                        </ul>
                      </div>
                      <b className={styles.price}>{data.room.priceOfRoom.toLocaleString('de-DE')} VND</b>
                    </Flex>
                  </Col>
                  <Col span={11} md={12} sm={24} xs={24} className={styles.roomBorder2}>
                    <Form.Item
                      name="fullName"
                      label={<span className={styles.labelStyle}>FullName</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                      <Input className={styles.inputStyle} disabled={isDisable} />
                    </Form.Item>
                    <Form.Item
                      name="cccd"
                      label={<span className={styles.labelStyle}>CCCD</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your CCCD!' }]}
                    >
                      <Input className={styles.inputStyle} disabled={isDisable} />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label={<span className={styles.labelStyle}>Email</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                      <Input className={styles.inputStyle} disabled={isDisable} />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label={<span className={styles.labelStyle}>Phone</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your phone!' }]}
                    >
                      <Input className={styles.inputStyle} disabled={isDisable} />
                    </Form.Item>
                    <Form.Item
                      name="gender"
                      label={<span className={styles.labelStyle}>Gender</span>}
                      labelCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Please input your gender!' }]}
                    >
                      <Select className={styles.inputStyleSelect} disabled={isDisable}>
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
                          name="checkInDate"
                          rules={[{ required: true, message: 'Please input date!' }]}
                        >
                          <ConfigProvider>
                            <DatePicker
                              showTime={{ format: 'HH' }}
                              onChange={onChangeDate}
                              disabledDate={disabledDate}
                              className={styles.inputStyle}
                              style={{ width: '100%' }}
                            />
                          </ConfigProvider>
                        </Form.Item>

                        <Form.Item
                          name="checkOutDate"
                          label={<span className={styles.labelStyle}>Check-out date</span>}
                          labelCol={{ span: 24 }}
                        >
                          <Input className={styles.inputStyle} disabled />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="hours"
                          label={<span className={styles.labelStyle}>Hours Booking</span>}
                          labelCol={{ span: 24 }}
                          rules={[{ required: true, message: 'Please input hour!' }]}
                        >
                          <Select
                            options={hourOptions}
                            onChange={handleHourChange}
                            className={styles.inputStyleSelect}
                          />
                        </Form.Item>
                        <Form.Item
                          name="numberOfPeople"
                          label={<span className={styles.labelStyle}>Number of people</span>}
                          labelCol={{ span: 24 }}
                          rules={[{ required: true, message: 'Please input number of people!' }]}
                        >
                          <Select options={numberOfPeopleOptions} className={styles.inputStyleSelect} />
                        </Form.Item>
                      </Col>
                    </Flex>
                  </Col>
                </Row>

                {/* <Row style={{ marginTop: '20px' }}>
                  <Col span={12} md={12} sm={24} xs={24}>
                    <h1 className={styles.titleService}>Select service: </h1>
                    <Form.Item name="services">
                      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Row gutter={5} style={{ width: '100%' }}>
                          {data.services.map((item) => (
                            <Col key={item.idService} span={8} md={8} sm={24} xs={24}>
                              <Checkbox value={item}>{item.nameService}</Checkbox>
                            </Col>
                          ))}
                        </Row>
                      </Checkbox.Group>
                    </Form.Item>
                  </Col>
                </Row> */}
                <hr className={styles.border}></hr>

                <Row style={{ justifyContent: 'center' }}>
                  <Col span={12} md={12} sm={24} xs={24} className={styles.btnSubmit} style={{ textAlign: 'center' }}>
                    <h1 className={styles.totalPrice}>Total: {total.toLocaleString('de-DE')} VND</h1>
                    <Form.Item>
                      <CustomButton type="primary" htmlType="submit" loading={!isLoading}>
                        Checkout
                      </CustomButton>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default BookingRoom;
