import {Link, useRouteError} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

export const ErrorMain = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <div className={"section flex flex-col gap-10 items-start"}>
            <h4>There was an error...</h4>
            <Button asChild size="lg" variant="default">
                <Link to="/">Back home</Link>
            </Button>
        </div>
    );
};
