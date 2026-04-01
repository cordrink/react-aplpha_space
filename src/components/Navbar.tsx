import {LinkDesktop, LinkMobile} from "@/components";

export const Navbar = () => {
    return (
        <nav className={"bg-black"}>
            <div className={"align-element py-5"}>
                <LinkMobile/>
                <LinkDesktop/>
            </div>
        </nav>
    );
};
