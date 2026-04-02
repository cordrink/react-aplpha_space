import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Apod, HomeLayout, Hubble, Landing, News, SpaceX, Webb} from "@/pages";
import {newsPageLoader} from "@/pages/News.tsx";
import {ErrorElement} from "@/components";

const router = createBrowserRouter([
    {
        path: "/", element: <HomeLayout/>, children: [
            {index: true, element: <Landing/>},
            {path: "spaceX", element: <SpaceX/>},
            {path: "webb", element: <Webb/>},
            {path: "hubble", element: <Hubble/>},
            {path: "news", element: <News/>, loader: newsPageLoader, errorElement: <ErrorElement/>},
            {path: "apod", element: <Apod/>},
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
