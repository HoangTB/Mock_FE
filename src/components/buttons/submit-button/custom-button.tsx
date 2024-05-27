// custom button from antd with props

import React from 'react';
import { Button } from 'antd';
import style from './style.module.css';

interface CustomButtonProps {
  type: 'primary' | 'default' | 'link' | 'text' | undefined;
  htmlType: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, htmlType, children }) => {
  return (
    <Button type={type} htmlType={htmlType} className={style[`custom-button`]}>
      {children}
    </Button>
  );
};

export default CustomButton;
