import * as React from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


function ForgotPassword(props) {
    return (
        <div className="flex justify-center items-center px-16 py-12 text-base leading-6 bg-white max-md:px-5">
            <div className="flex flex-col justify-end p-12 mt-36 max-w-full bg-white rounded-3xl shadow-sm w-[479px] max-md:px-5 max-md:mt-10">
                <div className="self-center text-2xl font-bold leading-6 whitespace-nowrap text-sky-950">
                    Forgot Password
                </div>
                <div className="mt-10 text-sm leading-5 text-gray-900">
                    Enter the email associated with your account and we’ll send an email
                    with instructions to reset your password
                </div>
                <label className="mt-4 tracking-normal text-sky-950">Email</label>
                <div className="flex gap-2 justify-between px-4 py-3 mt-2 text-sm leading-5 text-gray-400 bg-white rounded-md border border-solid border-[color:var(--Grey-400,#98A2B3)]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcd41277efd2447f0e09a62e681b87572309ae7b4e5c0eb584c8294d9ad8e21?"
                        className="w-5 aspect-square"
                    />
                    <input type="email" placeholder="Enter your email" className="flex-auto focus:outline-none" />
                </div>
                <Button type="submit" text="Reset Password" className="text-white text-base font-semibold font-['Inter'] leading-snug tracking-tight justify-center items-center px-16 py-3 mt-8 mb-10 font-semibold tracking-normal text-white whitespace-nowrap bg-blue-700 rounded-md" />
                <div className="self-center mt-10 mb-12 font-medium tracking-normal text-blue-700 whitespace-nowrap">
                    <Link>Back to Login</Link>
                </div>
            </div>
        </div>
    );
}


export default ForgotPassword;