import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import AuthContext from './contextAPI/AuthContext';
import { router } from './Routes/Routes';






ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto px-3'>
    <React.StrictMode>
      <AuthContext>
      <RouterProvider router={router} />
      </AuthContext>
    </React.StrictMode>,
  </div>
)
