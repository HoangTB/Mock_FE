import { Nav } from 'react-bootstrap';
import React from 'react';
function Header() {
  return (
    <div className="header p-3 mb-1 bg-dark-subtle">
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item className="text-danger fs-5 fw-bold">Header Page</Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
