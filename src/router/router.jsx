import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUpForm from "../pages/SignUpForm";
import Profile from "../pages/Profile";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUpForm /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
