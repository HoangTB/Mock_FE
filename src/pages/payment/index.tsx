import { Checkbox, Radio, RadioChangeEvent, Typography } from 'antd';
import React, { useState } from 'react';
import Container from '../../components/container';
import StepByStep from '../../components/step-by-step';
import styles from './payments.module.css';
const { Paragraph } = Typography;

const UserInfoForm = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Container>
        <StepByStep />
        <form className={styles.form}>
          <div className={styles.formLeft}>
            <div className={styles.formLeftTop}>
              <h4>User Info</h4>
              <ul>
                <div>
                  <li>
                    <b>FullName:</b> Bui Van Sy
                  </li>
                  <li>
                    <b>Gender:</b> Male
                  </li>
                  <li>
                    <b>Email:</b> tbh95@gmail.com
                  </li>
                </div>
                <div>
                  <li>
                    <b>Phone:</b> 090547855
                  </li>
                  <li>
                    <b>CCCD:</b> 0242201452
                  </li>
                </div>
              </ul>
            </div>

            <div className={styles.formLeftBottom}>
              <h4>Select payment option</h4>
              <Paragraph>All transaction are secure and encryted</Paragraph>
              <Radio.Group className={styles.formRadio} onChange={onChange} value={value}>
                <Radio className={`${styles.radio} ${value === 1 ? styles.checked : ''}`} value={1}>
                  Paypal
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
                <button className={styles.btnPay} type="submit">
                  Pay | 40$
                </button>
                <Checkbox className={styles.checkbox}>
                  By ckicking this, I argree to trave Team & Condition and privacy Policy
                </Checkbox>
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
                <p>$ 30</p>
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
                      <input type="number" value={3} />
                    </td>
                    <td>30 $</td>
                  </tr>
                  <tr>
                    <td>Name A</td>
                    <td>
                      <input type="number" value={1} />
                    </td>
                    <td>10 $</td>
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
                <p>20$</p>
              </div>
              <div>
                <p>
                  <b>Service</b>
                </p>
                <p>10$</p>
              </div>
              <div>
                <p>
                  <b>Total</b>
                </p>
                <p className={styles.totalPrice}>40$</p>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UserInfoForm;
