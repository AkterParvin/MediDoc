
import './App.css'
import {
  createBrowserRouter,

} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
const App = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/",
        element:<Home/>,
      },
    ]
  },
]);

export default App
