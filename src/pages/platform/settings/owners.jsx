import React from 'react'
import { Card, CardHeader, CardTitle3, CardTitle,CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CharterRevTable } from '@/components/platform/pl-report/charter-rev-table'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/common/date-range-picker'
import { OwnerTable } from '@/components/platform/settings/owner/OwnerTable'
import { Link } from 'react-router-dom'

function Owner () {
  return (
    <div className=''>
      <CardTitle>Owners</CardTitle>
      <div className='mt-5 space-y-8'>
        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Plane Owner List</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Link to="add"><Button variant='outline'>Add Owner</Button></Link>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <OwnerTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Owner
