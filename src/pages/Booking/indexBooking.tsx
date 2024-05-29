import React from 'react';
import styles from './Booking.module.css';
import { Flex, Typography, Form, Select, Input, Row, Col, GetProp, Checkbox, Button } from 'antd';


import {CarOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import StepByStep from "../../components/step-by-step/StepByStep";
import Container from "../../components/container/Container";
const { Title } = Typography;

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const options1 = [
  { label: 'Laundry Service (4$)', value: 'Laundry Service (4$)' },
  { label: 'Catering Service (1$)', value: 'Catering Service (1$)' },
  { label: 'Bell Service (1$)', value: 'Bell Service (1$)' },
  { label: 'Transportation service (2$)', value: 'Transportation service (2$)' },
  { label: 'Room Service (4$)', value: 'Room Service (4$)' },
  { label: 'Currency Exchange (5$)', value: 'Currency Exchange (5$)' },
];

const BookingRoom = () => {
    const [form] = Form.useForm();
       
        

  return (
    <> <Container><StepByStep/></Container>
      <div>
        <img
          src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
          className={styles.banner}
        ></img>
      </div>
      <div className={styles.address}>
        <h1 style={{ fontSize: 30, lineHeight: 2 }}>Dao Tien Hotel - Branch 9</h1>
        <p>567 Nguyen Tat Thanh , Thanh Khe, Da Nang</p>
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
        <Form labelCol={{ span: 4 }} form={form} name="validateOnly" layout="vertical" autoComplete="off">
          <Row
            gutter={10}
            style={{
              justifyContent: 'space-between',
            }}
          >


                    <Col span={13} md={11} sm={24} xs={24} className={styles.roomBorder1}>

                        <img className={styles.imageroom} alt="example" src="https://www.claridges.co.uk/siteassets/rooms/2023-claridges-rooms-and-suites-balcony-room-1920_720.jpg" />

                        <Flex justify="space-between" align="center">
                            <div style={{ padding: 10 }}>
                                <b className={styles.title}>Room vip</b>
                                <ul style={{ listStyle: "disc", marginLeft: 35 }}>
                                    <li key="1">Guong tran</li>
                                    <li key="2">Ghe tinh yeu</li>
                                    <li key="3">Cua so</li>
                                </ul>
                            </div>
                            <b className={styles.price}>24$</b>
                        </Flex>


                    </Col>
                    <Col span={11} md={12} sm={24} xs={24} className={styles.roomBorder2}
                    >
                        <Form.Item name="fullName" label={<span className={styles.labelStyle}>FullName</span>} labelCol={{ span: 24 }} rules={[{ required: true, message: 'Please input your full name!!' }]}>
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item name="cccd" label={<span className={styles.labelStyle}>CCCD</span>} labelCol={{ span: 24 }} rules={[{ required: true }]}>
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item name="email" label={<span className={styles.labelStyle}>Email</span>} labelCol={{ span: 24 }} rules={[{ required: true }]}>
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item name="phone" label={<span className={styles.labelStyle}>Phone</span>} labelCol={{ span: 24 }} rules={[{ required: true }]}>
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item name="gender" label={<span className={styles.labelStyle}>Gender</span>} labelCol={{ span: 24 }} rules={[{ required: true }]}>
                            <Select className={styles.inputStyleSelect}>
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                <Select.Option value="other">Other</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <hr className={styles.border3}></hr>
                </Row>
              <Flex justify="space-between" align="center">
                <div style={{ padding: 10 }}>
                  <b className={styles.title}>Room vip</b>
                  <ul style={{ listStyle: 'disc', marginLeft: 35 }}>
                    <li key="1">Guong tran</li>
                    <li key="2">Ghe tinh yeu</li>
                    <li key="3">Cua so</li>
                  </ul>
                </div>
                <b className={styles.price}>24$</b>
              </Flex>
            
            <Col span={11} md={12} sm={24} xs={24} className={styles.roomBorder2}>
              <Form.Item
                name="fullName"
                label={<span className={styles.labelStyle}>FullName</span>}
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your full name!!' }]}
              >
                <Input className={styles.inputStyle} />
              </Form.Item>
              <Form.Item
                name="cccd"
                label={<span className={styles.labelStyle}>CCCD</span>}
                labelCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
                <Input className={styles.inputStyle} />
              </Form.Item>
              <Form.Item
                name="email"
                label={<span className={styles.labelStyle}>Email</span>}
                labelCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
                <Input className={styles.inputStyle} />
              </Form.Item>
              <Form.Item
                name="phone"
                label={<span className={styles.labelStyle}>Phone</span>}
                labelCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
                <Input className={styles.inputStyle} />
              </Form.Item>
              <Form.Item
                name="gender"
                label={<span className={styles.labelStyle}>Gender</span>}
                labelCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
               
              </Form.Item>
            </Col>
            <hr className={styles.border3}></hr>
          
          <Row>
            <Col span={12} md={12} sm={24} xs={24}>
              <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                <Row>
                  {options1.map((item) => (
                    <Col span={8} md={8} sm={24} xs={24}>
                      <Checkbox value={item.value}>{item.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Col>
            <Col span={12} md={12} sm={24} xs={24} className={styles.btnSubmit} style={{ textAlign: 'center' }}>
              <h1 className={styles.totalPrice}>Total: 100$</h1>
              <Form.Item>
                <Button
                  type="primary"
                  style={{
                    width: 300,
                    height: 50,
                    fontSize: 15,
                  }}
                >
                  Checkout
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default BookingRoom;
