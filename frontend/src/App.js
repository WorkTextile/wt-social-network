import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/navBar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "../../frontend/src/component/Main";

function App() {

  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <NavBar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return <Navigate to = "/login" />
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: 
        <QueryClientProvider client={queryClient}>
          <Register />
        </QueryClientProvider>,
    },
  ]);

  /*
   <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  */

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
