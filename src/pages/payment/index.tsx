import { Checkbox, Menu, MenuProps, Radio, RadioChangeEvent, Typography, message } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import styles from './payments.module.css';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { VnpayAPI } from '../../api/payment';
import { VnpayRequest } from '../../api/payment/request/vnpay.request';
import { VnpayResponse } from '../../api/payment/response/vnpay.response';
import Dropdown from 'antd/es/dropdown/dropdown';
const { Paragraph } = Typography;

const UserInfoForm = () => {
  const [value, setValue] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckboxError, setIsCheckboxError] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');

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

  const users = {
    fullName: 'Truong Bao Hoang',
    gender: 'Male',
    email: 'tbhoang95@gmail.com',
    phone: '0905485884',
    cccd: '123456',
  };

  const booking = {
    roomPrice: 400000,
    servicePrice: 100000,
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
    setIsCheckboxError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isChecked) {
      message.error('Please click on the checkbox if you agree to the terms and conditions');
      setIsCheckboxError(true);
      return;
    }
    // Handle the form submission
    const params: VnpayRequest = {
      users: users,
      booking: booking,
      amount: booking.roomPrice + booking.servicePrice,
      bankCode: selectedKey ? selectedKey : "NCB",
      locate: 'vn',
    };
    if (value === 1) {
      const response: VnpayResponse = await VnpayAPI.vnpayPost(params);
      if (response && response.url) {
        const fullUrl: string = response.url;
        window.location.href = fullUrl;
      }
    }
  };

  const menu = <Menu onClick={handleMenuClick} items={items} className={styles.menuBank} />;
  return (
    <>
      <Container>
        <StepByStep />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formLeft}>
            <div className={styles.formLeftTop}>
              <h4>User Info</h4>
              <ul>
                <div>
                  <li>
                    <b>FullName:</b> {users.fullName}
                  </li>
                  <li>
                    <b>Gender:</b> {users.gender}
                  </li>
                  <li>
                    <b>Email:</b> {users.email}
                  </li>
                </div>
                <div>
                  <li>
                    <b>Phone:</b> {users.phone}
                  </li>
                  <li>
                    <b>CCCD:</b> {users.cccd}
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
                  Zalo pay
                </Radio>
                <Radio className={`${styles.radio} ${value === 3 ? styles.checked : ''}`} value={3}>
                  Momo
                </Radio>
                <Radio className={`${styles.radio} ${value === 4 ? styles.checked : ''}`} value={4}>
                  Payment later
                </Radio>
                <Checkbox
                  className={`${styles.checkbox} ${isCheckboxError ? styles.errorCheckbox : ''}`}
                  onChange={handleCheckboxChange}
                >
                  By ckicking this, I argree to trave Team & Condition and privacy Policy
                </Checkbox>
                <button className={styles.btnPay} type="submit">
                  Pay | {booking.roomPrice + booking.servicePrice} VND
                </button>
              </Radio.Group>
            </div>
          </div>
          <div className={styles.formRight}>
            <h4>Your room</h4>
            <div className={styles.formRightRom}>
              <img src="/images/sapm.jpg" alt="..." />
              <div>
                <h4>Room vip</h4>
                <p>Guong tran</p>
                <p>Ghe tinh yeu</p>
                <p>Cua so</p>
                <p>{booking.roomPrice} VND</p>
              </div>
            </div>
            <div className={styles.formRightService}>
              <h4>Service</h4>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name E</td>
                    <td>
                      <td>1</td>
                    </td>
                    <td>{(booking.servicePrice).toLocaleString('de-DE')} VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.formRightOrder}>
              <h4>Order summary</h4>
              <div>
                <p>
                  <b>Room</b>
                </p>
                <p>{(booking.roomPrice).toLocaleString('de-DE')} VND</p>
              </div>
              <div>
                <p>
                  <b>Service</b>
                </p>
                <p>{(booking.servicePrice).toLocaleString('de-DE')} VND</p>
              </div>
              <div>
                <p>
                  <b>Total</b>
                </p>
                <p className={styles.totalPrice}>{(booking.roomPrice + booking.servicePrice).toLocaleString('de-DE')} VND</p>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UserInfoForm;
