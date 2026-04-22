import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Apod, ErrorMain, HomeLayout, Hubble, Landing, News, SingleHubble, SpaceX, Webb} from "@/pages";
import {newsPageLoader} from "@/pages/News.tsx";
import {ErrorElement} from "@/components";
import {hubblePageLoader} from "@/pages/Hubble.tsx";
import {apodPageLoader} from "@/pages/Apod.tsx";
import {webbPageLoader} from "@/pages/Webb.tsx";
import {spacexLoader} from "@/pages/SpaceX.tsx";
import {landingPageLoader} from "@/pages/Landing.tsx";
import {singleHubblePageLoader} from "@/pages/SingleHubble.tsx";

const router = createBrowserRouter([
    {
        path: "/", element: <HomeLayout/>, errorElement: <ErrorMain />,children: [
            {index: true, element: <Landing/>, loader: landingPageLoader, errorElement: <ErrorElement/>},
            {path: "spaceX", element: <SpaceX/>, loader: spacexLoader, errorElement: <ErrorElement/>},
            {path: "webb", element: <Webb/>, loader: webbPageLoader, errorElement: <ErrorElement/>},
            {path: "hubble", element: <Hubble/>, loader: hubblePageLoader, errorElement: <ErrorElement/>},
            {path: "hubble/:id", element: <SingleHubble/>, loader: singleHubblePageLoader, errorElement: <ErrorElement/>},
            {path: "news", element: <News/>, loader: newsPageLoader, errorElement: <ErrorElement/>},
            {path: "apod", element: <Apod/>, loader: apodPageLoader, errorElement: <ErrorElement/>},
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
