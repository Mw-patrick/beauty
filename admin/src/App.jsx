import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";

function Layout() {
  return (
    <div className="d-flex">
      <div>
        <Menu />
      </div>
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
       path: "/", 
       element: <Home /> 
      },
      { 
       path: "/users", 
       element: <Users /> 
      },
      { path: "/products", 
        element: <Products />
       },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
