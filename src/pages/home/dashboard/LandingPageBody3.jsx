import * as React from "react";
import { AuthLinkButton } from "../../../components/Button"

function LandingPageBody3(props) {
    return (
        <div className="flex flex-col justify-center w-full text-base leading-6 bg-gray-100 max-md:max-w-full">
            <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-center my-8 w-full max-w-[1193px] max-md:max-w-full">
                    <div className="text-5xl font-bold text-gray-900 max-md:max-w-full max-md:text-4xl">
                        Enjoy Privacy and Inclusivity
                    </div>
                    <div className="self-stretch mt-8 tracking-normal leading-6 text-center text-slate-500 max-md:max-w-full">
                        MindConnect is a social network for mental health. It is a digital
                        platform designed to provide a safe and supportive community for
                        people to share their mental health and experiences and connect
                        with others going through similar challenges. The platform will
                        allow users to learn more about their symptoms, share their
                        stories and exchange tips to stay healthy.
                    </div>

                    <AuthLinkButton
                        title={"Click here to join us"}
                        className="justify-center px-4 py-3 mt-6 font-medium tracking-normal text-white whitespace-nowrap bg-blue-700 rounded-md border border-solid border-[color:var(--Blue-700,#175CD3)]"
                        isWhite={true}
                        to=""
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPageBody3