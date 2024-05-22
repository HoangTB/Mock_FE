import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';
import PageNotFound from '../components/errors/PageNotFound';
import DefaultLayout from '../layouts/DefaultLayout';
import HelloPage from '../pages/HelloPage/HelloPage';
import ListPage from '../pages/HelloPage/ListPage';
import LoginPage from '../pages/LoginPage';

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
        Component: HelloPage,
      },
      {
        path: '/list/',
        Component: ListPage,
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
