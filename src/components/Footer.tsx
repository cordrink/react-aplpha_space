import {Link} from "react-router-dom";
import type {ReactNode} from "react";

export const Footer = (): ReactNode => {
    return (
        <footer className={"bg-black text-white"}>
            <div className={"align-element py-5 min-h-[15vh] flex flex-col items-center justify-center"}>
                <p className={"my-2"}>- 2026 -</p>
                <p className={"mars-font text-2xl my-4"}>alphaSpace, by Cod - Rink</p>
                <p className={"underline"}>resources:</p>
                <p>
                    <Link to={"https://www.nasa.gov/"} target={"_blank"}>Nasa</Link> |
                    <Link to={"https://api.nasa.gov/"} target={"_blank"}> Nasa API</Link> |
                    <Link to={"https://www.youtube.com/@NASA/videos"} target={"_blank"}> Nasa youtube channel</Link>
                </p>
                <p>
                    <Link to={"https://science.nasa.gov/mission/webb/"} target={"_blank"}>JWST</Link> |
                    <Link to={"https://jwstapi.com/"} target={"_blank"}> JWST API</Link>
                </p>
                <p>
                    <Link to={"https://www.esa.int/"} target={"_blank"}>ESA</Link>
                </p>
                <p>
                    <Link to={"https://www.spacex.com/"} target={"_blank"}>SpaceX</Link> |
                    <Link to={"https://docs.spacexdata.com/"} target={"_blank"}> SpaceX API</Link>
                </p>
                <p>
                    <Link to={"https://www.datastro.eu/pages/home/"} target={"_blank"}>Datastro API</Link>
                </p>
                <p>
                    <Link to={"https://spaceflightnewsapi.net/"} target={"_blank"}>SNAPI API</Link>
                </p>
            </div>
        </footer>
    );
};
