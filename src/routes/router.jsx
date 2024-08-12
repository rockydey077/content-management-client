import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Author from "../pages/Author/Author";
import Newsletter from "../pages/Newsletter/Newsletter";
import Dashboard from "../layout/Dashboard/Dashboard";
import BlogList from "../pages/Dashboard/BlogList";
import AddBlog from "../pages/Dashboard/AddBlog";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ViewDetails />,
      },
      {
        path: "/author",
        element: <Author />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);
