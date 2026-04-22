import type {HubbleImage, HubbleImagesResponse, News, Rocket, WebbImage} from "@/utils/types.ts";
import type {ReactNode} from "react";
import {ImageCard, NewsPageCard, RocketCard} from "@/components";
import {HubbleCard} from "@/components/HubbleCard.tsx";

export const CardGrid = ({objects, mode}: {
    objects: News[] | HubbleImagesResponse | WebbImage[] | (Rocket | null)[],
    mode: string
}): ReactNode => {
    if (mode === "hubble-page") {
        const hubbleData = objects as HubbleImagesResponse;

        return (
            <div className={"grid gap-2 auto-rows-fr mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                {hubbleData.results.map((item: HubbleImage) => (
                    <HubbleCard image={item} key={item.photo_id}/>
                ))}
            </div>
        )
    } else if (mode === "imagery") {
        const imageryData = objects as WebbImage[];

        return (
            <div className={"grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}>
                {imageryData.map((imagery: WebbImage) => (
                    <ImageCard key={imagery.id} image={imagery}/>
                ))}
            </div>
        )
    } else if (mode === "news-page") {
        const newsData = objects as News[];

        return (
            <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-10">
                {newsData.map((item: News) => (
                    <NewsPageCard news={item} key={item.id}/>
                ))}
            </div>
        );
    } else if (mode === "rockets") {
        const rocketsData = objects as Rocket[] | null;
        return (
            <div>
                {rocketsData && (
                    rocketsData.map((rocketItem, index) => (
                        <RocketCard key={rocketItem.id} rocket={rocketItem} index={index} />
                    ))
                )}
            </div>
        )
    }

    return null;
};
