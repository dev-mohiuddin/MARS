import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { signupSchema } from '@/lib/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInputField from '@/components/common/from-input-field'
import { Form } from '@/components/ui/form'
import SocialLogin from './social-login'
import { Link } from 'react-router-dom'
import { logo } from '@/assets'

function SignUp () {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = data => {}

  return (
    <Card className='w-full md:w-[400px] xl:w-[500px] mx-auto'>
      <CardHeader>
        <img className='h-20 mx-auto' src={logo} alt='logo' />
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5 mt-5'>
              <div className='space-y-2'>
                <FormInputField name='name' placeholder={'Name'} form={form} />

                <FormInputField
                  name='email'
                  placeholder={'Email'}
                  form={form}
                  type='email'
                />

                <FormInputField
                  name='number'
                  placeholder={'Number'}
                  form={form}
                  type='number'
                />
              </div>

              <div className='space-y-4'>
                <FormInputField
                  name='password'
                  placeholder={'Password'}
                  form={form}
                  type='password'
                />

                <FormInputField
                  name='confirmPassword'
                  placeholder={'Confirm Password'}
                  form={form}
                  type='password'
                />

                <FormInputField
                  name='checkbox'
                  label='Remember Me'
                  type='checkbox'
                  form={form}
                />
              </div>
            </div>

            <div className='mt-5'>
              <Button className='w-full'>Sign Up</Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='flex-col'>
        <div className='flex justify-center items-center'>
          <Label>Already have an account?</Label>
          <Label className='hover:underline cursor-pointer ml-1 hover:text-primary'>
            <Link to={'/auth/sign-in'}>Sign In</Link>
          </Label>
        </div>
        <div className='mt-5'>
          <SocialLogin />
        </div>
      </CardFooter>
    </Card>
  )
}

export default SignUp
