import * as React from "react";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../../assets/profilepage.jpg" 

function ProfilePage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    return (
        <div className="flex flex-col pb-8 bg-slate-50">
            <div className="flex flex-col justify-center py-5 w-full whitespace-nowrap bg-white shadow-sm leading-[140%] max-md:max-w-full">
                <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col text-3xl font-bold tracking-wide text-blue-700">
                            <div>MindConnect</div>
                            <div className="shrink-0 mt-1 h-2 bg-blue-700 rounded-md" />
                        </div>
                        <div className="flex gap-5 justify-between my-auto text-base tracking-normal text-gray-400">
                            <form className="h-[46px] w-[329px] flex gap-5 justify-between px-4 py-3 bg-gray-50 rounded-md border border-solid border-[color:var(--Grey-400,#98A2B3)]">
                                <input type="text" placeholder="Search" className="bg-inherit focus:outline-none" />
                                <button>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b5d5964bf4db3f26e21e766437185137c09c65fa7bbd13efaf38e1f51fdce5?"
                                        className="self-start w-5 aspect-square"
                                    />
                                </button>
                            </form>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbfdeba8f427f2d4aad1c13cab9c9129ba8ff7b882e296243a55d0e4493c5bc3?"
                                className="my-auto w-6 aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-16 pt-2 w-full text-base font-medium whitespace-nowrap bg-white border-b border-solid border-b-[color:var(--Grey-300,#D0D5DD)] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-w-[1226px] max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-start tracking-normal text-gray-500 leading-[140%] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a71e7bb61c82c7a05fc69313dd7c1daade4d130efa92d8350e5be85de1c40718?"
                                className="self-start w-5 aspect-square"
                            />
                            <div><Link>Home</Link></div>
                        </div>
                        <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/780a065607c7a1814fc14a6a96ae6ac152f4647a72e39cec40f9e23f209b9137?"
                                className="self-start w-5 aspect-square"
                            />
                            <div className="grow"><Link>Groups</Link></div>
                        </div>
                        <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e26e8c2454475d221beeea507ff118fe885382955d58782acdb046e1c86fbf4?"
                                className="self-start w-5 aspect-square"
                            />
                            <div><Link>Posts</Link></div>
                        </div>
                        <div className="flex flex-col flex-1 self-stretch">
                            <div className="flex gap-2 justify-center self-center px-4 py-3 rounded-md w-[97px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f154ae9547c6ff53a4c68775d0f7e094fed7cef117da5751626e630364a76698?"
                                    className="flex-1 shrink-0 w-full aspect-square"
                                />
                                <div><Link>Chat</Link></div>
                            </div>
                            <div className="shrink-0 mt-3 h-px bg-gray-300" />
                        </div>
                    </div>
                    <div className="flex gap-2 self-start text-center">
                        <div className="justify-center items-center px-2.5 py-1.5 h-10 text-white bg-blue-600 aspect-square leading-[150%] rounded-[200px]">
                            SA
                        </div>
                        <div className="grow my-auto tracking-normal text-gray-900 leading-[140%]">
                            Septor April
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center self-center mt-10 max-w-full text-3xl font-bold tracking-wide leading-10 text-white whitespace-nowrap min-h-[61px] w-[880px]">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="w-[880px] h-[61px] bg-blue-800 rounded-2xl relative justify-center items-center py-3 px-5 pr-16 pl-20 text-center rounded-2xl max-md:px-5 max-md:max-w-full">
                    Account
                </div>
            </div>
            <div className="self-center mt-8 max-w-full w-[739px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col justify-center p-4 w-full text-sm leading-5 bg-white max-md:mt-10">
                            <div className="text-blue-700"><Link>Edit Profile</Link></div>
                            <div className="mt-6 text-gray-900 whitespace-nowrap">
                                <Link>Change Password</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="my-auto w-px bg-gray-300 h-[643px]" />
                            <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                                <div className="self-start text-2xl font-semibold leading-8 text-gray-900">
                                    Edit Profile
                                </div>
                                <div className="self-start mt-1 text-sm leading-5 text-gray-400 whitespace-nowrap">
                                    Only you can view and edit your profile
                                </div>
                                <div className="flex relative flex-col justify-end items-end self-center pt-12 pb-1 pl-16 pr-2 mt-4 max-w-full aspect-[1.14] w-[220px] h-[193px] max-md:pl-5">
                                    <img
                                        loading="lazy"
                                        className="w-full h-full object-cover absolute inset-0 size-full z-0 aspect-square fill-blue-700 max-md:mt-10"
                                        src={image}
                                    />
                                    <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="fileInput" className="z-20">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/265e6381bb8a448ba7ac8ea2cc4eb3c75973d7caddba2906fb99812ac8c1c5a5?"
                                            className="mt-28 w-6 aspect-square fill-blue-700 max-md:mt-10 pr-10"
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </label>

                                </div>
                                <div className="flex flex-col px-10 py-8 mt-4 text-sm leading-5 text-gray-900 bg-white border border-solid border-[color:var(--Grey-300,#D0D5DD)] max-md:px-5 max-md:max-w-full">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Septor April" className="justify-center items-start py-3 pr-4 pl-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--Grey-300,#D0D5DD)] max-md:pr-5" />
                                    <label className="mt-4">Email</label>
                                    <input type="email" placeholder="septorapril007@gmail.com" className="justify-center items-start py-3 pr-4 pl-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--Grey-300,#D0D5DD)] max-md:pr-5" />
                                    <label className="mt-4">User Name</label>
                                    <input type="text" placeholder="Enter user name" className="justify-center items-start py-3 pr-4 pl-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--Grey-300,#D0D5DD)] max-md:pr-5" />
                                    <label className="mt-4">Mental Condition</label>
                                    <input type="text" placeholder="Prefer not to say" className="justify-center items-start py-3 pr-4 pl-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--Grey-300,#D0D5DD)] max-md:pr-5" />
                                    <Button type="submit" text="Save" className="text-white text-base font-semibold font-['Inter'] leading-snug tracking-tight justify-center items-center px-4 py-3 text-sm font-semibold mt-8 mr-10 leading-5 text-white whitespace-nowrap bg-blue-700 rounded-md max-w-[398px] max-h-[44px] " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfilePage;