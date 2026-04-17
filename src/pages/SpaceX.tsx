import {snapiCustomFetch, spacexCustomFetch} from "@/utils/customFetch.ts";
import type {News, NewsResponse, Rocket, SpacexNewsAndRocket} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {CardGrid, RelatedNews, Title} from "@/components";

const newParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 9,
    ordering: "published_at",
    summary_contains: "spacex"
};

const starshipUrl = "rockets/starship";
const falconNineUrl = "rockets/falcon9";
const falconHeavyUrl = "rockets/falconheavy";

const rocketsUrl = [starshipUrl, falconNineUrl, falconHeavyUrl];

// eslint-disable-next-line react-refresh/only-export-components
export const newsFetch = async (): Promise<News[] | null> => {
    try {
        const response = await snapiCustomFetch<NewsResponse>("", {params: newParams});
        return response.data.results;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export const rocketFetch = async (rocketUrl: string): Promise<Rocket | null> => {
    try {
        const response = await spacexCustomFetch.get<Rocket>(rocketUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export const rocketsFetch = async (): Promise<(Rocket | null)[] | null> => {
    try {
        const response: (Rocket | null)[] = await Promise.all(rocketsUrl.map(rocketUrl => rocketFetch(rocketUrl)));
        return response
    } catch (error) {
        console.log(error);
        return null;
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export const spacexLoader: LoaderFunction = async (): Promise<SpacexNewsAndRocket | null> => {
    try {
        const [news, rockets] = await Promise.all([newsFetch(), rocketsFetch()]);
        return {news, rockets};
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const SpaceX = () => {
    const {news, rockets} = useLoaderData() as SpacexNewsAndRocket;
    return (
        <section>
            <Title text={"spaceX"} />
            {news && <RelatedNews news={news} />}
            <Title text={"rockets"} />
            {rockets && <CardGrid objects={rockets} mode={"rockets"}/>}
        </section>
    );
};
