
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import ForgotPassword from '../Auth/ForgotPassword';
import HomePage from '../Pages/Home/HomePage';
import Details from '../Pages/Details/Details';
import Playlist from '../Pages/Playlist/Playlist';
import PrivateRouting from "../Components/PrivateRouting";
import ErrPage from "../err/ErrPage";

const MainRoutes = createBrowserRouter([
        {
          path: "",
          element: <Layout/>,
          children : [
          {
            path: "/",
            element: <SignIn />,
          },
          {
            path: "/Sign-Up",
            element: <SignUp />,
          },
          {
            path: "/Forgot-Password",
            element: <ForgotPassword />,
          },
          {
            element: <PrivateRouting/>,
            children : [
              {
                path: "/BountyMiex/:userId",
                element: <HomePage />,
              },
              {
                path: "/BountyMiex/Details/:title",
                element: <Details />,
              },
              {
                path: "/BountyMiex/Playlist",
                element: <Playlist />,
              },
            ]
          },
         
      
          ],
          errorElement: <ErrPage/>
        }
       
      ]);


export default MainRoutes