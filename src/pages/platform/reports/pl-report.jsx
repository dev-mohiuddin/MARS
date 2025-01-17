import React from 'react'
import { Card, CardHeader, CardTitle3, CardTitle,CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CharterRevTable } from '@/components/platform/pl-report/charter-rev-table'
import { FixedCostTable } from '@/components/platform/pl-report/fixed-cost-table'
import { OperatingCostTable } from '@/components/platform/pl-report/operating-costs'
import { MaintenanceCostTable } from '@/components/platform/pl-report/maintenance-cost-table'
import { VariableCostTable } from '@/components/platform/pl-report/variable-costs'
import RevenueExpenseChart from '@/components/platform/pl-report/revenue-expense'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/common/date-range-picker'

function PlReport () {
  return (
    <div className=''>
      <CardTitle>Profit and Lose Report</CardTitle>
      <div className='mt-5 space-y-8'>
        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Charter Revenue</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <CharterRevTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Fixed Costs</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <FixedCostTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Operating Costs</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <OperatingCostTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Maintenance Costs</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <MaintenanceCostTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle3>Variable Costs</CardTitle3>
              <div className='flex sm:flex-row flex-col gap-2'>
                <DatePickerWithRange />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <VariableCostTable />
          </CardContent>
        </Card>
        <Card>
          <RevenueExpenseChart />
        </Card>
      </div>
    </div>
  )
}

export default PlReport
