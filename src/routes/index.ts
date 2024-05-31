import { Router } from '@remix-run/router';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout';
import SidebarLayout from '../layouts/sidebar-layout';
import RoomList from '../pages/room-list/room-list';
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
import Completed from '../pages/payment-completed';
import HomePage from '../pages/home';
import RegisterPage from '../pages/register';
import withAdminAuth from '../utils/hoc/auth-admin';
import WithUserAuth from '../utils/hoc/auth-user';
import PageNotFound from '../components/errors';
import WithLoginAuth from '../utils/hoc/auth-login';

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
            Component: WithUserAuth(EditProfile),
          },
          {
            path: '/booked-history',
            Component: WithUserAuth(BookedHistory),
          },
          { path: '/voted-history', Component: WithUserAuth(VoteHistory) },
        ],
      },
      {
        path: '/booking/:id',
        Component: Payment,
      },
      {
        path: '/login',
        Component: WithLoginAuth(LoginPage),
      },
      {
        path: '/forgot',
        Component: WithLoginAuth(ForgotPassword),
      },
      {
        path: '/reset/:id',
        Component: WithLoginAuth(ResetPassword),
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
    Component: withAdminAuth(AdminLayout),
    children: [
      {
        path: 'branch',
        Component: withAdminAuth(BranchManagement),
      },
      {
        path: 'room',
        Component: withAdminAuth(RoomManagement),
      },
      {
        path: 'service',
        Component: withAdminAuth(ServiceManagement),
      },
      {
        path: 'booking',
        Component: withAdminAuth(BookingManagement),
      },
      {
        path: 'payment',
        Component: withAdminAuth(PaymentRevenueManagement),
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
