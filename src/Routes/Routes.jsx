import { createBrowserRouter } from "react-router-dom";
import AddService from "../pages/AddService/AddService";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MyServices from "../pages/MyServices/MyServices";
import BookService from "../pages/BookService/BookService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch(`http://localhost:5000/services`)
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/my-service",
        element: <MyServices />,
      },
      {
        path: "/book-service/:id",
        element: <BookService />,
        loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
    ],
  },
]);

export default router;
