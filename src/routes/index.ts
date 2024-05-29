import { Router } from '@remix-run/router';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PageNotFound from '../components/errors';
import DefaultLayout from '../layouts/default-layout';
import SidebarLayout from '../layouts/sidebar-layout';
import RoomList from '../pages/room-list/room-list';
import RegisterPage from '../pages/register';
import EditProfile from '../pages/edit-profile';
import Payment from '../pages/payment';
import ForgotPassword from '../pages/login/forgot-password';
import ResetPassword from '../pages/login/reset-password';
import BookedHistory from '../pages/booked-history';
import BookingRoom from '../pages/booking';

import VoteHistory from '../pages/vote-history';
import ServiceManagement from '../pages/admin/service-management';
import BranchManagement from '../pages/admin/branch-management';
import RoomManagement from '../pages/admin/room-management';
import BookingManagement from '../pages/admin/booking-management';
import PaymentRevenueManagement from '../pages/admin/payment-revenue-management';
import { AdminLayout } from '../layouts/adminLayout/admin-layout';
import Contact from '../pages/contact';
import AboutUs from '../pages/about-us';
import LoginPage from '../pages/login/login-page';
import HomePage from '../pages/home';
import Completed from '../pages/payment-completed';

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
