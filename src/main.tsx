import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Apod, HomeLayout, Hubble, Landing, News, SpaceX, Webb} from "@/pages";

const router = createBrowserRouter([
    {
        path: "/", element: <HomeLayout/>, children: [
            {index: true, element: <Landing/>},
            {path: "spaceX", element: <SpaceX/>},
            {path: "webb", element: <Webb/>},
            {path: "hubble", element: <Hubble/>},
            {path: "news", element: <News/>},
            {path: "apod", element: <Apod/>},
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
