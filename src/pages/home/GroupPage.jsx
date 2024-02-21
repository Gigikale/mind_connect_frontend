import * as React from "react";
import DescriptionFormField from "../../components/formFields/DescriptionFormField";
import TextFormField from "../../components/formFields/TextFormField";
import { useState } from "react";
import { Button } from "../../components/Button";

function GroupPage() {
  const [description, setDescription] = useState("");
  const [groupName, setGroupName] = useState("")

  return (
    <div className="flex flex-col pb-12 bg-slate-50">
      <div className="flex flex-col justify-center py-5 w-full whitespace-nowrap bg-white shadow-sm leading-[140%] max-md:max-w-full">
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f53b3a087804c13ce6edad2e81d157bb310692d66ee04262dd094f4915c5902?"
                className="my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 w-full text-base font-medium whitespace-nowrap bg-white border-b border-solid border-b-[color:var(--Grey-300,#D0D5DD)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between pt-2 w-full max-w-[1225px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start tracking-normal text-gray-500 leading-[140%] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c78ee82b6604df9902003b05396b39f69974522e2b5d52e8e58f9e7e51470224?"
                className="self-start w-5 aspect-square"
              />
              <div>Home</div>
            </div>
            <div className="flex flex-col flex-1 self-stretch text-blue-700">
              <div className="flex gap-2 justify-between px-4 py-3 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b52f41689174de823c15743ce3d58b9c5b8a6feb25347f0b603597f7f5694d0?"
                  className="self-start w-5 aspect-square"
                />
                <div className="grow">Groups</div>
              </div>
              <div className="shrink-0 mt-3 bg-blue-700 h-[3px]" />
            </div>
            <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20efe758492ef039b1e7839013f655352b6551313582beab0b8defe7d2bf2756?"
                className="self-start w-5 aspect-square"
              />
              <div>Posts</div>
            </div>
            <div className="flex gap-2 justify-center px-4 py-3 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d21158c457d9328a303428701eb98d0b7073ef3312e49f6eb9e1156ce3d7b5d4?"
                className="self-start w-5 aspect-square"
              />
              <div>Chat</div>
            </div>
          </div>
          <div className="flex gap-2 my-auto text-center">
            <div className="justify-center items-center px-2.5 h-10 text-white bg-blue-600 aspect-square leading-[150%] rounded-[200px]">
              SA
            </div>
            <div className="grow my-auto tracking-normal text-gray-900 leading-[140%]">
              Septor April
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center self-center px-4 py-8 w-full max-w-[1266px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 py-8 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
                Popular Groups
              </div>
              <div className="flex flex-col px-6 pt-4 pb-7 mt-6 bg-gray-50 rounded-2xl border-b border-solid shadow-sm border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl leading-8 text-blue-700">
                  Meditation Group
                </div>
                <div className="flex gap-5 justify-between self-start mt-1 text-sm leading-5 text-gray-400">
                  <div className="flex-auto">Created by: John Johnson</div>
                  <div>4m, 3d ago.</div>
                </div>
                <div className="flex flex-col px-2 py-1 mt-6 bg-white rounded-2xl max-md:max-w-full">
                  <div className="text-base font-medium tracking-normal leading-6 text-gray-400 max-md:max-w-full">
                    Just because meditation has helped a lot with my
                    Schizophrenia. I would like to share the techniques that
                    worked for me with you. If you’ve been finding it difficult
                    to handle you schizophrenia, please join us, and if you have
                    ideas and helpful techniques, please join. Everyone with any
                    form of mental health condition is also welcomed to join{" "}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                    <div>40 Members</div>
                    <div>278 Posts</div>
                  </div>
                </div>
                <div className="self-end mt-4 mr-4 text-base font-medium tracking-normal leading-6 text-blue-700 whitespace-nowrap max-md:mr-2.5">
                  Join group
                </div>
              </div>
              <div className="flex flex-col px-6 pt-4 pb-7 mt-4 bg-gray-50 rounded-2xl border-b border-solid shadow-sm border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl leading-8 text-blue-700">
                  Meditation Group
                </div>
                <div className="flex gap-5 justify-between self-start mt-1 text-sm leading-5 text-gray-400">
                  <div className="flex-auto">Created by: John Johnson</div>
                  <div>4m, 3d ago.</div>
                </div>
                <div className="flex flex-col px-2 py-1 mt-6 bg-white rounded-2xl max-md:max-w-full">
                  <div className="text-base font-medium tracking-normal leading-6 text-gray-400 max-md:max-w-full">
                    Just because meditation has helped a lot with my
                    Schizophrenia. I would like to share the techniques that
                    worked for me with you. If you’ve been finding it difficult
                    to handle you schizophrenia, please join us, and if you have
                    ideas and helpful techniques, please join. Everyone with any
                    form of mental health condition is also welcomed to join{" "}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                    <div>40 Members</div>
                    <div>278 Posts</div>
                  </div>
                </div>
                <div className="self-end mt-4 mr-4 text-base font-medium tracking-normal leading-6 text-blue-700 whitespace-nowrap max-md:mr-2.5">
                  Exit group
                </div>
              </div>
              <div className="flex flex-col px-6 pt-4 pb-7 mt-4 bg-gray-50 rounded-2xl border-b border-solid shadow-sm border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl leading-8 text-blue-700">
                  Meditation Group
                </div>
                <div className="flex gap-5 justify-between self-start mt-1 text-sm leading-5 text-gray-400">
                  <div className="flex-auto">Created by: John Johnson</div>
                  <div>4m, 3d ago.</div>
                </div>
                <div className="flex flex-col px-2 py-1 mt-6 bg-white rounded-2xl max-md:max-w-full">
                  <div className="text-base font-medium tracking-normal leading-6 text-gray-400 max-md:max-w-full">
                    Just because meditation has helped a lot with my
                    Schizophrenia. I would like to share the techniques that
                    worked for me with you. If you’ve been finding it difficult
                    to handle you schizophrenia, please join us, and if you have
                    ideas and helpful techniques, please join. Everyone with any
                    form of mental health condition is also welcomed to join{" "}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                    <div>40 Members</div>
                    <div>278 Posts</div>
                  </div>
                </div>
                <div className="self-end mt-4 mr-4 text-base font-medium tracking-normal leading-6 text-blue-700 whitespace-nowrap max-md:mr-2.5">
                  Join group
                </div>
              </div>
              <div className="self-start mt-8 text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
                More Groups
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-6 max-w-full leading-[140%] w-[499px] max-md:flex-wrap">
                <div className="flex-auto text-2xl text-gray-900">
                  You Are What You Eat
                </div>
                <div className="my-auto text-base font-medium tracking-normal text-blue-700">
                  Join group
                </div>
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-5 max-w-full leading-[140%] w-[499px] max-md:flex-wrap">
                <div className="flex-auto text-2xl text-gray-900">
                  Jos Crisis PTSD
                </div>
                <div className="my-auto text-base font-medium tracking-normal text-blue-700">
                  Exit group
                </div>
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-5 max-w-full leading-[140%] w-[499px] max-md:flex-wrap">
                <div className="flex-auto text-2xl text-gray-900">
                  Grief & Loss Hugs
                </div>
                <div className="my-auto text-base font-medium tracking-normal text-blue-700">
                  Join group
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-end self-stretch px-6 py-8 my-auto w-full bg-gray-50 rounded-2xl shadow-sm max-md:px-5 max-md:mt-10">
              <div className="self-center text-2xl font-bold leading-8 text-gray-900 whitespace-nowrap">
                Create a new group here
              </div>
              <div className="mt-14 text-sm font-medium leading-5 text-neutral-800 max-md:mt-10">
                Group name
              </div>
              <TextFormField
                id={"name"}
                type={"text"}
                placeHolder={"Enetr group name"}
                onValueChanged={(e) => setGroupName(e)}
              />
              <div className="flex flex-col mt-4 whitespace-nowrap bg-white">
                <div className="text-sm font-medium leading-5 text-neutral-800">
                  About
                </div>
                <DescriptionFormField
                  id="description"
                  title="About"
                  placeHolder="write group description"
                  onValueChanged={(e) => setDescription(e)}
                />
              </div>
                <Button text="Create a new group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GroupPage;
