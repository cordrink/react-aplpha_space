import {Link, useLoaderData} from "react-router-dom";
import type {LandingPageNewsApodHubble} from "@/utils/types.ts";
import {CircleArrowRight} from "lucide-react";

export const ApodLauncher = () => {
    const {apod} = useLoaderData() as LandingPageNewsApodHubble;

    if (!apod) return <>Problem while fetching apod data</>;

    const {date, media_type, title, url, explanation, hdurl} = apod;

    return (
        <article className="w-full py-10">
            <div className="align-element h-full grid gap-4 lg:grid-cols-2">
                <div>
                    <p className={"capitalize text-xl"}>Today</p>
                    <p className={"capitalize my-4 text-4xl font-bold"}>NASA's astronomy picture of the day</p>
                    <p className={"capitalize text-2xl"}>{title}</p>
                    <p className={"capitalize mt-4"}>{explanation.slice(0, 200)}...</p>
                    <p className={"capitalize"}>{date}</p>
                    <p className={"capitalize mt-8 flex gap-2"}>
                        Browse archives
                        <Link to={"/apod"}>
                            <CircleArrowRight
                                color={"var(--clr-violet)"}
                                className={"transition-all hover:scale-150"}
                            />
                        </Link>
                    </p>
                </div>
                {
                    media_type === "video" ?
                        (<video
                            controls
                            poster={hdurl}
                            className={"h-full w-full bg-black"}
                            src={url}
                        >
                            <source src={url} type="video/mp4"/>
                            Votre navigateur ne supporte pas la lecture videos.
                        </video>) :
                        (<img
                            src={url}
                            alt="apod-img"
                            className={"h-full w-full object-cover"}
                        />)
                }
            </div>
        </article>
    );
};
