import './sideBarContent.css';

const sideBarContent = [
  {
    title: 'Branch',
    path: '/admin/branch',
    icon: <img className="sidebar-icon" src="/images/branch_management.svg" alt="Branch Management" />,
  },
  {
    title: 'Room',
    path: '/admin/room',
    icon: <img className="sidebar-icon" src="/images/room_management.svg" alt="Room Management" />,
  },
  {
    title: 'Service',
    path: '/admin/service',
    icon: <img className="sidebar-icon" src="/images/service_management.svg" alt="Service Management" />,
  },
  {
    title: 'Booking',
    path: '/admin/booking',
    icon: <img className="sidebar-icon" src="/images/booking_management.svg" alt="Booking Management" />,
  },
  {
    title: 'Payment - Revenue',
    path: '/admin/payment',
    icon: <img className="sidebar-icon" src="/images/payment_management.svg" alt="Payment and Revenue Management" />,
  },
];

export default sideBarContent;
