import { Router } from '@remix-run/router';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PageNotFound from '../components/errors/PageNotFound';
import DefaultLayout from '../layouts/DefaultLayout';
import SidebarLayout from '../layouts/SidebarLayout';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/Home';
import RoomList from '../pages/room-list/RoomList';
import RegisterPage from '../pages/Register';
import EditProfile from '../pages/edit-profile/EditProfile';
import Payment from '../pages/payment/Payment';
import BookedHistory from '../pages/booked-history/BookedHistory';
import Completed from '../pages/payment-completed/Completed';
import VoteHistory from '../pages/vote-history/VoteHistory';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/about-us/AboutUs';

const routes: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
  },

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
        path: '/booking/completed',
        Component: Completed,
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
    path: '*',
    Component: PageNotFound,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
