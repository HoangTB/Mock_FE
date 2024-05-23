import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import React from 'react';

function App() {
  return <RouterProvider router={router} fallbackElement={<p>ok nLoading on test....</p>} />;
}

export default App;
