import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Home from './Components/screens/Home/Home.jsx'
import Service from './Components/screens/Service/Service.jsx'
import Properties from './Components/screens/properties/Properties.jsx'
import About from './Components/screens/About/About.jsx'
import Contact from './Components/screens/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element:<Home />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'properties',
        element: <Properties />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
