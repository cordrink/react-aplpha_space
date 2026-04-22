import {Title} from "@/components";
import {Link} from "react-router-dom";
import {CirclePlay} from "lucide-react";

export const NewsLauncherHeader = () => {
    return (
        <div className={"flex justify-between items-center"}>
            <Title text={"Recent news"}/>
            <p className={"font-bold ml-auto mr-2"}>More news</p>
            <Link to={"news"}>
                <CirclePlay color={"var(--clr-violet)"} className={"transition-all hover:scale-150"}/>
            </Link>
        </div>
    );
};
