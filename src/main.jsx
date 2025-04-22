import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import ErrorPage from "./components/ErrorPage.jsx";
import TestOne from "./components/TestOne.jsx";
import Contact from "./components/Contact.jsx";
import Demo from "./components/Demo.jsx";
import UserList from "./components/UserList.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TestOne />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/userList",
        element: <UserList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
