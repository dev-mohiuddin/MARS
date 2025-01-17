import React from 'react'
import { Button } from '@/components/ui/button'
import StatsCard from '@/components/dashboard/stats-card'
import KeyMetrics from '@/components/dashboard/key-metrics'
import { FlightActivity } from '@/components/dashboard/flight-activity'
import { Revenue } from '@/components/dashboard/revenue'

import { dashboardData } from '@/assets/static-data/data'

function Dashboard () {
  return (
    <div>
      <div className='flex lg:flex-row flex-col justify-between gap-5 mt-8'>
        <div className='lg:flex-1 w-full'>
          <StatsCard overview={dashboardData.overview} />
        </div>
        <Revenue/>
      </div>

      <div className='flex lg:flex-row flex-col justify-between gap-5 mt-8'>
        <div className='lg:flex-1 w-full'>
          <FlightActivity />
        </div>
        <KeyMetrics keyMetrics={dashboardData.keyMetrics} />
      </div>
    </div>
  )
}

export default Dashboard
