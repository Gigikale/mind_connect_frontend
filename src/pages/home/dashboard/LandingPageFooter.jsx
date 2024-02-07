import * as React from "react";

function LandingPageFooter(props) {
    return (
        <div className="flex flex-col justify-center pr-1.5 w-full bg-blue-700 max-md:max-w-full">
            <div className="flex flex-col items-start px-20 py-6 max-md:px-5 max-md:max-w-full">
                <div className="ml-5 text-2xl font-bold leading-8 text-slate-50 max-md:ml-2.5">
                    MindConnect
                </div>
                <div className="mt-1 ml-5 w-40 h-1.5 rounded-md bg-slate-50 max-md:ml-2.5" />
                <div className="flex gap-5 justify-between items-center self-stretch mx-5 mt-4 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div className="self-stretch my-auto text-sm leading-6 text-gray-900 whitespace-nowrap">
                        All rights reserved. ©2023 HR MindConnect.{" "}
                    </div>
                    <div className="flex-auto self-stretch my-auto text-xs tracking-wide leading-4 text-slate-50 max-md:max-w-full">
                        <span className="text-slate-700">
                            By creating an account you agree to our{" "}
                        </span>
                        <span className="text-slate-50">Terms and Conditions</span>,
                        <span className="text-slate-50"> Privacy Policies</span>,{" "}
                        <span className="text-slate-700">and</span>
                        <span className="text-slate-50"> Security Settings.</span>
                    </div>
                    <div className="flex flex-col self-stretch basis-0">
                        <div className="flex gap-4 pr-16 max-md:pr-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b10decfdcba767759bf9aa87580e612438bfb8c2dad65c3fefb68344b8ff4fcd?"
                                className="w-6 aspect-square"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77c0896190e57dc78d6568a96eee2b9006810462a62cd5c30ce6396e4456fa03?"
                                className="w-6 aspect-square"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67bf657709bcd851cc929b47f11e5f0157208b8426e558b863dc887153ea8ef5?"
                                className="w-6 aspect-square"
                            />
                        </div>
                        <div className="mt-2 text-base text-gray-900">
                            info@mindconnect.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageFooter