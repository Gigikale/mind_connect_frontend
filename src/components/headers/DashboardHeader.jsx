import * as React from "react";
import { AuthLinkButton } from "../Button";

function DashboardHeader(props) {
  return (
    <div className="flex flex-col justify-center px-16 pt-6 pb-3 w-full whitespace-nowrap bg-white shadow-sm leading-[140%] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between mx-10 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col text-3xl font-bold tracking-wide text-blue-700">
          <div>MindConnect</div>
          <div className="shrink-0 mt-1 h-2 bg-blue-700 rounded-md" />
        </div>

        <AuthLinkButton
          title={"Sign Up"}
          className="justify-center px-4 py-3 my-auto text-base font-medium tracking-normal text-white bg-blue-700 rounded-md border border-solid border-[color:var(--Blue-700,#175CD3)]"
          isWhite={true}
          to=""
        />
      </div>
    </div>

  );
}
export default DashboardHeader;