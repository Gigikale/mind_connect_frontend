import React from "react";
import { Button } from "../../components/Button";
import { Link, redirect, useNavigate } from "react-router-dom";
import SweetAlert from "../../commons/SweetAlert";
import axiosConfig from "../../services/api/axiosConfig";
import OurRoutes from "../../commons/OurRoutes";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { wait } from "@testing-library/user-event/dist/utils";



  const VerifyEmail = () => {
    const [ loading, setLoading ] = useState(true)
    const [ emailSent, setEmailSent ] = useState(false)
    const [ message, setMessage ] = useState("")
    const [ verified, setVerified ] = useState(false)
    const [ searchParams ] = useSearchParams()
    const [ email, setEmail ] = useState("")

    const isMounted = useRef(false);

    const navigate = useNavigate()

    useEffect(() => {
        loadPage()
    })

    const loadPage = () => {
        var token = searchParams.get("token");
        console.log(token)
        console.log(isMounted)

        if(!isMounted.current) {
            if(token != null) {
                verifyEmailAddress(token)
                decodeJWT(token)
            } else {
                SweetAlert("Invalid request. You will be redirected to signup", 'info')
                handleRedirect(OurRoutes.signup)
            }
            isMounted.current = true;
        }
    }

    const handleRedirect = async (route) => {
        await wait(1000)
        navigate(route)
    }

    const decodeJWT  = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        var json = JSON.parse(jsonPayload)
        setEmail(json["sub"])
    }

    async function verifyEmailAddress(token) {
        setLoading(true)
        console.log(isMounted)
        await axiosConfig.get(`/auth/confirm-email-address?token=${token}&type=SIGNUP`)
        .then((response) => {
            setLoading(false)
            if(response.data["statusCode"] === 200) {
                SweetAlert(response.data["message"], "success")
                setVerified(true)
                setMessage(response.data["message"])
                handleRedirect(OurRoutes.login)
            } else {
                setVerified(false)
                setMessage(response.data["message"])
                SweetAlert(response.data["message"], "error")
            }
        }).catch((error) => {
            setLoading(false)
            if(error?.code === "ERR_NETWORK") {
                SweetAlert("Network error. Please check your internet connection", "error")
            }
        })
    }

    const handleResend = async () => {
        setLoading(true)
        await axiosConfig.get(`/auth/resend-link?email=${email}&type=SIGNUP`)
        .then((response) => {
            setLoading(false)
            if(response.data["statusCode"] === 200) {
                SweetAlert(response.data["message"], "success")
                setEmailSent(true)
                return
            } else {
                SweetAlert(response.data["message"], "error")
            }
        })
    }

  return (
    <div class="w-full h-full pl-[480px] pr-[481px] pt-[200px] bg-white justify-center items-center inline-flex">
      <div class="self-stretch p-12 bg-slate-50 rounded-3xl flex-col justify-center items-center gap-10 inline-flex">
        <div class="w-14 h-14 relative">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/79b86c362bd9e83a06db08433a4a9d4ac58c0b6f79d2ba429a64efccf9a552f3?"
            className="w-14 aspect-square"
            alt="envelope"
          />
        </div>
        <div class="text-sky-950 text-2xl font-bold font-['Inter'] leading-normal">Verify your email</div>
        <div class="flex-col justify-center items-center gap-8 flex">
          <div class="flex-col justify-start items-start gap-2 flex">
            <div class="text-center text-gray-900 text-sm font-normal font-['Inter'] leading-tight">Hi there, use the link below to verify<br />your email and start enjoying MindConnect</div>
          </div>
          {/* <div class="w-[383px] h-10 px-4 py-3 bg-blue-700 rounded-md justify-center items-center gap-2 inline-flex"> */}
            <Button type="submit"  text="Verify Email" className="w-[383px] h-10 px-4 py-3 bg-blue-700 rounded-md justify-center items-center gap-2 inline-flex" />
          {/* </div> */}
          <div class="flex-col justify-start items-start gap-2 flex">
            <div class="text-center text-gray-900 text-sm font-normal font-['Inter'] leading-tight">Didn't get the link?</div>
          </div>
          <div class="w-[383px] h-10 px-4 py-3 bg-blue-700 rounded-md justify-center items-center  inline-flex">
            <Button type="submit"  text="Resend link"  onClick={handleResend}/>
          </div>
          <Button type="submit" text="Verify Email" className="text-white text-base font-semibold font-['Inter'] leading-snug tracking-tight justify-center items-center self-stretch px-16 py-3 mt-8 text-base font-semibold tracking-normal leading-6 text-white whitespace-nowrap bg-blue-700 rounded-md" />
        </div>
      </div>
    </div>
  );
}


export default VerifyEmail;



