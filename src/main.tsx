import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./app/Home.tsx";
import { LoadingBarContainer } from "react-top-loading-bar";
import Category from "./app/category/Category.tsx";
import About from "./app/About.tsx";
import Cart from "./app/Cart.tsx";
import Favorites from "./app/Favorites.tsx";

const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  });
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: loader,
          HydrateFallback: () => null,
        },
        {
          path: ":category",
          element: <Category />,
          loader: loader,
          HydrateFallback: () => null,
          children: [
            {
              path: ":subcategory",
              element: <Category />,
              loader: loader,
              HydrateFallback: () => null,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: loader,
          HydrateFallback: () => null,
        },
        {
          path: "/wishlist",
          element: <Favorites />,
          loader: loader,
          HydrateFallback: () => null,
        },
        {
          path: "/about-us",
          element: <About />,
          loader: loader,
          HydrateFallback: () => null,
        },
      ],
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ],
  // {
  //   basename: "/ecom",
  // },
);

createRoot(document.getElementById("root")!).render(
  <LoadingBarContainer
    props={{
      color: "#ffffff",
      height: 2,
      shadow: false,
      waitingTime: 500,
      transitionTime: 200,
    }}
  >
    <RouterProvider router={router} />
  </LoadingBarContainer>,
);
