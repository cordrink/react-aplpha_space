import {type LoaderFunction, useLoaderData} from "react-router-dom";
import type {ApodType} from "@/utils/types.ts";
import {nasaCustomFetch} from "@/utils/customFetch.ts";
import {Title} from "@/components";
import {ApodPlayer} from "@/components/ApodPlayer.tsx";
import {useEffect, useState} from "react";
import {numberToDate} from "@/utils/function.ts";
/* eslint-disable no-console */
// eslint-disable-next-line react-refresh/only-export-components
export const apodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
    try {
        const response = await nasaCustomFetch.get<ApodType>("");
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const Apod = () => {
    const defaultApod = useLoaderData() as ApodType;

    const [data, setData] = useState<ApodType>(defaultApod);
    const [day, setDay] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (day === 0) return;

        const fetchApod = async ()=> {
            try {
                setIsLoading(false);
                const params = {date: numberToDate(day)}
                const response = await nasaCustomFetch.get<ApodType>("", {params});
                setData(response.data);
            } catch (error) {
                console.log(error);
                return null;
            } finally {
                setIsLoading(true);
            }
        };

        fetchApod();
    }, [day]);

    return (
        <div className={"section"}>
            <Title text={"NASA's astronomy picture of the day"}/>
            <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading} />
        </div>
    );
};
