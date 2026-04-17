import type {News} from "@/utils/types.ts";
import {NewsCard} from "@/components";

export const RelatedNews = ({news}: { news: News[] }) => {
    return (
        <div>
            <h1 className={"capitalize my-4 text-2xl"}>Related news</h1>
            <div className="grid gap-2 auto-rows-fr md:grid-cols-2 lg:grid-cols-3 p-2">
                {news.map((newItem: News) => (
                    <NewsCard key={newItem.id} news={newItem} />
                ))}
            </div>
        </div>
    );
};
