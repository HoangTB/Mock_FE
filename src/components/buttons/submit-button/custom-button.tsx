// custom button from antd with props

import React from 'react';
import { Button } from 'antd';
import style from './style.module.css';

interface CustomButtonProps {
  loading: boolean;
  type: 'primary' | 'default' | 'link' | 'text' | undefined;
  htmlType: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, htmlType, loading, children }) => {
  return (
    <Button type={type} htmlType={htmlType} className={style[`custom-button`]} loading={loading}>
      {children}
    </Button>
  );
};

export default CustomButton;
