import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'antd';
import { DropdownProps } from 'antd';
import { styled } from 'styled-components';
import './MenuPopover.css';

const ArrowStyle = styled.span`
  @media (min-width: 600px) {
    top: -7px;
    z-index: 1;
    width: 12px;
    right: 20px;
    height: 12px;
    content: '';
    position: absolute;
    border-radius: 0 0 4px 0;
    transform: rotate(-135deg);
    background: white;
    border-right: solid 1px rgba(0, 0, 0, 0.12);
    border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  }
`;

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
