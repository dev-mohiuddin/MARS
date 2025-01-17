import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ownerSchema } from '@/lib/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInputField from '@/components/common/from-input-field'
import { Form } from '@/components/ui/form'
import {  useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

function AddOwner () {

  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(ownerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone:'',
      company:''
    }
  })

  function submit(){
    
    
    console.log(form.getValues())
    navigate("/dashboard/settings/owners")
  }


  return (
    <Card className='w-full mx-auto'>
      <CardHeader>
        <CardTitle>Add Owner </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className='grid w-full items-center gap-4'>
                
                <FormInputField
                    name='name'
                    placeholder={'Enter owner name'}
                    form={form}
                    type='text'
                    label="Name"
                />

                <FormInputField
                    name='email'
                    placeholder={'Enter owner email'}
                    form={form}
                    type='email'
                    label="Email"
                />

                <FormInputField
                    name='phone'
                    placeholder={'Enter owner phone number'}
                    form={form}
                    type='number'
                    label="Phone number"
                />
                <FormInputField
                    name='company'
                    placeholder={'Enter company name'}
                    form={form}
                    type='text'
                    label="Company"
                />
            </div>

            <div className='mt-5'>
              <Button className='w-full'>Save</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default AddOwner
