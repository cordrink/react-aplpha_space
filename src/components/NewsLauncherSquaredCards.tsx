import type {News} from "@/utils/types.ts";
import {NewsCard} from "@/components/NewsCard.tsx";

export const NewsLauncherSquaredCards = ({news}: { news: News[] }) => {
    return (
        <div className={"mt-6 p-2 grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:h-[600px] gap-2"}>
            <NewsCard news={news[0]} classname={"md:col-span-2 md:row-span-2"}/>
            <NewsCard news={news[1]} classname={"md:col-span-1 md:row-span-2"}/>
            <NewsCard news={news[2]}/>
            <NewsCard news={news[3]}/>
        </div>
    );
};
