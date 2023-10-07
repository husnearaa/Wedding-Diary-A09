import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import FAQ from "../pages/FAQ/FAQ";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Service from "../pages/Service/Service";





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
            path: '/services/:id',
            element: <Service></Service>,
            loader: () => fetch('/details.json')
        },
       ]
    }
])
   

export default myCreatedRoute;