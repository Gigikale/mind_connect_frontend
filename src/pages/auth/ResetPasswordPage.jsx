import * as React from "react";
import { Button } from "../../components/Button";

function ResetPasswordPage() {
    return (
        <div className="flex justify-center items-center px-16 py-12 text-base leading-6 bg-white text-sky-950 max-md:px-5">
            <div className="flex flex-col justify-end p-12 mt-36 max-w-full bg-white rounded-3xl border border-solid shadow-sm border-[color:var(--Grayscale-Label-BG,#EAEBEC)] w-[479px] max-md:px-5 max-md:mt-10">
                <div className="self-center text-2xl font-bold leading-6 whitespace-nowrap">
                    Reset Password
                </div>
                <label className="mt-10 tracking-normal">New Password</label>
                <div className="flex gap-2 justify-between px-4 py-3 mt-2 text-sm leading-5 text-gray-400 bg-white rounded-md border border-solid border-[color:var(--Grey-400,#98A2B3)]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbeaab911313126a1823a52dda529fe2be194ecb9ce903b97ca0a45da99f9923?"
                        className="w-5 aspect-square"
                    />
                    <input type="password" placeholder="Enter your new password" className="flex-auto focus:outline-none" />
                </div>
                <label className="mt-4 tracking-normal">Confirm Password</label>
                <div className="flex gap-2 justify-between px-4 py-3 mt-2 text-sm leading-5 text-gray-400 bg-white rounded-md border border-solid border-[color:var(--Grey-400,#98A2B3)]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbeaab911313126a1823a52dda529fe2be194ecb9ce903b97ca0a45da99f9923?"
                        className="w-5 aspect-square"
                    />
                    <input type="password" placeholder="Confirm password" className="flex-auto focus:outline-none" />
                </div>
                <Button type="submit" text="Reset Password" className="text-white text-base font-semibold font-['Inter'] leading-snug tracking-tight w-[383px] px-4 py-3 bg-blue-700 mt-10 rounded-md justify-center items-center gap-2 inline-flex" />
            </div>
        </div>
    );
}

export default ResetPasswordPage;


