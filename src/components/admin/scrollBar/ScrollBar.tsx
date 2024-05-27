import React, { ReactNode } from 'react';
import SimpleBarReact from 'simplebar-react';
// material
import { styled } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
  ...(theme.typography.body2 as object),
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

// ----------------------------------------------------------------------

// Define props for the Scrollbar component
interface ScrollbarProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children, sx, ...other }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle sx={{ ...sx }}>
      <SimpleBarStyle clickOnTrack={false} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
};

export default Scrollbar;
