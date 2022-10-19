import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from "../../components/ErrorPage";
import Home from "../../components/Home";
import Login from "../../components/Login";
import Profile from '../../components/Profile';
import Register from "../../components/Register";
import Wallet from "../../components/Wallet";
import Main from "../../Layout/Main";
import PrvateRoute from './PrvateRoute/PrvateRoute';



export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/profile',
        element: <PrvateRoute><Profile /></PrvateRoute>
      },
      {
        path: '/wallet',
        element: <PrvateRoute><Wallet /></PrvateRoute>
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])