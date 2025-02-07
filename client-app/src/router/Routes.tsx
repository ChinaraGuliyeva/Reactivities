import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../features/home/HomePage";
import ActivityDashboard from "../features/dashboard/ActivityDashboard";
import ActivityForm from "../form/ActivityForm";
import ActivityDetails from "../details/ActivityDetails";

export const routs: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm key="manage" /> },
    ],
  },
];

export const router = createBrowserRouter(routs);
