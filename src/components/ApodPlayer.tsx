import type {ApodType} from "@/utils/types.ts";
import * as React from "react";
import {CircleArrowRight, CircleChevronLeft} from "lucide-react";

export type ApodPlayerProps = {
    apod: ApodType;
    day: number;
    setDay: React.Dispatch<React.SetStateAction<number>>;
    isLoading: boolean;
}

export const ApodPlayer = ({apod, day, setDay, isLoading}: ApodPlayerProps) => {
    const {date, explanation, url, title, media_type} = apod;

    const prevHandler = () => {
        setDay((state) => {
            return state + 1;
        })
    }

    const nextHandler = () => {
        setDay(state => {
            if (state < 1) return 0;
            return state - 1;
        })
    }

    return (
        <>
            <div className="flex justify-center">
                <button onClick={nextHandler} className={"mx-4"} disabled={day === 0}>
                    <CircleChevronLeft
                        size={36}
                        className={`transition-all text-[var(--clr-violet-light)] ${day !== 0 ? "hover:scale-110 hover:text-[var(--clr-violet)] cursor-pointer" : ""} `}
                    />
                </button>
                <div className="h-[400px] w-full">
                    {isLoading ? (
                        media_type === "video" ?
                            (<iframe
                                height={"100%"}
                                width={"100%"}
                                src={url}
                                sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
                            >
                            </iframe>) :
                            (<img
                                src={url}
                                alt="apod-img"
                                className={"h-full w-full object-cover"}
                            />)
                    ) : (
                        <div className="h-[400px] w-full grid place-content-center">
                            <p>Is loading...</p>
                        </div>
                    )}
                </div>
                <button onClick={prevHandler} className={"mx-4"}>
                    <CircleArrowRight
                        size={36}
                        className="transition-all hover:scale-110  text-[var(--clr-violet-light)] hover:text-[var(--clr-violet)] cursor-pointer"
                    />
                </button>
            </div>
            <div className="capitalize text-center text-2xl">{date}</div>
            <div className="mx-auto w-full my8">
                <p className={"capitalize text-2xl mb-2"}>{title}</p>
                <p>{explanation}</p>
                <p className={"capitalize text-right"}>{date}</p>
            </div>
        </>
    );
};
