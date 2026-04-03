import {snapiCustomFetch} from "@/utils/customFetch.ts";
import type {NewsResponse} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {CardGrid, Filters, Overview, Title} from "@/components";

const newsParams = {
    news_site_exclude: "spacePolicyOnline.com",
    limit: 20,
    ordering: "-published_at"
}

// eslint-disable-next-line react-refresh/only-export-components
export const newsPageLoader: LoaderFunction = async (): Promise<NewsResponse | null> => {
    try {
        const formattedParams = {
            ...newsParams
        }
        const response = await snapiCustomFetch.get<NewsResponse>("", {
            params: formattedParams,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const News = () => {
    const data = useLoaderData() as NewsResponse;
    const {results} = data;

    console.log(results);

    return (
        <section className={"section"}>
            <Title text={"all news"} />
            <Filters term={"term"} mode={"news"} />
            <Overview objects={data} />
            <CardGrid objects={results} mode="news-pages"/>
        </section>
    );
};
