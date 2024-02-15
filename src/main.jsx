import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage.jsx";
import ReviewList from "./components/ReviewList.jsx";
import AssesseeDataPage from "./components/AssesseeDataPage.jsx";
import ViewReport from "./components/ViewReport.jsx";

const router = createBrowserRouter([
  {
    path: "/iguru",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/assignment",
    element: <AssesseeDataPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/report",
    element: <ViewReport />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
