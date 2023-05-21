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
import ViewDetail from "../Components/ViewDetail/ViewDetail";
import PrivateRout from "./PrivateRout";

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
      },
      {
        path: "/myToys",
        element: (
          <PrivateRout>
            <MyToys></MyToys>
          </PrivateRout>
        ),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRout>
            <AddToys></AddToys>
          </PrivateRout>
        ),
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
      {
        path: "/toy-detail/:id",
        element: (
          <PrivateRout>
            <ViewDetail></ViewDetail>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
