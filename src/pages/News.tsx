import {snapiCustomFetch} from "@/utils/customFetch.ts";
import type {FilterParams, NewsResponse, NewsResponseWithParams} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {CardGrid, Filters, Overview, Title} from "@/components";

const newsParams = {
    news_site_exclude: "spacePolicyOnline.com",
    limit: 20,
    ordering: "-published_at"
}

// eslint-disable-next-line react-refresh/only-export-components
export const newsPageLoader: LoaderFunction = async ({request}): Promise<NewsResponseWithParams | null> => {
    try {
        const urlParams: FilterParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

        const formattedParams = {
            search: urlParams.term ? urlParams.term : "",
            ...newsParams
        }
        const response = await snapiCustomFetch.get<NewsResponse>("", {
            params: formattedParams,
        });
        return {response: response.data, params: urlParams};
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const News = () => {
    const data = useLoaderData() as NewsResponseWithParams;
    const {response, params} = data;

    return (
        <section className={"section"}>
            <Title text={"all news"}/>
            <Filters term={params.term} mode={"news"} key={params.term}/>
            <Overview objects={response}/>
            <CardGrid objects={response.results} mode="news-pages"/>
        </section>
    );
};
