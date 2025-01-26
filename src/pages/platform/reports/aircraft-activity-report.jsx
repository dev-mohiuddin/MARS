import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/common/date-picker'
import AircraftActivityReportTable from '@/components/platform/pl-report/aircraft-activity-report-table'
import { DatePickerWithRange } from '@/components/common/date-range-picker'
import FlightLogTable from './flight-log-table'

function AircraftActivityReport () {
    return (
        <div className=''>
            <CardTitle>Aircraft Activity Report</CardTitle>
            <div className='mt-5 space-y-8'>
                <Card>
                    <CardHeader>
                        <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
                            <div>
                                <CardDescription>Select Date</CardDescription>
                                <div className='flex gap-2 mt-2'>
                                    <DatePicker />
                                    <Button variant='outline'>Apply</Button>
                                </div>
                            </div>
                            <div>
                                <CardDescription>Select Date With range</CardDescription>
                                <div className='mt-2 flex gap-2'>
                                    <DatePickerWithRange />
                                    <Button variant='outline'>Apply</Button>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                <div>
                    <AircraftActivityReportTable />
                </div>
                <div>
                    <FlightLogTable />
                </div>
            </div>
        </div>
    )
}

export default AircraftActivityReport
