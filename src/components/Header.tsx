import {Link} from "react-router-dom";
import spaceLogo from "../assets/img/rocket-svgrepo-com.svg"
import type {ReactNode} from "react";

export const Header = (): ReactNode => {
    return (
        <header className={"test bg-black "}>
            <div className="align-element grid grid-cols-2 md:grid-cols-3 p-2">
                <Link to="/">
                    <h1 className={"mars-font text-lg pt-2 tracking-[.8rem] text-white"}>aphaSpace</h1>
                </Link>
                <Link to="/" className={"justify-self-end self-center md:justify-self-center"}>
                    <img src={spaceLogo} alt="logo" className="h-12 object-cover"/>
                </Link>
            </div>
        </header>
    );
};
