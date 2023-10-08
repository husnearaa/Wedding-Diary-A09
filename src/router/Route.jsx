import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import FAQ from "../pages/AskedQuestions/AskedQuestions";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Service from "../pages/Service/Service";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";




const myCreatedRoute = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/service.json')
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/faq',
            element: <FAQ></FAQ>
        },
        {
            path: '/about',
            element: <AboutUs></AboutUs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/services/:id',
            element: <PrivateRoute><Service></Service></PrivateRoute>,
            loader: () => fetch('/details.json')
        },
       
       ]
    }
])
   

export default myCreatedRoute;