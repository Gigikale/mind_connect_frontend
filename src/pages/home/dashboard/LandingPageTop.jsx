import * as React from "react";
import Hands from "../../../assets/hands.jpeg";
import MentalHW from "../../../assets/mentalhealthwhite.png";
import { AuthLinkButton } from "../../../components/Button";

function LandingPageTop(props) {
    return (
        <div className="px-20 py-12 w-full bg-sky-50 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center self-stretch my-auto text-base leading-6 max-md:mt-10 max-md:max-w-full">
                        <div className="text-5xl font-bold text-gray-900 max-md:max-w-full max-md:text-4xl">
                            Mental Health Matters
                        </div>
                        <div className="mt-1 text-sm leading-5 text-slate-500 max-md:max-w-full">
                            Share, connect, and provide support in a safe space for mental
                            health. A community of empatics where you get to unburden your
                            mind.
                        </div>
                        <div className="mt-20 tracking-normal leading-6 text-gray-900 max-md:mt-10 max-md:max-w-full">
                            Mental health conditions affect millions of people worldwide.
                            Many people struggle to find the support they need to cope with
                            their conditions, and stigma often prevents them from seeking
                            help.
                        </div>
                        <br />
                        <div className="flex gap-5 justify-between pr-7 mt-2 max-w-full font-medium tracking-normal whitespace-nowrap w-[314px] max-md:pr-5">
                            
                            <AuthLinkButton
                                title={"Sign In"}
                                className="justify-center px-4 py-3 text-blue-700 rounded-md border border-solid border-[color:var(--Blue-700,#175CD3)]"
                                isWhite={false}
                                to=""
                            />
                            <AuthLinkButton
                                title={"Register Here"}
                                className="justify-center px-4 py-3 text-white bg-blue-700 rounded-md border border-solid border-[color:var(--Blue-700,#175CD3)]"
                                isWhite={true}
                                to=""
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col justify-end items-center self-stretch px-16 pt-12 pb-4 my-auto min-h-[640px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet={Hands}
                            className="object-cover absolute inset-0 size-full"
                        />
                        <img
                            loading="lazy"
                            srcSet={MentalHW}
                            className="mt-96 max-w-full aspect-[2.38] w-[400px] max-md:mt-10 z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageTop