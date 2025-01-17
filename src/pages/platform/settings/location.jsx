import React from 'react'
import { Card, CardHeader, CardTitle3, CardTitle,CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/common/date-range-picker'
import { Link } from 'react-router-dom'
import { LocationTable } from '@/components/platform/settings/location/LocationTable'

function Location () {
  return (
    <div className=''>
      <CardTitle>Location</CardTitle>
      <div className='mt-5 space-y-8'>
        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Location List</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Link to="add"><Button variant='outline'>Add Location</Button></Link>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <LocationTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Location;
