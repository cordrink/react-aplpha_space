import type {HubbleImagesResponse, NewsResponse} from "@/utils/types.ts";

export const Overview = ({objects}: { objects: NewsResponse | HubbleImagesResponse }) => {
    let number: number;

    if ("total_count" in objects) {
        number = objects.total_count;
    } else {
        number = objects.count;
    }

    return (
        <div className={"my-6 text-xl"}>{number} matches</div>
    );
};
