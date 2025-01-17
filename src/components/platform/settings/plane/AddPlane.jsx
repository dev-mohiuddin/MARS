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
import { planeSchema } from '@/lib/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInputField from '@/components/common/from-input-field'
import { Form } from '@/components/ui/form'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

function AddPlane() {
  const { toast } = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(planeSchema),
    defaultValues: {
      owner: '',
      tail: '',
      startingHours: '',
      startingLandings: '',
      taxableRate: '',
      maintenanceRate: '',
      charterRate: '',
      openingBalance: '',
      retainerBalance: '',
    }
  })

  function submit() {
    console.log(form.getValues())
    navigate("/dashboard/settings/owners")
  }

  const owners = [
    { value: 'jane.doe@example.com', label: 'Jane Doe' },
    { value: 'michael.brown@example.com', label: 'Michael Brown' },
    { value: 'emily.davis@example.com', label: 'Emily Davis' },
    { value: 'chris.johnson@example.com', label: 'Chris Johnson' },
    { value: 'sophia.taylor@example.com', label: 'Sophia Taylor' }
  ]

  return (
    <Card className='w-full mx-auto'>
      <CardHeader>
        <CardTitle>Add Plane</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className='grid w-full items-center gap-4'>

              <FormInputField
                name='owner'
                placeholder={'Select owner'}
                form={form}
                type='select'
                label="Owner"
                selectOption={owners}
              />

              <FormInputField
                name='tail'
                placeholder={'Enter tail'}
                form={form}
                type='text'
                label="Tail"
              />

              <FormInputField
                name='startingHours'
                placeholder={'Enter starting hours'}
                form={form}
                type='number'
                label="Starting Hours"
              />

              <FormInputField
                name='startingLandings'
                placeholder={'Enter starting landings'}
                form={form}
                type='number'
                label="Starting Landings"
              />

              <FormInputField
                name='taxableRate'
                placeholder={'Enter taxable rate'}
                form={form}
                type='number'
                step="0.01"
                label="Taxable Rate"
              />

              <FormInputField
                name='maintenanceRate'
                placeholder={'Enter maintenance rate'}
                form={form}
                type='number'
                step="0.01"
                label="Maintenance Rate"
              />

              <FormInputField
                name='charterRate'
                placeholder={'Enter charter rate'}
                form={form}
                type='number'
                label="Charter Rate"
              />

              <FormInputField
                name='openingBalance'
                placeholder={'Enter opening balance'}
                form={form}
                type='number'
                label="Opening Balance"
              />

              <FormInputField
                name='retainerBalance'
                placeholder={'Enter retainer balance'}
                form={form}
                type='number'
                label="Retainer Balance"
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

export default AddPlane
