import * as React from "react";
import LangingPageHeader from "../../../components/headers/DashboardHeader";
import LandingPageTop from "./LandingPageTop";
import LandingPageBody1 from "./LandingPageBody1";
import LandingPageBody2 from "./LandingPageBody2";
import LandingPageBody3 from "./LandingPageBody3";
import LandingPageFooter from "./LandingPageFooter";

function LandingPage(props) {
    return (
        <div className="flex flex-col justify-center bg-white">

            <LangingPageHeader />

            <LandingPageTop />
            
            <LandingPageBody1 />

            <LandingPageBody2 />

            <LandingPageBody3 />

            <LandingPageFooter />
        </div>
    );
}

export default LandingPage