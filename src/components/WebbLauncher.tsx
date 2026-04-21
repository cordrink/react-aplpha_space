import {Link} from "react-router-dom";

export const WebbLauncher = () => {
    return (
        <article className="test w-full h-[40vh] p-10 webb-bg">
            <div className="align-element text-white p-2 flex flex-col ">
                <p className={"font-bold text-4xl capitalize max-w-[40%] self-end text-right"}>
                    The most recent james webb images
                </p>
                <button type={"button"} className={"slider-btn mt-4 self-end"}>
                    <Link to={"/webb"}>Explore</Link>
                </button>
            </div>
        </article>
    );
};
