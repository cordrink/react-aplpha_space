import {type LoaderFunction, useLoaderData} from "react-router-dom";
import type {ApodType} from "@/utils/types.ts";
import {nasaCustomFetch} from "@/utils/customFetch.ts";
import {Title} from "@/components";
import {ApodPlayer} from "@/components/ApodPlayer.tsx";
import {useEffect, useState} from "react";
import {numberToDate} from "@/utils/function.ts";

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
    const [isLoading, setIsLoading] = useState<boolean>(false)

    console.log(`defaultApod: ${defaultApod}, data: ${data}, day: ${day}`);

    useEffect(() => {
        if (day === 0) return;

        const fetchApod = async ()=> {
            try {
                setIsLoading(true);
                const params = {date: numberToDate(day)}
                const response = await nasaCustomFetch.get<ApodType>("", {params});
                setData(response.data);
            } catch (error) {
                console.log(error);
                return null;
            } finally {
                setIsLoading(false);
            }
        };

        fetchApod();
    }, [day]);

    /*const apod: ApodType = {
        date: "2026-04-06",
        explanation: "Why doesn't Artemis II land on the Moon? The main reason is that Artemis II is primarily a test mission designed to make a future Artemis missions -- which will land humans on the Moon -- better prepared.  Similarly, NASA's Apollo 8 and Apollo 10 went right near the Moon as tests before Apollo 11 -- which landed.  As the trajectory in the featured animated video shows, Artemis II will loop around both the Earth and the Moon before returning to the Earth about 10 days after launch. The Artemis II mission will take humans outside the Earth's magnetosphere for the first time since the Apollo missions 50 years ago.  In the video, particles from the solar wind are shown as streaks, while the Earth's reacting magnetosphere is shown in flickering green.  The Earth's magnetosphere is important in deflecting powerful particles arriving from the Sun as well as creating picturesque auroras visible from the Earth's surface.    Explore the Universe: Random APOD Generator",
        hdurl: "https://apod.nasa.gov/apod/image/1707/ic342_rector2048.jpg",
        media_type: "video",
        service_version: "v1",
        title: "The Path of Artemis II",
        url: "https://apod.nasa.gov/apod/image/2604/Artemis2Path_NasaSvs.mp4"
    }*/

    return (
        <div className={"section"}>
            <Title text={"NASA's astronomy picture of the day"}/>
            <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading} />
        </div>
    );
};
