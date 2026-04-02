import type {News} from "@/utils/types.ts";
import type {ReactNode} from "react";
import {NewsPageCard} from "@/components";

export const CardGrid = ({objects, mode}: { objects: News[], mode: string }): ReactNode => {
    console.log(mode);

    return (
        <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
            {objects.map((item: News, index: number) => (
                <NewsPageCard news={item} key={index}/>
            ))}
        </div>
    );
};
