import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllToys from "../Components/AllToys/AllToys";
import MyToys from "../Components/MyToys/MyToys";
import AddToys from "../Components/AddToys/AddToys";
import Blogs from "../Components/Blogs/Blogs";
import Register from "../Components/Register&Login/Register";
import Login from "../Components/Register&Login/Login";
import Error from "../Components/Error";
import UpdateGame from "../Components/Update/UpdateToys";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "update/:id",
        element: <UpdateGame></UpdateGame>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
