import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'antd';
import { DropdownProps } from 'antd';
import { styled } from 'styled-components';
import './MenuPopover.css';

interface MenuPopoverProps extends Omit<DropdownProps, 'overlay'> {
  children: ReactNode;
  sx?: object;
}

MenuPopover.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function MenuPopover({ children, sx, ...other }: MenuPopoverProps) {
  const menu = (
    <Menu>
      {React.Children.map(children, (child, index) => (
        <Menu.Item key={index}>{child}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} {...other} arrow>
      <span className="menu-popover-trigger">{children}</span>
    </Dropdown>
  );
}
