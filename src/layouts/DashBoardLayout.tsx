import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DashboardNavbar from '../components/admin/dashBoardNavbar/DashBoardNavbar';
import NavSection from '../components/admin/navSection/NavSection';
import sidebarConfig from '../components/admin/sideBar/SideBarConfig';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  height: '90vh',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  maxHeight: '100%',
  paddingTop: '30px',
  borderLeft: `1px solid ${theme.palette.divider}`,
}));

const renderContent = (
  <RootStyle>
    <Box sx={{ py: 3, ml: 3 }}>
      <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="img" src="/images/logo.png" sx={{ width: 200, height: 200, zIndex: 99, align: 'center' }} />
      </Box>
    </Box>
    <NavSection navConfig={sidebarConfig} />
  </RootStyle>
);

interface DashBoardLayoutProps {
  children?: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({ children }) => {
  return (
    <RootStyle>
      <DashboardNavbar />
      <Box
        sx={{
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {renderContent}
        <MainStyle>{children}</MainStyle>
      </Box>
    </RootStyle>
  );
};

export { DashBoardLayout };
