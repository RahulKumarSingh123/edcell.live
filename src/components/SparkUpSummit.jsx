import React, { useState,useEffect } from "react";
import FAQ from "./sparkupsummit/FAQ";
import {Loader} from "./sparkupsummit/Loader";
import Navbar from "./sparkupsummit/Navbar"
import Home from "./sparkupsummit/Home";
import {About} from "./sparkupsummit/About";
import {Vision} from "./sparkupsummit/Vision";
import Highlights from "./sparkupsummit/Highlights";
import Events from "./sparkupsummit/Events";
import Footer from "./sparkupsummit/Footer";
import Members from "./sparkupsummit/Members";
import Sponsors from "./sparkupsummit/Sponsors"
import Guests from "./sparkupsummit/Guests"

export default function SparkUpSummit({screenLoading2,setScreenLoading2}) {
    // const [screenLoading, setScreenLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setScreenLoading2(false);
        }, 7000);
    }, []);

    return (
        <>
            {(screenLoading2)
                ? <Loader/>
                : <div className="font-anton overflow-x-hidden">
                    <Navbar />
                    <Home />
                    <About />
                     <br />
                      <br />
                      <br />
                    <Vision />
                    <br />
                    <br />
                    <Events />
                    <br />
                    <br />
                    <Guests/>
                    <Highlights />
                    <Sponsors />
                    <Members />
                    <br />
                    <br />
                    <FAQ />
                    <br />
                    <br />
                    <Footer />
                </div>
            }
        </>

    )
}
