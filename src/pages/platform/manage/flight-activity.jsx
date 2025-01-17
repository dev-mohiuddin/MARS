import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardTitle3
} from '@/components/ui/card'
import FlightFilters from '@/components/platform/manage/flight-actitity/flight-filters'
import { FlightActivityTable } from '@/components/platform/manage/flight-actitity/flight-activity-table'
import { Separator } from '@/components/ui/separator'

function FlightActivity () {
  return (
    <div>
      <CardTitle>Flight Activity</CardTitle>
      <div className='mt-8 space-y-8'>
        <FlightFilters />

        <Card>
          <CardHeader>
            <CardTitle3>Flights for MARS7</CardTitle3>
          </CardHeader>
          <Separator className='mb-2' />
          <CardContent>
            <FlightActivityTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FlightActivity
