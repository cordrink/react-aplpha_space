import {type LoaderFunction, useLoaderData, useNavigate} from "react-router-dom";
import {datastroCustomFetch} from "@/utils/customFetch.ts";
import type {HubbleImage, HubbleImagesResponse} from "@/utils/types.ts";
import {Button} from "@/components/ui/button.tsx";
import {Title} from "@/components";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
/* eslint-disable no-console */
// eslint-disable-next-line react-refresh/only-export-components
export const singleHubblePageLoader: LoaderFunction = async ({params}): Promise<HubbleImage | null> => {
    try {
        const formatedParams = {where: params.id ? `photo_id like "${params.id}"` : ""};
        const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formatedParams});
        return response.data.results[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const SingleHubble = () => {
    const {
        photo_date_taken,
        album_name_tags,
        photo_license,
        photo_title,
        photo_url_m,
        photo_description
    } = useLoaderData() as HubbleImage;

    const navigate = useNavigate();
    return (
        <section className={"section"}>
            <Button type={"button"} variant="default" size="lg" onClick={() => navigate(-1)}>Back</Button>
            <Title text={"hubble telescope photo"}/>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between text-2xl">
                        <div>
                            {photo_title} | {album_name_tags}
                        </div>
                        <div>
                            <p>Taken: {photo_date_taken}</p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <img src={photo_url_m.url} alt="hubble-pic" className={"w-full h-full"}/>
                    <p className={"mt-4"}>{photo_description}</p>
                </CardContent>
                <CardFooter>{photo_license}</CardFooter>
            </Card>
        </section>
    );
};
