import React, { useState, useEffect } from 'react';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Table, Button, Input, Typography, Card, Row, Col } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import RoomMoreMenu from './RoomMoreMenu/RoomMoreMenu';
import { CreateRoomDialog } from './Dialog/CreateDialog/CreateDialog';
import { DashBoardLayout } from '../../layouts/AdminLayout/DashBoardLayout';
import './RoomManagement.css';

const { Content } = Layout;
const { Title } = Typography;

const TABLE_HEAD = [
  { id: 'MaxNumberPeopleOfRoom', label: 'Max number people', align: 'left' },
  { id: 'NumberOfBeds', label: 'Number of beds', align: 'left' },
  { id: 'PriceOfRoom', label: 'Price', align: 'left' },
  { id: 'RoomNumber', label: 'Room number', align: 'left' },
  { id: 'StatusOfRoom', label: 'Status', align: 'left' },
  { id: 'Description', label: 'Description', align: 'left' },
  { id: 'Action', label: 'Action', align: 'left' },
];

interface RoomData {
  MaxNumberPeopleOfRoom: number;
  NumberOfBeds: number;
  PriceOfRoom: string;
  RoomNumber: string;
  StatusOfRoom: string;
  Description: string;
  key: string; // Ensure each RoomData has a unique key
}

const fakeData: RoomData[] = [
  {
    MaxNumberPeopleOfRoom: 2,
    NumberOfBeds: 1,
    PriceOfRoom: '$100',
    RoomNumber: '101',
    StatusOfRoom: 'Available',
    Description: 'A cozy room for two.',
    key: '101',
  },
  {
    MaxNumberPeopleOfRoom: 4,
    NumberOfBeds: 2,
    PriceOfRoom: '$200',
    RoomNumber: '102',
    StatusOfRoom: 'Occupied',
    Description: 'A spacious room for a family.',
    key: '102',
  },
  {
    MaxNumberPeopleOfRoom: 1,
    NumberOfBeds: 1,
    PriceOfRoom: '$80',
    RoomNumber: '103',
    StatusOfRoom: 'Available',
    Description: 'A single room for solo travelers.',
    key: '103',
  },
  // Add more fake data as needed
];

const isRoomDataKey = (key: string): key is keyof RoomData => {
  return ['MaxNumberPeopleOfRoom', 'NumberOfBeds', 'PriceOfRoom', 'RoomNumber', 'StatusOfRoom', 'Description'].includes(
    key,
  );
};

const RoomManagement: React.FC<any> = (props) => {
  const [data, setData] = useState<RoomData[]>([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [reRender, setRerender] = useState(false);
  const [order, setOrder] = useState<'ascend' | 'descend'>('ascend');
  const [orderBy, setOrderBy] = useState<keyof RoomData | ''>('');
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    // Load fake data initially
    setData(fakeData);
  }, []);

  const searchFilterFunction = (text: string) => {
    const filteredData = fakeData.filter((room) =>
      Object.values(room).some((value) => String(value).toLowerCase().includes(text.toLowerCase())),
    );
    setData(filteredData);
  };

  const handleRequestSort = (property: keyof RoomData) => {
    const isAscend = orderBy === property && order === 'ascend';
    setOrder(isAscend ? 'descend' : 'ascend');
    setOrderBy(property);
    const sortedData = [...data].sort((a, b) => {
      if (isRoomDataKey(property)) {
        const aValue = a[property];
        const bValue = b[property];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return isAscend ? aValue - bValue : bValue - aValue;
        } else {
          return isAscend ? String(aValue).localeCompare(String(bValue)) : String(bValue).localeCompare(String(aValue));
        }
      }
      return 0;
    });
    setData(sortedData);
  };

  // const handleOpenAddDialog = () => {
  //   setOpenAdd(true);
  // };

  const handleCloseAddDialog = () => {
    setOpenAdd(false);
    props.onClose();
  };

  const columns = TABLE_HEAD.map((col) => ({
    title: col.label,
    dataIndex: col.id,
    key: col.id,
    align: col.align as 'left' | 'right' | 'center' | undefined,
    sorter: true,
    sortOrder: orderBy === col.id ? (order as SortOrder) : undefined,
    render:
      col.id === 'Action'
        ? (_: any, record: RoomData) => (
            <RoomMoreMenu
              key={record.RoomNumber}
              onClose={() => setRerender(!reRender)}
              onDeleteSuccess={() => setRerender(!reRender)}
              onUpdateSuccess={() => setRerender(!reRender)}
            />
          )
        : undefined,
  }));

  return (
    <DashBoardLayout>
      <CreateRoomDialog
        open={openAdd}
        onCloseEdit={handleCloseAddDialog}
        onUpdateSuccess={() => {
          setRerender(!reRender);
        }}
      />
      <Content>
        <div className="site-layout-content">
          <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
            <Col>
              <Title level={2} className="title">
                Room management
              </Title>
            </Col>
            {/* <Col>
              <Button type="primary" icon={<PlusOutlined />} onClick={handleOpenAddDialog} className="add-button">
                New room
              </Button>
            </Col> */}
          </Row>
          <Card>
            <Input
              placeholder="Search Room..."
              onChange={(e) => searchFilterFunction(e.target.value)}
              suffix={<SearchOutlined />}
              className="search-input"
            />
            <Table
              dataSource={data}
              columns={columns}
              rowKey="RoomNumber" // Ensure each row has a unique key
              rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
              pagination={false}
              onChange={(pagination, filters, sorter) => {
                // if (sorter.order) {
                //   handleRequestSort(sorter.columnKey as keyof RoomData);
                // }
              }}
            />
          </Card>
        </div>
      </Content>
    </DashBoardLayout>
  );
};

export default RoomManagement;
