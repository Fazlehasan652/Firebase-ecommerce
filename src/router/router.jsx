import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUpForm from "../pages/SignUpForm";
import Profile from "../pages/Profile";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../components/Dashboard";
import PrivateAdminRoute from "../components/PrivateAdminRoute";
// import PrivateAdminRoute from "../components/PrivateAdminRoute";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      {
        path: "/admin/dashboard",
        element: (
          <PrivateAdminRoute>
            <Dashboard />
          </PrivateAdminRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUpForm /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
