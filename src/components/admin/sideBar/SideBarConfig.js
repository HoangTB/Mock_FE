import '../sideBar/SideBarConfig.css';

const sideBarConfig = [
  {
    title: 'Branch',
    path: '/admin/branchManagement',
    icon: <img className="sidebar-icon" src="/images/branch_management.svg" alt="Branch Management" />,
  },
  {
    title: 'Room',
    path: '/admin/roomManagement',
    icon: <img className="sidebar-icon" src="/images/room_management.svg" alt="Room Management" />,
  },
  {
    title: 'Service',
    path: '/admin/serviceManagement',
    icon: <img className="sidebar-icon" src="/images/service_management.svg" alt="Service Management" />,
  },
  {
    title: 'Booking',
    path: '/admin/bookingManagement',
    icon: <img className="sidebar-icon" src="/images/booking_management.svg" alt="Booking Management" />,
  },
  {
    title: 'Payment - Revenue',
    path: '/admin/paymentAndRevenueManagement',
    icon: <img className="sidebar-icon" src="/images/payment_management.svg" alt="Payment and Revenue Management" />,
  },
];

export default sideBarConfig;
