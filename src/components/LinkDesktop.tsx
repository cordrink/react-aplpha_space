import {type Link, links} from "@/utils/links.ts";
import {NavLink} from "react-router-dom";

export const LinkDesktop = () => {
    return (
        <div className={"hidden w-full lg:flex gap-x-[5rem] justify-center items-center text-white"}>
            {links.map((link: Link, index: number) => {
                const {ref, label} = link;
                return (
                    <NavLink
                        to={ref}
                        className={({isActive}) => `capitalize tracking-wide ${isActive ? "underline text-xl" : ""}`}
                        key={index}
                    >
                        {label}
                    </NavLink>
                )
            })}
        </div>
    );
};
