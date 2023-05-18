import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllToys from "../Components/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

export default router;
