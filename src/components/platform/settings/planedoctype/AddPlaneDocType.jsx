import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { planeDocTypeSchema } from '@/lib/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInputField from '@/components/common/from-input-field'
import { Form } from '@/components/ui/form'
import {  useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

function AddPlaneDocType () {

  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(planeDocTypeSchema),
    defaultValues: {
      type: '',
    }
  })

  function submit(){
    
    
    console.log(form.getValues())
    navigate("/dashboard/settings/plane-doc-types")
  }


  return (
    <Card className='w-full mx-auto'>
      <CardHeader>
        <CardTitle>Add Plane Document Type </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className='grid w-full items-center gap-4'>
                
                <FormInputField
                    name='type'
                    placeholder={'Enter document type'}
                    form={form}
                    type='text'
                    label="Document type"
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

export default AddPlaneDocType
