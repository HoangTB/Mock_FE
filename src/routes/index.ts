import { Router } from '@remix-run/router';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PageNotFound from '../components/errors/PageNotFound';
import DefaultLayout from '../layouts/DefaultLayout';
import SidebarLayout from '../layouts/SidebarLayout';
import RoomList from '../pages/room-list/RoomList';
import RegisterPage from '../pages/Register';
import EditProfile from '../pages/edit-profile/EditProfile';
import Payment from '../pages/payment/Payment';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';
import BookedHistory from '../pages/booked-history/BookedHistory';
import Completed from '../pages/payment-completed/Completed';
import BookingRoom from '../pages/Booking/indexBooking';

import VoteHistory from '../pages/vote-history/VoteHistory';
import ServiceManagement from '../pages/admin/ServiceManagement/ServiceManagement';
import BranchManagement from '../pages/admin/BranchManagement/BranchManagement';
import RoomManagement from '../pages/admin/RoomManagement/RoomManagement';
import BookingManagement from '../pages/admin/BookingManagement/BookingManagement';
import PaymentRevenueManagement from '../pages/admin/PaymentRevenueManagement/PaymentRevenueManagement';
import { AdminLayout } from '../layouts/adminLayout/AdminLayout';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/about-us/AboutUs';
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/home',
        Component: HomePage,
      },
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
        path: '/login',
        Component: LoginPage,
      },
      {
        path: '/forgot',
        Component: ForgotPassword,
      },
      {
        path: '/reset',
        Component: ResetPassword,
      },
      {
        path: '/booking/completed',
        Component: Completed,
      },
      {
        path: '/booking',
        Component: BookingRoom,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: 'about-us',
        Component: AboutUs,
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
