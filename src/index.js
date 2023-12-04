import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

const Cart = lazy(() => import("./components/Cart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "About",
        element: (
          <>
            <Suspense fallback={<Shimmer />}>
              <About />
            </Suspense>
          </>
        ),
      },
      {
        path: ":id",
        element: <RestaurentMenu />,
      },
      {
        path: "Cart",
        element: (
          <>
            <Suspense fallback={<h1>Your Cart is loading..</h1>}>
              <Cart />
            </Suspense>
          </>
        ),
      },
    ],
  },
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
