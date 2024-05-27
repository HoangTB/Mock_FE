import React from 'react';
import { Paper, Typography, PaperProps } from '@mui/material';

interface SearchNotFoundProps extends PaperProps {
  searchQuery?: string;
}

const SearchNotFound: React.FC<SearchNotFoundProps> = ({ searchQuery = '', ...other }) => {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
      </Typography>
    </Paper>
  );
};

export default SearchNotFound;
