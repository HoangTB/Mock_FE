import React from 'react';
import { Table, Typography } from 'antd';
import { ColumnType } from 'antd/es/table';
import './RoomListHead.css';

interface HeadCell {
  id: string;
  label: string;
  alignRight?: boolean;
}

interface RoomListHeadProps {
  order: 'ascend' | 'descend' | null;
  orderBy: string;
  headLabel: HeadCell[];
  onRequestSort: (property: string) => void;
}

const RoomListHead: React.FC<RoomListHeadProps> = ({ order, orderBy, headLabel, onRequestSort }) => {
  const handleSort = (property: string) => {
    onRequestSort(property);
  };

  const columns: ColumnType<any>[] = headLabel.map((headCell) => ({
    title: (
      <div className={`room-list-head ${orderBy === headCell.id ? 'active' : ''}`}>
        <Typography.Text onClick={() => handleSort(headCell.id)}>{headCell.label}</Typography.Text>
      </div>
    ),
    dataIndex: headCell.id,
    key: headCell.id,
    align: headCell.alignRight ? 'right' : ('left' as 'right' | 'left'),
    sorter: true,
    sortOrder: orderBy === headCell.id ? order : undefined,
  }));

  return <Table columns={columns} dataSource={[]} pagination={false} className="room-list-table" />;
};

export default RoomListHead;
