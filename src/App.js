import React from 'react';
import { routes } from './Routes/Routes/Routes';
const { RouterProvider } = require("react-router-dom");

function App() {
  return (
    <div>
      <RouterProvider router = {routes} />
    </div>
  )
}

export default App
