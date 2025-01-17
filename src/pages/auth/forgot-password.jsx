import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema } from '@/lib/validationSchema'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import FormInputField from '@/components/common/from-input-field'
import { useNavigate } from 'react-router-dom'

export function ForgotPasswordDialog () {
  const navigation = useNavigate()

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
  })

  const sendOtp = () => {
    navigation('/auth/sign-in/verification-code')
  }

  return (
    <DialogContent className='sm:max-w-md'>
      <DialogHeader>
        <DialogTitle>Send An Verification Code</DialogTitle>
      </DialogHeader>

      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(sendOtp)}
            className='space-y-5'
          >
            <FormInputField
              name='email'
              label='Email'
              placeholder='Email'
              type='email'
              form={form}
            />
            <DialogFooter className='sm:justify-start'>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Close
                </Button>
              </DialogClose>
              <Button>Send Code</Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </DialogContent>
  )
}

export default ForgotPasswordDialog
