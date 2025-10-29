import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./app/Home";
import Category from "./app/category/Category";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";
import Profile from "./app/Profile";
import Cart from "./app/Cart";
import Favorites from "./app/Favorites";
import About from "./app/About";
import Layout from "./components/layout/Layout";
import { useState } from "react";
import LoginModal from "./components/layout/LoginModal";

const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  });
};

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
          loader: loader,
        },
        {
          path: ":category",
          element: <Category />,
          loader: loader,

          children: [
            {
              path: ":subcategory",
              element: <Category />,
              loader: loader,
            },
          ],
        },
        {
          element: <ProtectedRoute onRequireLogin={() => setShowLogin(true)} />,
          children: [
            {
              path: "/profile",
              element: <Profile />,
              loader: loader,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: loader,
        },
        {
          path: "/wishlist",
          element: <Favorites />,
          loader: loader,
        },
        {
          path: "/about-us",
          element: <About />,
          loader: loader,
        },
        {
          path: "*",
          element: <div>Not Found</div>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <LoginModal visible={showLogin} close={() => setShowLogin(false)} />
    </>
  );
}

export default App;
