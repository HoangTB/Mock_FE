import React, { ReactNode } from 'react';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Scrollbar.css';

// ----------------------------------------------------------------------

// Define props for the Scrollbar component
interface ScrollbarProps {
  children: ReactNode;
  sx?: React.CSSProperties;
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children, sx, ...other }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div style={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </div>
    );
  }

  return (
    <SimpleBarReact style={{ maxHeight: '100%', ...sx }} {...other}>
      {children}
    </SimpleBarReact>
  );
};

export default Scrollbar;
