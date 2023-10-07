import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import FAQ from "../pages/FAQ/FAQ";





const myCreatedRoute = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout></MainLayout>,
       children:[
        {
            path: '/',
            element: <Home></Home>,
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
       ]
    }
])
   

export default myCreatedRoute;