import './App.css';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes';
import React from 'react';

function App() {
  return <RouterProvider router={router} fallbackElement={<p>ok nLoading on test....</p>} />;
}

export default App;
