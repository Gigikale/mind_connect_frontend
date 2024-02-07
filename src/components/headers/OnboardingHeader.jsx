import * as React from "react";

function OnboardingHeader(props) {
  return (
    <div className="flex justify-center items-center px-16 whitespace-nowrap leading-[140%] max-md:px-5">
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4690c87b58019dc0c24abb956a5b1a163cd3f9e8c393ae9c6a75399c8d82b18d?"
            className="my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
export default OnboardingHeader;


