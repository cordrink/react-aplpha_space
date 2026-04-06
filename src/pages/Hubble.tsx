import {datastroCustomFetch} from "@/utils/customFetch.ts";
import type {HubbleImagesResponse} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {CardGrid, Overview, Title} from "@/components";

const hubbleParams = {
    order_by: "photo_date_taken DESC",
    limit: 24
}

// eslint-disable-next-line react-refresh/only-export-components
export const hubblePageLoader: LoaderFunction = async (): Promise<HubbleImagesResponse | null> => {
    try {
        const formattedParams = {
            ...hubbleParams,
        };
        const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formattedParams});
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const Hubble = () => {
    const data = useLoaderData() as HubbleImagesResponse;
    console.log(data)
    return (
        <section className={"section"}>
            <Title text={"Hubble telescope photos"} />
            <Overview objects={data} />
            <CardGrid objects={data} mode={"hubble-page"} />
        </section>
    );
};
