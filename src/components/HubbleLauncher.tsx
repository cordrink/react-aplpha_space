import {Link, useLoaderData} from "react-router-dom";
import type {LandingPageNewsApodHubble} from "@/utils/types.ts";
import {Title} from "@/components/Title.tsx";
import {CirclePlay} from "lucide-react";
import {CardGrid} from "@/components";

export const HubbleLauncher = () => {
    const {hubble} = useLoaderData() as LandingPageNewsApodHubble;

    if (!hubble) {
        return <>Problem while fetching hubble launcher!</>;
    }

    return (
        <article className={"align-element w-full my-6"}>
            <div className="flex justify-between items-center">
                <Title text={"hubble photos"}/>
                <div className="flex">
                    <p className={"font-bold ml-auto mr-2"}>More photos</p>
                    <Link to={"/hubble"}>
                        <CirclePlay color={"var(--clr-violet)"} className={"transition-all hover:scale-150"}/>
                    </Link>
                </div>
            </div>
            <CardGrid objects={hubble} mode={"hubble-page"}/>
        </article>
    );
};
