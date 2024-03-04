import * as React from "react";
import SidebarImage from '../../assets/SidebarImage.png'


function Sidebar(props) {
  return (
    <div className="flex flex-col px-5 pt-10 pb-14 mx-auto w-full text-base leading-6 bg-white shadow-sm max-w-[480px] mt-20 mr-24">
      <div className="flex flex-col px-2 py-4 w-full bg-white rounded-md shadow-md border-t ">
        <div className="self-center font-semibold tracking-normal text-center text-blue-600">
          Suggestions
        </div>
        <div className="shrink-0 mt-6 h-px bg-zinc-100" />
        <div className="mt-8 text-2xl font-bold text-center text-gray-900">
          Popular Groups
        </div>
        <div className="mt-2 text-sm leading-5 text-gray-400">
          Here is a list of some very active groups you might be interested in
          based on your location and engagements.
        </div>
        <div className="flex gap-5 justify-between py-3 mt-6 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Meditation</div>
          <div className="font-medium text-blue-700">Join</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">You Are What You Eat</div>
          <div className="font-medium text-blue-700">Join</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jos Crisis PTSD</div>
          <div className="font-medium text-blue-700">Join</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Grief & Loss Hugs</div>
          <div className="font-medium text-blue-700">Join</div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet={SidebarImage}
        className="mt-16 w-full aspect-[2.38]"
      />
      <div className="flex flex-col px-2 py-4 mt-16 w-full bg-white rounded-2xl shadow-sm">
        <div className="self-center font-semibold tracking-normal text-center text-blue-600">
          Messages
        </div>
        <div className="shrink-0 mt-6 h-px bg-zinc-100" />
        <div className="mt-8 text-2xl font-bold text-center text-gray-900">
          {" "}
          Chats
        </div>
        <div className="mt-2 text-sm leading-5 text-gray-400 whitespace-nowrap">
          Here is a list of people you chat with frequently.
        </div>
        <div className="flex gap-5 justify-between py-3 mt-6 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-emerald-500">Online</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-gray-400">Offline</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-emerald-600">Online</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-gray-400">Offline</div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;


