/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,

} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Shared/Login/Login";
import Register from "./Components/Shared/Register/Register";
import PrivateRoute from "./Components/Root/PrivateRoute";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import AddTask from "./Components/Shared/AddTask/AddTask";
const App = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Root/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addTask",
        element: <AddTask />,
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/register",
        element:<Register/>,
      },
    ]
  },
]);

export default App
