import {Link} from "react-router-dom";

export const SpaceXLauncher = () => {
    return (
        <article className="test w-full h-[40vh] spacex-bg">
            <div className="align-element text-white p-2 mt-20">
                <p className={"font-bold text-4xl capitalize"}>More about SpaceX</p>
                <button type={"button"} className={"mt-4 slider-btn"}>
                    <Link to="/spacex">Explore</Link>
                </button>
            </div>
        </article>
    );
};
