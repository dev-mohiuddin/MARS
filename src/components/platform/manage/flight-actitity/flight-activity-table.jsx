import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext
} from '@/components/ui/pagination'


export function FlightActivityTable () {

  const tatalFlighHrs = FlightActivity.reduce(
    (sum, item) => sum + item.flightHrs,
    0
  )

  return (
    <div>
      <Table className='relative '>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Flight #</TableHead>
            <TableHead>Log</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Flight Hrs.</TableHead>
            <TableHead className='min-w-[150px]'>Lead Passenger</TableHead>
            <TableHead>Ltinerary</TableHead>
            <TableHead>Flight Log</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {FlightActivity?.map(item => (
            <TableRow key={item.flightID}>
              <TableCell className='font-medium'>{item.flightID}</TableCell>
              <TableCell>{item.log}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.route}</TableCell>
              <TableCell>{item.flightHrs}</TableCell>
              <TableCell>{item.leadPassenger}</TableCell>
              <TableCell>{item.ltinery}</TableCell>
              <TableCell>${item.flightllog}</TableCell>
              <TableCell>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell>40</TableCell>
            <TableCell></TableCell>
            <TableCell>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className='mt-5'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}


const FlightActivity = [
  {
    flightID: 'F001',
    log: 'Successful takeoff and landing',
    type: 'Domestic',
    date: '2024-12-20',
    route: 'New York to Boston',
    flightHrs: '2',
    leadPassenger: 'John Doe',
    ltinery: 'NYC-BOS',
    flightllog: 'Smooth flight with no issues.'
  },
  {
    flightID: 'F002',
    log: 'Delayed departure',
    type: 'International',
    date: '2024-12-19',
    route: 'London to Paris',
    flightHrs: '1.5',
    leadPassenger: 'Jane Smith',
    ltinery: 'LON-PAR',
    flightllog: 'Minor delay due to weather.'
  },
  {
    flightID: 'F003',
    log: 'Routine check completed',
    type: 'Cargo',
    date: '2024-12-18',
    route: 'Los Angeles to Chicago',
    flightHrs: '4',
    leadPassenger: 'N/A',
    ltinery: 'LAX-CHI',
    flightllog: 'Cargo delivered successfully.'
  },
  {
    flightID: 'F004',
    log: 'Emergency landing',
    type: 'Domestic',
    date: '2024-12-17',
    route: 'Miami to Orlando',
    flightHrs: '1',
    leadPassenger: 'Emma Brown',
    ltinery: 'MIA-ORL',
    flightllog: 'Engine issue caused emergency landing.'
  },
  {
    flightID: 'F005',
    log: 'Passenger assistance needed',
    type: 'International',
    date: '2024-12-16',
    route: 'Dubai to New York',
    flightHrs: '14',
    leadPassenger: 'Ali Khan',
    ltinery: 'DXB-NYC',
    flightllog: 'Medical emergency handled onboard.'
  },
  {
    flightID: 'F006',
    log: 'Technical delay',
    type: 'Domestic',
    date: '2024-12-15',
    route: 'Dallas to Houston',
    flightHrs: '1',
    leadPassenger: 'Michael Green',
    ltinery: 'DAL-HOU',
    flightllog: 'Issue with navigation system resolved.'
  },
  {
    flightID: 'F007',
    log: 'Bird strike during landing',
    type: 'Domestic',
    date: '2024-12-14',
    route: 'Seattle to Portland',
    flightHrs: '0.5',
    leadPassenger: 'Sarah White',
    ltinery: 'SEA-PDX',
    flightllog: 'Minor damage, no injuries reported.'
  },
  {
    flightID: 'F008',
    log: 'Fuel shortage reported',
    type: 'Cargo',
    date: '2024-12-13',
    route: 'San Francisco to Denver',
    flightHrs: '3',
    leadPassenger: 'N/A',
    ltinery: 'SFO-DEN',
    flightllog: 'Refueled mid-journey, delivery on time.'
  },
  {
    flightID: 'F009',
    log: 'Weather-related delay',
    type: 'International',
    date: '2024-12-12',
    route: 'Tokyo to Sydney',
    flightHrs: '8',
    leadPassenger: 'Hiroshi Tanaka',
    ltinery: 'TYO-SYD',
    flightllog: 'Thunderstorm caused a 2-hour delay.'
  },
  {
    flightID: 'F010',
    log: 'Routine maintenance',
    type: 'Domestic',
    date: '2024-12-11',
    route: 'Chicago to Atlanta',
    flightHrs: '2',
    leadPassenger: 'Laura Martinez',
    ltinery: 'CHI-ATL',
    flightllog: 'Maintenance completed, smooth flight.'
  },
];
