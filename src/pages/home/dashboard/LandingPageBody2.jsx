import * as React from "react";
import Wereglad from "../../../assets/we'reglad.jpeg";

function LandingPageBody2(props) {
    return (
        <div className="pr-1.5 w-full bg-sky-50 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        srcSet={Wereglad}
                        className="grow w-full aspect-[1.18] max-md:max-w-full"
                    />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow justify-center items-center px-16 py-12 text-gray-900 max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col mt-8 max-w-full w-[505px]">
                            <div className="self-center text-5xl font-bold whitespace-nowrap leading-[67.2px] max-md:text-4xl">
                                About Us
                            </div>
                            <div className="mt-6 text-base tracking-normal leading-6 max-md:max-w-full">
                                MindConnect is a social network for mental health. It is a
                                digital platform designed to provide a safe and supportive
                                community for people to share their mental health and
                                experiences and connect with others going through similar
                                challenges. The platform will allow users to learn more about
                                their symptoms, share their stories and exchange tips to stay
                                healthy.
                                <br />
                                <br />
                                Mental health conditions affect millions of people worldwide.
                                Many people struggle to find the support they need to cope
                                with their conditions, and stigma often prevents them from
                                seeking help. There is a need for a safe and confidential
                                platform where people can express their thoughts and feelings
                                without fear of judgment or stigma.
                                <br />
                                <br />
                                The app has strong privacy and security measures in place to
                                protect user’s personal information and prevent unauthorized
                                access.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageBody2