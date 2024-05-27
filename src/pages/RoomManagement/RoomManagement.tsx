import React, { useState } from 'react';
import { DashBoardLayout } from '../../layouts/DashBoardLayout';
import { styled } from '@mui/material/styles';
import plusFill from '@iconify/icons-eva/plus-fill';
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchNotFound from '../SearchNotFound';
import RoomListHead from './RoomListHead';
import RoomMoreMenu from './RoomMoreMenu';
import { Icon } from '@iconify/react';
import { CreateRoomDialog } from './dialog/CreateDialog';
import SearchIcon from '@mui/icons-material/Search';

const TABLE_HEAD = [
  { id: 'MaxNumberPeopleOfRoom', label: 'Max number people', alignRight: false },
  { id: 'NumberOfBeds', label: 'Number of beds', alignRight: false },
  { id: 'PriceOfRoom', label: 'Price', alignRight: false },
  { id: 'RoomNumber', label: 'Room number', alignRight: false },
  { id: 'StatusOfRoom', label: 'Status', alignRight: false },
  { id: 'Description', label: 'Description', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: 'rgb(255, 247, 205)',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: 'var(--primary-color)',
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

export default function RoomManagement(props: any) {
  const [data, setData] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [reRender, setRerender] = useState(false);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [selected, setSelected] = useState<string[]>([]);

  const searchFilterFunction = (text: string) => {};

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n: any) => n.NameDisease);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleOpenAddDialog = () => {
    setOpenAdd(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAdd(false);
    props.onClose();
  };

  return (
    <DashBoardLayout>
      <CreateRoomDialog
        open={openAdd}
        onCloseEdit={handleCloseAddDialog}
        onUpdateSuccess={() => {
          setRerender(!reRender);
        }}
      />
      <Container style={{ maxHeight: 550 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Room management
          </Typography>
          <Button
            sx={{ backgroundColor: '#00AB55' }}
            variant="contained"
            startIcon={<Icon icon={plusFill} style={{ color: 'black' }} />}
            onClick={handleOpenAddDialog}
          >
            New room
          </Button>
        </Stack>
        <Card>
          {/* <TextField
            label="Search Disease...."
            style={{ margin: 10, right: 420 }}
            onChange={(e) => searchFilterFunction(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          /> */}
          <TableContainer sx={{ minWidth: 800, maxHeight: 400 }}>
            <Table>
              <RoomListHead
                order={order}
                orderBy={orderBy}
                rowCount={data.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={TABLE_HEAD}
                StyledTableCell={StyledTableCell}
              />
              <TableBody>
                <StyledTableRow hover>
                  <TableCell align="left" width={100}>
                    <RoomMoreMenu
                      onClose={() => setRerender(!reRender)}
                      onDeleteSuccess={() => setRerender(!reRender)}
                      onUpdateSuccess={() => setRerender(!reRender)}
                    />
                  </TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </DashBoardLayout>
  );
}
