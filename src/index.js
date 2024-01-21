import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RestuarentMenu from './pages/RestuarentMenu';
import RegistrationPage from './pages/RegistrationPage';
import AddtoCard from './pages/AddtoCard';
import FoodItemsPage from './pages/FoodItemsPage';
import Payment from './pages/Payment';
import AboutusPage from './pages/AboutusPage';
import ContactPage from './pages/ContactPage';
import PaymentSucces from './pages/PaymentSucces';
import PaymentFailed from './pages/PaymentFailed';

const appRouting = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/restuarentmenu',
        element: <RestuarentMenu />
      },
      {
        path: "/registration",
        element: <RegistrationPage />
      },
      {
        path: "/addcard",
        element: <AddtoCard />
      },
      {
        path: "/fooditems/:id",
        element: <FoodItemsPage/>
      },
      {
        path: "/payment",
        element: <Payment/>
      },
      {
        path : "/aboutus",
        element : <AboutusPage/>
      },
      {
        path : "/contact",
        element : <ContactPage/>
      },
      {
        path : '/success',
        element : <PaymentSucces/>
      },
      {
        path : '/failed',
        element : <PaymentFailed/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouting} />);

