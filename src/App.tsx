import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import React from 'react';
import '@fontsource/montserrat'; // Defaults to weight 400
import '@fontsource/montserrat/400.css'; // Specify weight
import '@fontsource/montserrat/400-italic.css'; // Specify weight and style

function App() {
  return <RouterProvider router={router} fallbackElement={<p>ok nLoading on test....</p>} />;
}

export default App;
