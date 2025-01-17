import { Mail } from "lucide-react"
import { Link } from "react-router-dom"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"



function VerificationCode() {


    return (
        <Card className="w-full md:w-[450px] flex flex-col justify-center items-center px-8 ">
            <CardHeader className="flex flex-col justify-center items-center gap-2" >
                <CardTitle className="p-3 bg-primary/10 text-primary rounded-full"><Mail size={26} /></CardTitle>
                <CardTitle className="text-center">Please check your email</CardTitle>
            </CardHeader>
            <Label className="text-center">We have sent a verification code to your email address</Label>
            <CardContent className="mt-5">
                <form>
                    <InputOTP maxLength={4}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                </form>
                <CardDescription className="text-center">Didn't receive the code?<Button className="-ml-3" variant="link">Resend</Button></CardDescription>
            </CardContent>
            <CardFooter className="flex w-full justify-center gap-5">
                <Link to={'/auth/sign-in'} className="w-full" > <Button className="w-full" variant="outline">Cancel</Button></Link>
                <Button className="w-full" >Verify</Button>
            </CardFooter>
        </Card>
    )
}

export default VerificationCode
