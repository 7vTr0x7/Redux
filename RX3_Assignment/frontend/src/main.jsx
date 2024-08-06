import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentForm from "./components/StudentForm.jsx";
import StudentDetails from "./components/StudentDetails";
import ClassView from "./features/class/ClassView.jsx";
import SchoolView from "./features/school/SchoolView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/studentForm",
    element: <StudentForm />,
  },
  {
    path: "/class",
    element: <ClassView />,
  },
  {
    path: "/school",
    element: <SchoolView />,
  },
  {
    path: "/:studentId",
    element: <StudentDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
