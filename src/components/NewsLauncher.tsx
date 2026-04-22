import {NewsLauncherBubbledCards, NewsLauncherHeader, NewsLauncherSquaredCards} from "@/components";
import {useLoaderData} from "react-router-dom";
import type {LandingPageNewsApodHubble} from "@/utils/types.ts";

export const NewsLauncher = () => {
    const {news} = useLoaderData() as LandingPageNewsApodHubble
    return (
        <article className={"w-full py-12"}>
            <div className="align-element h-full">
                <NewsLauncherHeader/>
                {news && <NewsLauncherSquaredCards news={news}/>}
                {news && <NewsLauncherBubbledCards news={news}/>}
            </div>
        </article>
    );
};
