import {
  Checkbox,
  Menu,
  MenuProps,
  Radio,
  RadioChangeEvent,
  Typography,
  message,
  Form,
  Carousel,
  Col,
  Row,
} from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useEffect, useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import styles from './payments.module.css';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { VnpayAPI } from '../../api/payment';
import { BookingRequest, QuantityItem, UsersRequest, VnpayRequest } from '../../api/payment/request/vnpay.request';
import {
  BookingDataLocalResponse,
  MomoResponse,
  VnpayResponse,
  ZaloResponse,
} from '../../api/payment/response/vnpay.response';
import Dropdown from 'antd/es/dropdown/dropdown';
import { useParams } from 'react-router-dom';
import { roomApi } from '../../api/room/room-api';
import { IBookingRoom, IRoomDetail, IService, IUserInfo } from '../../types/room';
const { Paragraph } = Typography;

const UserInfoForm = () => {
  const noData = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
  const [value, setValue] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckboxError, setIsCheckboxError] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
  const { idRoom } = useParams();
  const [servicePrice, setServicePrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [quantityItem, setQuantityItem] = useState<QuantityItem[]>([]);
  const [dataBooking, setDataBooking] = useState<BookingDataLocalResponse>();
  const [data, setData] = useState<IBookingRoom>({
    room: {} as IRoomDetail,
    services: [] as IService[],
    user: {} as IUserInfo,
  });

  useEffect(() => {
    const storedBooking = localStorage.getItem('booking');
    const bookingLocal: BookingDataLocalResponse = storedBooking ? JSON.parse(storedBooking) : {};
    setDataBooking(bookingLocal);
    (async () => {
      if (idRoom) {
        const { room, services, user } = await roomApi.getRoomById(idRoom);
        setData({ room, services, user });
        setIsLoading(true);
      }
    })();
  }, [idRoom]);

  const handleChangeService = (e: React.ChangeEvent<HTMLInputElement>, item: any) => {
    const { value } = e.target;
    const newQuantity = parseInt(value) || 0;

    if (newQuantity === 0) {
      setQuantityItem((prevQuantities) => prevQuantities.filter((q) => q.idService !== item.idService));
    } else {
      const index = quantityItem.findIndex((q) => q.idService === item.idService);
      if (index !== -1) {
        setQuantityItem((prevQuantities) => {
          const newQuantities = [...prevQuantities];
          newQuantities[index] = { ...newQuantities[index], quantity: newQuantity };
          return newQuantities;
        });
      } else {
        setQuantityItem((prevQuantities) => [...prevQuantities, { idService: item.idService, quantity: newQuantity }]);
      }
    }
  };

  useEffect(() => {
    const sumService = quantityItem.reduce((sum, { idService, quantity }) => {
      const service = data.services.find((item) => item.idService === idService);
      return sum + (service ? service.priceOfService * quantity : 0);
    }, 0);
    setServicePrice(sumService);
  }, [quantityItem, data.services]);

  useEffect(() => {
    const savedQuantities = localStorage.getItem('serviceQuantities');
    if (savedQuantities) {
      setQuantityItem(JSON.parse(savedQuantities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('serviceQuantities', JSON.stringify(quantityItem));
  }, [quantityItem]);

  // Change Bank
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  // Select Bank
  const handleMenuClick = (e: MenuInfo) => {
    setSelectedKey(e.key);
  };
  const items: MenuProps['items'] = [
    {
      key: 'NCB',
      label: <img src="/images/ncb.jpg" alt="..." className={styles.logoBank} />,
    },
    {
      key: 'EXIMBANK',
      label: <img src="/images/eximbank.jpg" alt="..." className={styles.logoBank} />,
    },
    {
      key: 'JCB',
      label: <img src="/images/jcb.jpg" alt="..." className={styles.logoBank} />,
    },
    {
      key: 'VISA',
      label: <img src="/images/visa.jpg" alt="..." className={styles.logoBank} />,
    },
    {
      key: 'MasterCard',
      label: <img src="/images/mastercard.jpg" alt="..." className={styles.logoBank} />,
    },
  ];
  const menu = <Menu onClick={handleMenuClick} items={items} className={styles.menuBank} />;

  // Checkbox
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
    setIsCheckboxError(false);
  };

  // Pay
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isChecked) {
      message.error('Please click on the checkbox if you agree to the terms and conditions');
      setIsCheckboxError(true);
      return;
    }
    const users: UsersRequest = {
      username: dataBooking?.fullName || '',
      gender: dataBooking?.gender === 'male' ? true : false,
      email: dataBooking?.email || '',
      phoneNumber: dataBooking?.phone || '',
      identificationCard: dataBooking?.cccd || '',
    };
    const booking: BookingRequest = {
      idRoom: Number(idRoom),
      startDateBooking: dataBooking?.checkInDate || '',
      endDateBooking: dataBooking?.checkOutDate || '',
      numberOfPeoples: Number(dataBooking?.numberOfPeople),
    };

    const params: VnpayRequest = {
      users: users,
      services: quantityItem,
      booking: booking,
      servicePrice: servicePrice,
      roomPrice: dataBooking!.sum,
      amount: dataBooking!.sum + servicePrice,
      bankCode: selectedKey ? selectedKey : 'NCB',
    };

    if (value === 1) {
      const response: VnpayResponse = await VnpayAPI.vnpayPost(params);

      if (response && response.url) {
        const fullUrl: string = response.url ? response.url : '';
        window.location.href = fullUrl;
      }
    }

    if (value === 2) {
      const response: MomoResponse = await VnpayAPI.momoPost(params);
      console.log(response);

      const Url: string = response.payUrl ? response.payUrl : '';
      window.location.href = Url;
    }

    if (value === 3) {
      const response: ZaloResponse = await VnpayAPI.zaloPost(params);
      const Url: string = response.order_url ? response.order_url : '';
      window.location.href = Url;
    }
  };

  return (
    <>
      {isLoading && (
        <Container>
          <StepByStep />
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formLeft}>
              <div className={styles.formLeftTop}>
                <h4>User Info</h4>
                <ul>
                  <div>
                    <li>
                      <b>FullName:</b> {dataBooking?.fullName}
                    </li>
                    <li>
                      <b>Gender:</b> {dataBooking?.gender}
                    </li>
                    <li>
                      <b>Email:</b> {dataBooking?.email}
                    </li>
                  </div>
                  <div>
                    <li>
                      <b>Phone:</b> {dataBooking?.phone}
                    </li>
                    <li>
                      <b>CCCD:</b> {dataBooking?.cccd}
                    </li>
                  </div>
                </ul>
              </div>

              <div className={styles.formLeftBottom}>
                <h4>Select payment option</h4>
                <Paragraph>All transaction are secure and encryted</Paragraph>
                <Radio.Group className={styles.formRadio} onChange={onChange} value={value}>
                  <Radio
                    className={`${styles.radio} ${styles.radioVnp} ${value === 1 ? styles.checked : ''}`}
                    value={1}
                    checked
                  >
                    <Dropdown overlay={menu} trigger={['hover']} placement="bottom">
                      <span className={styles.dropdownText}>VNPAY</span>
                    </Dropdown>
                  </Radio>
                  <Radio className={`${styles.radio} ${value === 2 ? styles.checked : ''}`} value={2}>
                    MOMO
                  </Radio>
                  <Radio className={`${styles.radio} ${value === 3 ? styles.checked : ''}`} value={3}>
                    ZALOPAY
                  </Radio>

                  <Checkbox
                    className={`${styles.checkbox} ${isCheckboxError ? styles.errorCheckbox : ''}`}
                    onChange={handleCheckboxChange}
                  >
                    By ckicking this, I argree to trave Team & Condition and privacy Policy
                  </Checkbox>
                  <button className={styles.btnPay} type="submit">
                    Pay | {(dataBooking!.sum + servicePrice).toLocaleString('de-DE')} VND
                  </button>
                </Radio.Group>
              </div>
            </div>
            <div className={styles.formRight}>
              <h4>Your room</h4>
              <div className={styles.formRightRom}>
                <Carousel autoplay arrows className={styles.imageroom}>
                  {data.room &&
                    data.room.images.length > 0 &&
                    data.room.images.map((image) => (
                      <img key={image} className={styles.imageroom} alt="example" src={image ? image : noData} />
                    ))}
                </Carousel>
                <div>
                  <h4>{data.room?.nameHotel}</h4>
                  <p>
                    <b>Address:</b> {data.room?.address}
                  </p>
                  <p>
                    <b>Number room:</b> {data.room?.roomNumber}
                  </p>
                  <p>
                    <b>Description:</b> {data.room?.descriptionOfRoom}
                  </p>
                  <p>
                    <b>Check in: </b> {dataBooking?.checkInDate} (GMT+7)
                  </p>
                  <p>
                    <b>Check out: </b> {dataBooking?.checkOutDate} (GMT+7)
                  </p>
                  <p style={{ textAlign: 'right', fontSize: '20px' }}>
                    <b>{dataBooking?.sum.toLocaleString('de-DE')}</b> VND
                  </p>
                </div>
              </div>
              <div className={styles.formRightService}>
                <h4>Service</h4>
                <Row style={{ marginTop: '20px' }}>
                  {' '}
                  <Col xl={24} md={24} sm={24} xs={24}>
                    <Form.Item name="services">
                      <div>
                        <div className={styles.formService}>
                          {data.services.map((item) => {
                            const quantityItemFind = quantityItem.find((q) => q.idService === item.idService);
                            const quantity = quantityItemFind ? quantityItemFind.quantity : 0;

                            return (
                              <div className={styles.listService} key={item.idService}>
                                <p className={styles.checkboxService}>
                                  <b>{item.nameService}</b>
                                </p>
                                <input
                                  type="number"
                                  defaultValue={0}
                                  min={0}
                                  value={quantity}
                                  onChange={(e) => handleChangeService(e, item)}
                                  className={styles.quantityService}
                                />
                                <p className={styles.priceOfService}>
                                  <b>{(item.priceOfService * quantity).toLocaleString('de-DE')}</b> VND
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <div className={styles.formRightOrder}>
                <h4>Order summary</h4>
                <div>
                  <p>
                    <b>Room</b>
                  </p>
                  <p>{dataBooking?.sum.toLocaleString('de-DE')} VND</p>
                </div>
                <div>
                  <p>
                    <b>Service</b>
                  </p>
                  <p>{servicePrice.toLocaleString('de-DE')} VND</p>
                </div>
                <div>
                  <p>
                    <b>Total</b>
                  </p>
                  <p className={styles.totalPrice}>{(dataBooking!.sum + servicePrice).toLocaleString('de-DE')} VND</p>
                </div>
              </div>
            </div>
          </form>
        </Container>
      )}
    </>
  );
};

export default UserInfoForm;
