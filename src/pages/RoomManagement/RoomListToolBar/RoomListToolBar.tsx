import React from 'react';
import { Input } from 'antd';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import './RoomListToolbar.css';

const { Search } = Input;

export default function RoomListToolbar() {
  return (
    <div className="rootStyle">
      <Search placeholder="Search Room..." enterButton={<Icon icon={searchFill} />} className="searchStyle" />
    </div>
  );
}
