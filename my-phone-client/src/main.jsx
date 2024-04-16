import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './conponents/Main';
import Phones from './conponents/Phones';
import Phone from './conponents/Phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
      {
        path: "/phones",
        element :<Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phones')
      },
      {
        path: "/phone/:id",
        element:<Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
