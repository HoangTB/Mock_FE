import { Router } from '@remix-run/router';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PageNotFound from '../components/errors/PageNotFound';
import DefaultLayout from '../layouts/DefaultLayout';
import SidebarLayout from '../layouts/SidebarLayout';
import RoomList from '../pages/room-list/RoomList';
import RegisterPage from '../pages/Register';
import EditProfile from '../pages/edit-profile/EditProfile';
import Payment from '../pages/payment/Payment';
import BookedHistory from '../pages/booked-history/BookedHistory';
import Completed from '../pages/payment-completed/Completed';
import VoteHistory from '../pages/vote-history/VoteHistory';
import ServiceManagement from '../pages/admin/ServiceManagement/ServiceManagement';
import BranchManagement from '../pages/admin/BranchManagement/BranchManagement';
import RoomManagement from '../pages/admin/RoomManagement/RoomManagement';
import BookingManagement from '../pages/admin/BookingManagement/BookingManagement';
import PaymentRevenueManagement from '../pages/admin/PaymentRevenueManagement/PaymentRevenueManagement';
import { AdminLayout } from '../layouts/adminLayout/AdminLayout';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        path: '/rooms/:id',
        Component: RoomList,
      },
      {
        path: '/register',
        Component: RegisterPage,
      },
      {
        path: '/',
        Component: SidebarLayout,
        children: [
          {
            path: '/edit-profile',
            Component: EditProfile,
          },
          {
            path: '/booked-history',
            Component: BookedHistory,
          },
          { path: '/voted-history', Component: VoteHistory },
        ],
      },
      {
        path: '/booking/:id',
        Component: Payment,
      },
      {
        path: '/booking/completed',
        Component: Completed,
      },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      {
        path: 'branch',
        Component: BranchManagement,
      },
      {
        path: 'room',
        Component: RoomManagement,
      },
      {
        path: 'service',
        Component: ServiceManagement,
      },
      {
        path: 'booking',
        Component: BookingManagement,
      },
      {
        path: 'payment',
        Component: PaymentRevenueManagement,
      },
    ],
  },
  {
    path: '*',
    Component: PageNotFound,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
