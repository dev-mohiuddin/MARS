import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInputField from '@/components/common/from-input-field'
import { Form } from '@/components/ui/form'
import {  useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'
import { planeFlightTypeSchema } from '@/lib/validationSchema'

function AddPlaneFlightType () {

  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(planeFlightTypeSchema),
    defaultValues: {
      type: '',
    }
  })

  function submit(){
    
    
    console.log(form.getValues())
    navigate("/dashboard/settings/flight-types")
  }


  return (
    <Card className='w-full mx-auto'>
      <CardHeader>
        <CardTitle>Add Plane Flight Type </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className='grid w-full items-center gap-4'>
                
                <FormInputField
                    name='type'
                    placeholder={'Enter flight type'}
                    form={form}
                    type='text'
                    label="Flight type"
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

export default AddPlaneFlightType
