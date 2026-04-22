import {datastroCustomFetch} from "@/utils/customFetch.ts";
import type {FilterParams, HubbleImagesResponse, HubbleImagesResponseWithParams} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {CardGrid, Filters, Overview, PaginationContainer, Title} from "@/components";
import {objectsPerPage} from "@/utils/constants.ts";

const hubbleParams = {
    order_by: "photo_date_taken DESC",
    limit: objectsPerPage
}

// eslint-disable-next-line react-refresh/only-export-components
export const hubblePageLoader: LoaderFunction = async ({request}): Promise<HubbleImagesResponseWithParams | null> => {
    try {
        const urlParams: FilterParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

        const formattedParams = {
            where: urlParams.term ? `photo_title like "${urlParams.term}"` : "",
            offset: urlParams.page ? objectsPerPage * (parseFloat(urlParams.page) - 1) : 0,
            ...hubbleParams,
        };

        const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formattedParams});

        return {response: response.data, params: urlParams};
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const Hubble = () => {
    const data = useLoaderData() as HubbleImagesResponseWithParams;

    const {response, params} = data;

    return (
        <section className={"section"}>
            <Title text={"Hubble telescope photos"}/>
            <Filters term={params.term} mode={"hubble"} key={params.term}/>
            <Overview objects={response}/>
            <CardGrid objects={response} mode={"hubble-page"}/>
            <PaginationContainer />
        </section>
    );
};
