import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useDispatch, useSelector } from 'react-redux'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInputField from '@/components/common/from-input-field'
import ForgotPasswordDialog from './forgot-password'
import { Form } from '@/components/ui/form'
import SocialLogin from './social-login'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from '@/assets'
import { signInUser } from '@/redux/auth-slice/auth'
import { useToast } from '@/hooks/use-toast'

function SignIn () {

  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const signIn = formData => {
    dispatch(signInUser(formData)).then(data => {
      if (data?.payload?.success) {
        navigate('/dashboard')
        toast({
          title: data?.payload?.message
        })
      } else {
        toast({
          title: data?.payload?.message,
          variant: 'destructive'
        })
      }
    })
  }

  return (
    <Card className='w-full md:w-[400px] xl:w-[500px] mx-auto'>
      <CardHeader>
        <img className='h-20 mx-auto' src={logo} alt='logo' />
        {/* <BackButton className='mb-4' /> */}
        <CardTitle>Log In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signIn)}>
            <div className='grid w-full items-center gap-4'>
              <FormInputField
                name='email'
                placeholder={'Email'}
                form={form}
                type='email'
              />

              <FormInputField
                name='password'
                placeholder={'Password'}
                form={form}
                type='password'
              />

              <div className='flex justify-between items-center'>
                <FormInputField
                  name='checkbox'
                  label='Remember Me'
                  type='checkbox'
                  form={form}
                />
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Label className='hover:underline cursor-pointer'>
                        Forgot Password?
                      </Label>
                    </DialogTrigger>
                    <ForgotPasswordDialog />
                  </Dialog>
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <Button className='w-full'>Log In</Button>
            </div>
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter className='flex-col'>
        <div className='flex justify-center items-center'>
          <Label>Don't have an account?</Label>
          <Label className='hover:underline cursor-pointer ml-1 hover:text-primary'>
            <Link to={'/auth/sign-up'}>Register</Link>
          </Label>
        </div>
        <div className='mt-5'>
          <SocialLogin />
        </div>
      </CardFooter> */}
    </Card>
  )
}

export default SignIn
