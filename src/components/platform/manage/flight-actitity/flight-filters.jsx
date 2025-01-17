import { Card, CardContent, CardHeader, CardTitle3 } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/common/date-range-picker'

function FlightFilters () {
  return (
    <Card>
      <CardHeader>
        <CardTitle3>Flight Search Filters</CardTitle3>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className='mt-5 flex flex-col lg:flex-row justify-between items-center gap-5'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-5'>
            <SelectType />
            <SelectLocation />
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2'>
            <div className='space-y-2'>
              <Label>Date Range</Label>
              <DatePickerWithRange />
            </div>
            <div className='w-full'>
              <Button className='w-full' variant='outline'>
                All
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FlightFilters

function SelectType () {
  return (
    <div className='space-y-2'>
      <Label>Type</Label>
      <Select>
        <SelectTrigger className='w-[250px]'>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='#'>Charter</SelectItem>
            <SelectItem value='#'>Owner</SelectItem>
            <SelectItem value='#'>Other</SelectItem>
            <SelectItem value='#'>Maintenance</SelectItem>
            <SelectItem value='#'>Crew Training</SelectItem>
            <SelectItem value='#'>Crew Vacation</SelectItem>
            <SelectItem value='#'>Affiliate</SelectItem>
            <SelectItem value='#'>Crew Rest</SelectItem>
            <SelectItem value='#'>Owner 135</SelectItem>
            <SelectItem value='#'>Owner 91</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

function SelectLocation () {
  return (
    <div className='space-y-2'>
      <Label>Location</Label>
      <Select>
        <SelectTrigger className='w-[250px]'>
          <SelectValue placeholder='Select a Location' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='#'>Port Hastings (YPS)</SelectItem>
            <SelectItem value='#'>Addison (ADS)</SelectItem>
            <SelectItem value='#'>Akron (CAK)</SelectItem>
            <SelectItem value='#'>Albany (ALB)</SelectItem>
            <SelectItem value='#'>Amsterdam (AMS)</SelectItem>
            <SelectItem value='#'>Angel Fire (AXX)</SelectItem>
            <SelectItem value='#'>Aspen (ASE)</SelectItem>
            <SelectItem value='#'>Atlanta (PDK)</SelectItem>
            <SelectItem value='#'>Aurora (UAO)</SelectItem>
            <SelectItem value='#'>Austin (EDC)</SelectItem>
            <SelectItem value='#'>Austin (AUS)</SelectItem>
            <SelectItem value='#'>Baltimore (BWI)</SelectItem>
            <SelectItem value='#'>Bangor (BGR)</SelectItem>
            <SelectItem value='#'>Basse Terre (SKB)</SelectItem>
            <SelectItem value='#'>Bay St Louis (HSA)</SelectItem>
            <SelectItem value='#'>Bedford (BED)</SelectItem>
            <SelectItem value='#'>Belize City (BZE)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
