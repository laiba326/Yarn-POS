import App from "../App";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Forms from "../pages/Forms";

export const routes = [
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/reports", element: <Reports /> },
  { path: "/forms", element: <Forms /> },
];
