import type {News} from "@/utils/types.ts";
import {Link} from "react-router-dom";
import {CircleArrowRight} from "lucide-react";

export const NewsPageCard = ({news}: { news: News }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {url, image_url, title, published_at, news_site, summary} = news;

    return (
        <div className={"test grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4"}>
            <div className={"p-2 overflow-hidden lg:col-span-1 h-[300px] md:h-[400px] lg:h-full"}>
                <Link to={url} target="_blank">
                    <img src={image_url} alt="image news" className={"h-full w-full object-cover"}/>
                </Link>
            </div>
            <div className={"p-2 overflow-hidden lg:col-span-3 h-[300px] md:h-[200px] lg:h-full"}>
                <p className={"text-2xl font-bold"}>{title}</p>
                <p>{published_at.split("T")[0]}</p>
                <p className={"flex"}>
                    <span>{news_site}</span>
                    <span>|</span>
                    <span className={"flex gap-x-2"}>
                        Read from source
                        <Link to={url} target="_blank">
                            <CircleArrowRight
                                color="var(--clr-violet)"
                                className="hover:scale-150 transition-all"
                            />
                        </Link>
                    </span>
                </p>
                <p className={"mt-4"}>{summary}</p>
            </div>
        </div>
    );
};
