import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {type Link, links} from "@/utils/links.ts";
import {NavLink} from "react-router-dom";
import {TextAlignStart} from "lucide-react";

export const LinkMobile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={"lg:hidden"} asChild>
                <Button className="bg-white text-black">
                    <TextAlignStart/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"lg:hidden"}>
                {links.map((link: Link, index: number) => {
                    const {ref, label} = link;
                    return (
                        <DropdownMenuItem key={index}>
                            <NavLink
                                to={ref}
                                className={({isActive}) => `capitalize tracking-wide font-light ${isActive ? "text-primary" : ""}`}
                            >
                                {label}
                            </NavLink>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
