import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FlightCostReportTable } from '@/components/platform/flight-cost/flight-cost-table'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/common/date-picker'

function FlightCostReport () {
  return (
    <div className=''>
      <CardTitle>Monthly Activity Report</CardTitle>
      <div className='mt-5 space-y-8'>

        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle>Flight Cost Report</CardTitle>
              <div className='flex gap-2'>
                <DatePicker />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <FlightCostReportTable />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default FlightCostReport
