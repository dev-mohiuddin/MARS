
import {apple, facebook, google } from "@/assets"

function SocialLogin() {
  return (
    <div className="flex gap-2">
        <div className="cursor-pointer">
            <img src={facebook} alt="apple" />
        </div>
        <div className="cursor-pointer">
            <img src={google} alt="apple" />
        </div>
        <div className="cursor-pointer">
            <img src={apple} alt="apple" />
        </div>
    </div>
  )
}

export default SocialLogin
