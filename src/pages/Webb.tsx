import {snapiCustomFetch, webbCustomFetch} from "@/utils/customFetch.ts";
import type {News, NewsResponse, WebbImage, WebbImagesResponse, WebbNewsAndImagery} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {CardGrid, RelatedNews, Title, WebbTelescopeSummary} from "@/components";
/* eslint-disable no-console */
const newParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 9,
    ordering: "published_at",
    summary_contains: "webb"
}

const imagesParams = {
    page: 1,
    perPage: 4,
}

// eslint-disable-next-line react-refresh/only-export-components
export const newsFetch = async (): Promise<News[] | null> => {
    try {
        const response = await snapiCustomFetch<NewsResponse>("", {params: newParams});
        return response.data.results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export const imageryFetch = async (): Promise<WebbImage[] | null> => {
    try {
        const response = await webbCustomFetch<WebbImagesResponse>("", {params: imagesParams});
        return response.data.body;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export const webbPageLoader: LoaderFunction = async (): Promise<WebbNewsAndImagery | null> => {
    try {
        const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()])
        return {news, imagery}
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const Webb = () => {
    const {news, imagery} = useLoaderData() as WebbNewsAndImagery;

    return (
        <section className={"section"}>
            <Title text={"James Webb Space Telescope"}/>
            {news && <RelatedNews news={news}/>}
            <Title text={"in brief"}/>
            <WebbTelescopeSummary/>
            <Title text={"Recent Imagery"}/>
            {imagery && <CardGrid objects={imagery} mode={"imagery"}/>}
        </section>
    );
};
