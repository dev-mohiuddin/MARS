
import { Card, CardHeader, CardTitle3, CardTitle,CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/common/date-range-picker'
import { Link } from 'react-router-dom'
import { PlaneDocTypeTable } from '@/components/platform/settings/planedoctype/PlaneDocTypeTable'

function PlaneDocTypes () {
  return (
    <div className=''>
      <CardTitle>Plane Document Types</CardTitle>
      <div className='mt-5 space-y-8'>
        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Document Type List</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Link to="add"><Button variant='outline'>Add Document Type</Button></Link>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <PlaneDocTypeTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PlaneDocTypes;
