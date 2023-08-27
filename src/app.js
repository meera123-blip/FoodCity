import React, { lazy,Suspense} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/body";
import Footer from "./components/footer"
import About from "./components/About";
import Error from "./components/error";
import Contact from "./components/contact";
import ResturantMenu from "./components/ResturantMenu";
import { IsOnline } from "./Utils/IsOnline";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./Utils/store";
import Cart from "./components/cart";


const Instamart = lazy(()=>import("./components/InstaMart"));


const AppComponent = () => {

const status = IsOnline();

  return (!status)?<h1>Someting went wrong!!please check your internet connection!!!</h1>: (
    <Provider store={store}>
      <HeaderComponent />
      <Outlet/>
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element:<AppComponent/>,
      errorElement:<Error/>,
      children: [
        {
          path:"/",
          element:<BodyComponent/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/restaurant/:id",
          element:<ResturantMenu/>,
        },
        {
          path:"/InstaMart",
          element:<Suspense>
            <Instamart/>
          </Suspense>
        }
      ]
    },

   
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
