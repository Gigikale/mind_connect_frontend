import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthFormField from "../../components/formFields/AuthFormField";
import cloud from "../../assets/cloud.jpeg";
import cloudblur from "../../assets/cloudblur.jpg";
import { Button } from "../../components/Button";
import Roundbox from "../../commons/Roundbox";
import PasswordFormField from "../../components/formFields/PasswordFormField";
import DropdownField from "../../components/formFields/DropdownFormField";
import OurRoutes from "../../commons/OurRoutes";
import SweetAlert from "../../commons/SweetAlert";
import axiosConfig from "../../services/api/axiosConfig";
import SweetPopup from "../../commons/SweetPopup";
import VerifyEmail from "./VerifyEmailPage";

export default function SignupPage() {
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState("");
    const [loading, setLoading] = useState(false);
    const [ loader, setLoader ] = useState(true);
    const [visible, setVisible] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = async () => {
    setLoading(true)
    await axiosConfig.post("/auth/signup", {
      emailAddress: email,
      firstName: firstName,
      lastName: lastName,
      state: state,
      country: country,
      password: password,
      confirmPassword: confirmPassword
    }).then((response) => {
      setLoading(false)
      if (response.data["statusCode"] === 200) {
        setLoader(false)
        setLoading(true)
      } else {
        SweetAlert(response.data["message"], 'error')
      }
    }).catch((error) => {
      setLoading(false)
      if(error?.code === "ERR_NETWORK") {
          SweetAlert("Network error. Please check your internet connection", "error")
      }
  })
  }


  const handleToggle = () => {
    setVisible(!visible);
  };

  const handleConfirmToggle = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  return (
    
    <div className="bg-white">
         <SweetPopup
        open={loading}
        loaderElement={
          loader ? null : <VerifyEmail email={email}/>
        }
      />
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow justify-center items-end py-12 pl-16 blur-[10px] min-h-[1024px] max-md:max-w-full">
            <img
              src={cloudblur}
              className="object-cover absolute inset-0 size-full w-600px"
            />
            <div className="relative rounded-full h-[11px] mt-[885px] w-[11px] max-md:mt-10" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-end max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center px-5 max-w-full w-[900px] max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18243a283da54ae1a80ea54a6755ac96a1e497a3eeec0bb965c656fea37e6d51?"
                className="self-stretch my-auto w-4 aspect-square fill-indigo-400 fill-opacity-50"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9845a1ae5c7002fae6ea24dc5c034c2e4dabfa660185065d4c9f690957af58d?"
                className="self-stretch my-auto w-4 aspect-[0.88] fill-indigo-400 fill-opacity-40"
              />
              <div className="flex gap-5 justify-between self-stretch">
                <div className="flex flex-col">
                  <div className="self-end w-3 h-3 rounded-full" />
                  <div className="shrink-0 mt-20 bg-indigo-400 bg-opacity-10 h-[21px] max-md:mt-10" />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ef1dc93cfe65d4c6abd910ce46a4709bdd52911e5dfe3701e28c6a1cda4cf92?"
                  className="my-auto w-0.5 aspect-[0.14] fill-indigo-400 fill-opacity-50"
                />
              </div>
            </div>
            <div className="flex gap-1.5 justify-between self-stretch px-5 mt-1 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 max-md:max-w-full">
                <div className="z-10 pr-14 bg-white shadow-sm max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                      <div className="flex overflow-hidden relative flex-col grow items-start pt-6 pr-16 pb-12 pl-6 text-3xl font-bold tracking-wide leading-10 text-blue-100 whitespace-nowrap min-h-[800px] max-md:px-5 max-md:mt-10">
                        <img
                          src={cloud}
                          className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col max-w-full shadow-sm w-[215px]">
                          <div>MindConnect</div>
                          <div className="shrink-0 mt-1 h-2 bg-blue-700 rounded-md" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow mt-16 max-md:mt-10 max-md:max-w-full">
                        <div className="self-start text-3xl font-bold tracking-wide leading-10 text-gray-900">
                          Registration
                        </div>
                        <div className="mt-1 h-2 bg-blue-700 rounded-md w-[194px]" />
                        <div className="flex gap-5 justify-between mt-14 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                          <div className="flex flex-col flex-1 whitespace-nowrap">
                            <AuthFormField
                              id="fname"
                              title="Firstname"
                              placeholder="Enter Firstname"
                              onValueChanged={(value) => setFirstName(value)}
                            />
                          </div>
                          <div className="flex flex-col flex-1 whitespace-nowrap">
                            <AuthFormField
                              id="lastname"
                              title="Lastname"
                              placeholder="Enter Lastname"
                              onValueChanged={(value) => setLastName(value)}
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col flex-1 whitespace-nowrap">
                            <AuthFormField
                              id="mail"
                              title="Email"
                              placeholder="Enter your email address"
                              onValueChanged={(value) => setEmail(value)}
                            />
                          </div>
                          <div className="flex flex-col flex-1">
                            <DropdownField
                              title="Mental Condition(Optional)"
                              placeHolder="Please select"
                              isCustom={true}
                              isSearchable={false}
                              onSelected={(item) => {}}
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-4  max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col flex-1">
                            <AuthFormField
                              id="country"
                              title="Country"
                              placeholder="Enter your Country"
                              onValueChanged={(value) => setCountry(value)}
                            />
                          </div>
                          <div className="flex flex-col flex-1">
                            <AuthFormField
                              id="state/province"
                              title="State/Province"
                              placeholder="Enter your State/Province of residence"
                              onValueChanged={(value) => setState(value)}
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col flex-1">
                            <PasswordFormField
                              id="pword"
                              title="Password"
                              placeholder="Enter password"
                              visible={visible}
                              onToggle={handleToggle}
                              onValueChanged={(e) => setPassword(e)}
                            />
                          </div>
                          <div className="flex flex-col flex-1">
                            <PasswordFormField
                              id="cpword"
                              title="Confirm Password"
                              placeholder="Enter password"
                              visible={visible}
                              onToggle={handleConfirmToggle}
                              onValueChanged={(e) => setConfirmPassword(e)}
                            />
                          </div>
                        </div>
                        <div className="self-start mt-4 text-sm font-medium leading-5 text-neutral-800 max-md:max-w-full">
                          Gender
                        </div>
                        <div className="flex gap-5 justify-between self-start mt-1 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex gap-2 justify-between">
                            <div className="flex flex-col justify-center py-1 aspect-[0.75]">
                              <div className="shrink-0 rounded-full h-[18px] stroke-[1.5px]" />
                            </div>
                            <div className="text-base leading-6 text-neutral-800 flex gap-2">
                              <Roundbox
                                label={"Male"}
                                onValueChanged={(e) => {
                                  console.log(e);
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-between">
                            <div className="flex flex-col justify-center py-1 aspect-[0.75]">
                              <div className="shrink-0 rounded-full h-[18px] stroke-[1.5px]" />
                            </div>
                            <div className="text-base leading-6 text-neutral-800 flex gap-2">
                              <Roundbox
                                label={"Female"}
                                onValueChanged={(e) => {
                                  console.log(e);
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-between">
                            <div className="flex flex-col justify-center py-1 aspect-[0.75]">
                              <div className="shrink-0 rounded-full h-[18px] stroke-[1.5px]" />
                            </div>
                            <div className="text-base leading-6 text-neutral-800 flex gap-2">
                              <Roundbox
                                label={"Other"}
                                onValueChanged={(e) => {
                                  console.log(e);
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-between">
                            <div className="flex flex-col justify-center py-1 aspect-[0.75]">
                              <div className="shrink-0 rounded-full h-[18px] stroke-[1.5px]" />
                            </div>
                            <div className="grow text-base leading-6 whitespace-nowrap text-neutral-800 flex gap-2">
                              <Roundbox
                                label={"Prefer not to say"}
                                onValueChanged={(e) => {
                                  console.log(e);
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <Button text="Create account"  onClick={handleSubmit}/>
                        <div className="self-center mt-6 text-sm leading-5 text-blue-700 whitespace-nowrap">
                          <span className="text-gray-500">
                            Already have an account?{" "}
                          </span>
                          <Link
                            to={ OurRoutes.login }
                            className="font-semibold text-blue-700">
                            Sign in
                        </Link>
                          
                        </div>
                        <div className="self-center mt-6 text-sm leading-5 text-slate-500 max-md:max-w-full">
                          <span className="text-gray-500">
                            By creating an account you agree to our{" "}
                          </span>
                          <span className="text-blue-700">
                            Privacy Policies
                          </span>
                          , <span className="text-slate-500">and</span>
                          <span className="text-blue-700"> Terms.</span>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68350710b89f6d9bf0967402820ffd59c96dbb493cf5a8ef8738eeb0015315b?"
                          className="self-end mt-10 mr-16 w-4 aspect-[0.94] fill-indigo-400 fill-opacity-30 max-md:mr-2.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 items-start self-end mt-0 mr-60 w-8 max-md:mr-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f5de0eebecb0761cd7371d3ce03e9e2e9c58921bb7ccfa3b67c775ce65ccdad?"
                    className="flex-1 shrink-0 w-full aspect-square fill-indigo-400 fill-opacity-40"
                  />
                  <div className="flex-1 shrink-0 mt-1.5 h-3.5 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col my-auto basis-0">
                <div className="flex gap-5 justify-between items-start px-0.5">
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
                  className="self-end mt-4 w-4 aspect-square fill-indigo-400 fill-opacity-30"
                />
              </div>
              <div className="self-start mt-4 rounded-full h-[18px] w-[9px]" />
            </div>
            <div className="flex flex-col mt-2 mr-8 max-w-full w-[855px] max-md:mr-2.5">
              <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e24a98db7f62b0c5a0cfb8dc34ff818028860d85d76bad72532ac65adbd86f?"
                  className="mt-2.5 aspect-[1.06] fill-indigo-400 fill-opacity-30 w-[17px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2054944d6b67ed6dc1b2ddc24cb86b884f82413a7670a30a112fb442069ed9b2?"
                  className="aspect-[1.06] fill-indigo-400 fill-opacity-40 w-[18px]"
                />
              </div>
              <div className="flex gap-5 justify-between items-start mt-2 ml-12 max-w-full w-[685px] max-md:flex-wrap">
                <div className="flex gap-5 justify-between items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2209c0ed34b7f6f166369eead52b8b22c436425051e8fde199c5540c15e60e38?"
                    className="self-end mt-7 w-5 aspect-[0.95] fill-indigo-400 fill-opacity-30"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92466ebd4edef63fe00dee37a951221b3960fabeda4c085929e6a827a7b04ccc?"
                    className="self-start aspect-square fill-indigo-400 fill-opacity-30 w-[17px]"
                  />
                </div>
                <div className="flex gap-5 justify-between items-start mt-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28700820181babb50f4f414751319960608c0a2748544282a35de986e5b33bb2?"
                    className="aspect-[1.05] fill-indigo-400 fill-opacity-40 w-[22px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2110aed6a535542ac1abb8977e4de6a5add12044e93976b9b3aad1938dbf4ca2?"
                    className="mt-3.5 w-6 aspect-[1.04] fill-indigo-400 fill-opacity-30"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62a089086609ad6178552408560341b392b5e1652c0f95577ccaf1ea05b8c8f?"
                  className="self-end mt-10 aspect-[1.09] fill-indigo-400 fill-opacity-40 w-[13px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
