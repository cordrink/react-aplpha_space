import type {Rocket} from "@/utils/types.ts";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export const RocketCard = ({rocket, index}: { rocket: Rocket, index: number }) => {
    const {
        rocket_name,
        flickr_images,
        cost_per_launch,
        description,
        diameter,
        height,
        mass,
        engines,
        first_flight,
        stages,
        first_stage,
        second_stage,
        payload_weights
    } = rocket;

    const {meters: diam} = diameter;
    const {meters: hght} = height;
    const {kg} = mass;

    const getOrderClasses = () => {
        return index % 2 === 0 ?
            {header: "md:order-1", content: "md:order-2"} :
            {header: "md:order-2", content: "md:order-1"
        };
    }

    return (
        <Card className="bg-muted my-6 grid grid-cols-1 md:grid-cols-2">
            <CardHeader className={`order-1 ${getOrderClasses().header}`}>
                <CardTitle className={"text-2xl my-2"}>{rocket_name}</CardTitle>
                <CardDescription>
                    <img src={flickr_images[0]} alt="card-picture" className="h-full w-full object-cover"/>
                </CardDescription>
            </CardHeader>
            <CardContent className={`order-2 ${getOrderClasses().content}`}>
                <p>Diameter: <span>{diam}</span>m</p>
                <p>Height: <span>{hght}</span>m</p>
                <p>Mass: <span>{kg}</span>kgs</p>
                <p>Firs flight: <span>{first_flight}</span></p>
                <p>cost per launch: <span>{cost_per_launch}</span>$</p>
                <p className={"mt-2"}>Payloads:</p>
                {payload_weights.map((p) => (
                    <p>{p.name}: <span>{p.kg}</span>kgs</p>
                ))}
                <p className={"mt-2"}>Engines:</p>
                <p>{engines.number}&nbsp; {engines.type}($)</p>
                <p>Props: {engines.propellant_1} + {engines.propellant_2}</p>
                <p>ISP: sea: {engines.isp.sea_level} / vac: {engines.isp.vacuum}</p>
                <p>Thrust: sea {engines.thrust_sea_level.kN}KNs / vac:{engines.thrust_vacuum.kN} /KNS</p>
                <p>Thrust to weight: {engines.thrust_to_weight}</p>
                <p className={"mt-2"}>stages:</p>
                <p>{stages}</p>
                <p>
                    First stage:&nbsp;
                    <span>Reusable: {first_stage.reusable ? "Yes" : "No"}</span>&nbsp;
                    <span>Engines: {first_stage.engines}</span>
                </p>
                <p>
                    Second stage:&nbsp;
                    <span>Reusable: {second_stage.reusable ? "Yes" : "No"}</span>&nbsp;
                    <span>Engines: {second_stage.engines}</span>
                </p>
            </CardContent>
            <CardFooter className={"order-3 md:col-span-2"}>{description}</CardFooter>
        </Card>
    );
};
