import * as React from "react";
import Backview from "../../../assets/backview.jpeg";
import Meditation from "../../../assets/meditation.jpeg";
import Garden from "../../../assets/garden.jpeg";
import Discuss from "../../../assets/discuss.jpeg";

function LandingPageBody1(props) {
    return (
        <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col my-8 w-full max-w-[1187px] max-md:max-w-full">
                <div className="self-center text-5xl font-bold text-gray-900 whitespace-nowrap leading-[67.2px] max-md:text-4xl">
                    What We Provide
                </div>
                <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full ">
                            <div className="flex flex-col grow items-center max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={Garden}
                                    className="w-60 max-w-full aspect-square rounded-full"
                                />
                                <div className="mt-4 text-2xl font-bold leading-8 text-blue-700 whitespace-nowrap">
                                    Safe Space
                                </div>
                                <div className="self-stretch mt-1 text-sm leading-5 text-slate-500">
                                    Share, connect, and provide support in a safe space for
                                    mental health. A community of empatics where you get to
                                    unburden your mind.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={Discuss}
                                    className="w-60 max-w-full aspect-square rounded-full"
                                />
                                <div className="mt-4 text-2xl font-bold leading-8 text-blue-700">
                                    Share
                                </div>
                                <div className="self-stretch mt-1 text-sm leading-5 text-slate-500">
                                    Share, connect, and provide support in a safe space for
                                    mental health. A community of empatics where you get to
                                    unburden your mind.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={Backview}
                                    className="self-center w-60 max-w-full aspect-square rounded-full"
                                />
                                <div className="mt-4 text-2xl font-bold leading-8 text-blue-700 whitespace-nowrap">
                                    Supportive Community
                                </div>
                                <div className="mt-1 text-sm leading-5 text-slate-500">
                                    Share, connect, and provide support in a safe space for
                                    mental health. A community of empatics where you get to
                                    unburden your mind.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={Meditation}
                                    className="w-60 max-w-full aspect-square rounded-full"
                                />
                                <div className="mt-4 text-2xl font-bold leading-8 text-blue-700">
                                    Learn
                                </div>
                                <div className="self-stretch mt-1 text-sm leading-5 text-slate-500">
                                    Share, connect, and provide support in a safe space for
                                    mental health. A community of empatics where you get to
                                    unburden your mind.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageBody1