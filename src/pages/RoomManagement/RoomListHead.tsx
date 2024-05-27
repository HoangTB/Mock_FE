import React from 'react';
import { TableRow, TableHead, TableSortLabel } from '@mui/material';
import { TableCellProps } from '@mui/material/TableCell';

interface HeadCell {
  id: string;
  label: string;
  alignRight?: boolean;
}

interface RoomListHeadProps {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headLabel: HeadCell[];
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  StyledTableCell: React.FC<TableCellProps>;
}

const RoomListHead: React.FC<RoomListHeadProps> = ({
  order,
  orderBy,
  headLabel,
  onRequestSort,
  onSelectAllClick,
  StyledTableCell,
}) => {
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: 'rgb(208, 242, 255)' }}>
        {headLabel.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default RoomListHead;
