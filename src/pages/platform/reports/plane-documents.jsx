import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/common/date-picker'
import { PlaneDocumentsTable } from '@/components/platform/buget-documnets/palne-doc-table'

function PlaneDocuments () {
  return (
    <div className=''>
      <CardTitle>Plane Documents</CardTitle>
      <div className='mt-5 space-y-8'>
        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle>Documents {new Date().getFullYear()}</CardTitle>
              <div className='flex gap-2'>
                <DatePicker />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent >
            <PlaneDocumentsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default PlaneDocuments