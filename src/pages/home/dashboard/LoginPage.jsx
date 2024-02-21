import * as React from "react";
import LoginPageImage from '../../../assets/cloud.jpeg';
import LoginBgImage from "../../../assets/cloudblur.jpg"

function LoginPage(props) {
  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center items-end py-12 pr-3 pl-16 blur-[15px] min-h-[1024px] max-md:pl-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet={LoginBgImage}
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative rounded-full h-[11px] mt-[885px] w-[11px] max-md:mt-10" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-end mt-11 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col mr-6 max-w-full w-[678px] max-md:mr-2.5">
                    <div className="flex gap-5 justify-between items-start max-w-full w-[324px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18243a283da54ae1a80ea54a6755ac96a1e497a3eeec0bb965c656fea37e6d51?"
                        className="flex-1 shrink-0 w-full aspect-square fill-indigo-400 fill-opacity-50"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9845a1ae5c7002fae6ea24dc5c034c2e4dabfa660185065d4c9f690957af58d?"
                        className="flex-1 shrink-0 mt-3 w-full aspect-[0.88] fill-indigo-400 fill-opacity-40"
                      />
                    </div>
                    <div className="self-end mt-3.5 w-11 bg-indigo-400 bg-opacity-10 h-[21px]" />
                  </div>
                  <div className="z-10 self-stretch px-px mt-1 bg-white shadow-sm max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden relative flex-col grow items-start pt-6 pr-16 pb-12 pl-6 text-3xl font-bold tracking-wide leading-10 text-blue-100 whitespace-nowrap min-h-[800px] max-md:px-5 max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet={LoginPageImage}
                            className="object-cover absolute inset-0 size-full"
                          />
                          <div className="flex relative flex-col max-w-full shadow-sm w-[215px]">
                            <div>MindConnect</div>
                            <div className="shrink-0 mt-1 h-2 bg-blue-700 rounded-md" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 justify-between self-stretch my-auto text-sm leading-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                          <div className="flex flex-col flex-1 px-5 max-md:max-w-full">
                            <div className="text-3xl font-bold tracking-wide leading-10 text-gray-900 max-md:max-w-full">
                              Hi, Welcome back
                            </div>
                            <div className="mt-1 h-2 bg-blue-700 rounded-md w-[244px]" />
                            <div className="mt-24 font-medium text-neutral-800 max-md:mt-10 max-md:max-w-full">
                              Email
                            </div>
                            <div className="justify-center items-start py-3 pr-16 pl-3 mt-1 text-base leading-6 whitespace-nowrap bg-white rounded border border-solid border-[color:var(--Gray-400,#BDBDBD)] text-neutral-500 max-md:pr-5 max-md:max-w-full">
                              Enter your email address
                            </div>
                            <div className="mt-6 font-medium text-neutral-800 max-md:max-w-full">
                              Password
                            </div>
                            <div className="justify-center items-start py-3 pr-16 pl-3 mt-1 text-base leading-6 whitespace-nowrap bg-white rounded border border-solid border-[color:var(--Gray-400,#BDBDBD)] text-neutral-500 max-md:pr-5 max-md:max-w-full">
                              Enter password
                            </div>
                            <div className="mt-1 text-blue-700 max-md:max-w-full">
                              Forgot password?
                            </div>
                            <div className="justify-center items-center px-16 py-3 mt-8 text-base font-medium tracking-normal leading-6 text-white whitespace-nowrap bg-blue-700 rounded-md border border-solid border-[color:var(--Blue-700,#175CD3)] max-md:px-5 max-md:max-w-full">
                              Log in
                            </div>
                            <div className="flex gap-4 items-center mt-6 text-gray-500 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                              <div className="self-stretch my-auto h-px bg-zinc-100 w-[200px]" />
                              <div className="self-stretch">or</div>
                              <div className="self-stretch my-auto h-px bg-zinc-100 w-[200px]" />
                            </div>
                            <div className="flex justify-center items-center px-16 py-2.5 mt-6 text-base font-medium leading-6 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-slate-700 max-md:px-5 max-md:max-w-full">
                              <div className="flex gap-3">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a67a569365068eea268030e578dec3bc515c0a31c99351b36f6edc00cc8b89?"
                                  className="w-6 aspect-square"
                                />
                                <div className="grow">Sign in with Google</div>
                              </div>
                            </div>
                            <div className="self-center mt-6 leading-5 text-blue-700 whitespace-nowrap">
                              <span className="text-gray-500">
                                Don’t have an account?{" "}
                              </span>
                              <span className="font-semibold text-blue-700">
                                Create account
                              </span>
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df32ec52f8d6d972a5997be20b36e36d6138749de6f012e91b49285ee8eacac6?"
                            className="my-auto w-3.5 aspect-[1.16] fill-indigo-400 fill-opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-0 mr-24 max-w-full w-[550px] max-md:mr-2.5">
                    <div className="flex gap-0.5 items-start self-end w-8">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f5de0eebecb0761cd7371d3ce03e9e2e9c58921bb7ccfa3b67c775ce65ccdad?"
                        className="flex-1 shrink-0 w-full aspect-square fill-indigo-400 fill-opacity-40"
                      />
                      <div className="flex-1 shrink-0 mt-1.5 h-3.5 rounded-full" />
                    </div>
                    <div className="flex gap-5 justify-between items-end pr-20 mt-4 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                      <div className="flex flex-col self-stretch">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e24a98db7f62b0c5a0cfb8dc34ff818028860d85d76bad72532ac65adbd86f?"
                          className="aspect-[1.06] fill-indigo-400 fill-opacity-30 w-[17px]"
                        />
                        <div className="flex flex-col pl-14 mt-2 max-md:pl-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92466ebd4edef63fe00dee37a951221b3960fabeda4c085929e6a827a7b04ccc?"
                            className="self-end aspect-square fill-indigo-400 fill-opacity-30 w-[17px]"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2209c0ed34b7f6f166369eead52b8b22c436425051e8fde199c5540c15e60e38?"
                            className="mt-2.5 w-5 aspect-[0.95] fill-indigo-400 fill-opacity-30"
                          />
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28700820181babb50f4f414751319960608c0a2748544282a35de986e5b33bb2?"
                        className="mt-9 aspect-[1.05] fill-indigo-400 fill-opacity-40 w-[22px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2110aed6a535542ac1abb8977e4de6a5add12044e93976b9b3aad1938dbf4ca2?"
                        className="mt-12 w-6 aspect-[1.04] fill-indigo-400 fill-opacity-30 max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start">
            <div className="w-3 h-3 rounded-full" />
            <div className="flex flex-col items-end self-end mt-10 w-[97px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ef1dc93cfe65d4c6abd910ce46a4709bdd52911e5dfe3701e28c6a1cda4cf92?"
                className="w-0.5 aspect-[0.14] fill-indigo-400 fill-opacity-50"
              />
              <div className="mt-16 rounded-full h-[18px] w-[9px] max-md:mt-10" />
              <div className="flex gap-5 justify-between items-start self-stretch pr-5 mt-72 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7dd4cdb13c69b3fc29bef66c6d261fc6ad34aa9babcdb582d6221b044c8a202?"
                  className="aspect-[1.15] fill-indigo-400 fill-opacity-30 w-[23px]"
                />
                <div className="mt-4 rounded-full h-[9px] w-[9px]" />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ec4ad29f00761b19ba84822347264f60bd2f4daad853f9771d96153364a15b?"
                className="mt-4 mr-4 w-4 aspect-square fill-indigo-400 fill-opacity-30 max-md:mr-2.5"
              />
            </div>
            <div className="mt-20 rounded-full h-[13px] w-[13px] max-md:mt-10" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfb9de11771f3656072d850ae2c16a94c287ea8801f0fe8ee34e1a1dca454c7c?"
              className="mt-3 w-5 aspect-[1.11] fill-indigo-400 fill-opacity-50"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b282f65e926d653bb29627a3a776aeaa4f7ff7b1cd465cc67524e79d08c583?"
              className="mt-32 aspect-[0.96] fill-indigo-400 fill-opacity-20 w-[23px] max-md:mt-10"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/07cd92806bfd6fd1f3813f4e71e4f81bb857f8c8ed9496baae50e18fe0cc9e2e?"
              className="mt-20 aspect-[0.96] fill-indigo-400 fill-opacity-50 w-[25px] max-md:mt-10"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68350710b89f6d9bf0967402820ffd59c96dbb493cf5a8ef8738eeb0015315b?"
              className="mt-1.5 w-4 aspect-[0.94] fill-indigo-400 fill-opacity-30"
            />
            <div className="flex flex-col self-end mt-4 mr-8 w-[97px] max-md:mr-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2054944d6b67ed6dc1b2ddc24cb86b884f82413a7670a30a112fb442069ed9b2?"
                className="self-end aspect-[1.06] fill-indigo-400 fill-opacity-40 w-[18px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62a089086609ad6178552408560341b392b5e1652c0f95577ccaf1ea05b8c8f?"
                className="mt-14 aspect-[1.09] fill-indigo-400 fill-opacity-40 w-[13px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


