import * as React from "react";

function OnboardingHeader(props) {
  return (
    <div className="flex flex-col pb-12 whitespace-nowrap bg-slate-50">
      <div className="flex flex-col justify-center py-5 w-full bg-white shadow-sm leading-[140%] max-md:max-w-full">
        <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col text-3xl font-bold tracking-wide text-blue-700">
              <div>MindConnect</div>
              <div className="shrink-0 mt-1 h-2 bg-blue-700 rounded-md" />
            </div>
            <div className="flex gap-5 justify-between my-auto text-base tracking-normal text-gray-400">
              <div className="flex gap-5 justify-between px-4 py-3 bg-gray-50 rounded-md border border-solid border-[color:var(--Grey-400,#98A2B3)]">
                <div>Search</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b5d5964bf4db3f26e21e766437185137c09c65fa7bbd13efaf38e1f51fdce5?"
                  className="self-start w-5 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbfdeba8f427f2d4aad1c13cab9c9129ba8ff7b882e296243a55d0e4493c5bc3?"
                className="my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-2 w-full text-base font-medium bg-white border-b border-solid border-b-[color:var(--Grey-300,#D0D5DD)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1226px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start tracking-normal text-gray-500 leading-[140%] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a71e7bb61c82c7a05fc69313dd7c1daade4d130efa92d8350e5be85de1c40718?"
                className="self-start w-5 aspect-square"
              />
              <div>Home</div>
            </div>
            <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/780a065607c7a1814fc14a6a96ae6ac152f4647a72e39cec40f9e23f209b9137?"
                className="self-start w-5 aspect-square"
              />
              <div className="grow">Groups</div>
            </div>
            <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e26e8c2454475d221beeea507ff118fe885382955d58782acdb046e1c86fbf4?"
                className="self-start w-5 aspect-square"
              />
              <div>Posts</div>
            </div>
            <div className="flex flex-col flex-1 self-stretch">
              <div className="flex gap-2 justify-center self-center px-4 py-3 rounded-md w-[97px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f154ae9547c6ff53a4c68775d0f7e094fed7cef117da5751626e630364a76698?"
                  className="flex-1 shrink-0 w-full aspect-square"
                />
                <div>Chat</div>
              </div>
              <div className="shrink-0 mt-3 h-px bg-gray-300" />
            </div>
          </div>
          <div className="flex gap-2 self-start text-center">
            <div className="justify-center items-center px-2.5 h-10 text-white bg-blue-600 aspect-square leading-[150%] rounded-[200px]">
              SA
            </div>
            <div className="grow my-auto tracking-normal text-gray-900 leading-[140%]">
              Septor April
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingHeader;





