import {datastroCustomFetch, nasaCustomFetch, snapiCustomFetch} from "@/utils/customFetch.ts";
import {type LoaderFunction} from "react-router-dom";
import type {
    ApodType,
    HubbleImagesResponse,
    LandingPageNewsApodHubble,
    News,
    NewsResponse
} from "@/utils/types.ts";
import {ApodLauncher, HubbleLauncher, NewsLauncher, SpaceXLauncher, WebbLauncher} from "@/components";
/* eslint-disable no-console */
const newsParams = {ordering: "-published_at"}

const hubbleParams = {
    order_by: "photo_date_taken DESC",
    limit: 12
}

// eslint-disable-next-line react-refresh/only-export-components
export const newsFetch = async (): Promise<News[] | null> => {
    try {
        const response = await snapiCustomFetch.get<NewsResponse>("", {params: newsParams});
        return response.data.results;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export const hubbleFetch = async (): Promise<HubbleImagesResponse | null> => {
    try {
        const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: hubbleParams});
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export const apodFetch = async (): Promise<ApodType | null> => {
    try {
        const response = await nasaCustomFetch.get<ApodType>("");
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export const landingPageLoader: LoaderFunction = async (): Promise<LandingPageNewsApodHubble | null> => {
    try {
        const [news, apod, hubble] = await Promise.all([newsFetch(), apodFetch(), hubbleFetch()]);
        return {news, apod, hubble};
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const Landing = () => {
    return (
        <section>
            <NewsLauncher/>
            <SpaceXLauncher/>
            <ApodLauncher/>
            <WebbLauncher/>
            <HubbleLauncher/>
        </section>
    );
};
