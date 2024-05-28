import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { Menu, Collapse } from 'antd';
import './NavSection.css';

// ----------------------------------------------------------------------

const { SubMenu } = Menu;
const { Panel } = Collapse;

// Type definitions for NavItem props
interface NavItemProps {
  item: {
    title: string;
    path: string;
    icon?: JSX.Element;
    info?: JSX.Element;
    children?: NavItemProps['item'][];
  };
  active: (path: string) => boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, active }) => {
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootClass = isActiveRoot ? 'active-root' : 'active-root';
  const activeSubClass = 'active-sub';

  if (children) {
    return (
      <div>
        <div className={`list-item ${activeRootClass}`} onClick={handleOpen}>
          <span className="list-item-icon">{icon && icon}</span>
          <span className="menu-item-text">{title}</span>
          {info && info}
          <Icon icon={open ? arrowIosDownwardFill : arrowIosForwardFill} className="icon-box" />
        </div>
        <Collapse activeKey={open ? '1' : undefined}>
          <Panel key="1" showArrow={false} header="">
            <Menu
              mode="vertical"
              items={children.map((child) => ({
                key: child.title,
                icon: <span className="list-item-icon" />,
                label: (
                  <RouterLink to={child.path} className={active(child.path) ? activeSubClass : ''}>
                    <span className="menu-item-text">{child.title}</span>
                  </RouterLink>
                ),
              }))}
            />
          </Panel>
        </Collapse>
      </div>
    );
  }

  return (
    <div className="list-item">
      <RouterLink to={path} className={activeRootClass}>
        <span className="list-item-icon">{icon && icon}</span>
        <span className="menu-item-text">{title}</span>
        {info && info}
      </RouterLink>
    </div>
  );
};

interface NavSectionProps {
  navConfig: NavItemProps['item'][];
}

const NavSection: React.FC<NavSectionProps> = ({ navConfig, ...other }) => {
  const { pathname } = useLocation();
  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <div className="nav-section" {...other}>
      <Menu
        mode="vertical"
        items={navConfig.map((item) => ({
          key: item.title,
          label: <NavItem item={item} active={match} />,
          children: item.children?.map((child) => ({
            key: child.title,
            label: <NavItem item={child} active={match} />,
          })),
        }))}
      />
    </div>
  );
};

export default NavSection;
