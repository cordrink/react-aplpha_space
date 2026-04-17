import type {News} from "@/utils/types.ts";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";

export const NewsCard = ({news}: { news: News }) => {
    const {image_url, title, news_site, url} = news;

    return (
        <Link to={url} target="_blank">
            <Card className="relative overflow-hidden text-white border-0 p-0 min-h-[400px]">
                <CardHeader
                    className={"absolute top-0 left-0 p-4 z-20 w-full capitalize bg-gradient-to-b from-black/60 to-transparent"}
                >{news_site}</CardHeader>
                <CardContent className={"absolute inset-0 p-0"}>
                    <img
                        src={image_url}
                        alt="Card image"
                        className={"w-full h-full object-cover"}
                    />
                    <div className="absolute inset-0 bg-black/30"/>
                </CardContent>
                <CardFooter
                    className={"absolute bottom-0 left-0 p-4 z-20 w-full font-extrabold text-xl leading-tight bg-gradient-to-t from-black/80 to-transparent"}>{title}</CardFooter>
            </Card>
        </Link>
    );
};
