import type {NewsResponse} from "@/utils/types.ts";

export const Overview = ({objects}: {objects: NewsResponse}) => {
    const number: number = objects.count;
    return (
        <div className={"my-6 text-xl"}>{number}</div>
    );
};
