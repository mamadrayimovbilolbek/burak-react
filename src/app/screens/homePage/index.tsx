import React, { useEffect } from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import PopularDishes from "./PopularDishes";
import Events from "./Events"; //@ts-ignore
import "../../../css/home.css"


export default function HomePage() {
    // Selector: Store => Data

    useEffect(() => {
        // Backend server data request => Data
        // Slice: Data => Store
    }, []);

    return <div className={"homepage"}>
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>
}