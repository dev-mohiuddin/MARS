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

const charterRevenue = [
  {
    flightID: 'FLT001',
    date: '2024-06-01',
    clientName: 'John Smith',
    departureLocation: 'Los Angeles',
    destination: 'New York',
    departureTime: '08:00 AM',
    returnDateTime: '2024-06-02 06:00 PM',
    aircraftType: 'Private Jet',
    totalFlightHours: 10,
    totalRevenue: 5000,
    operationalCost: 2000,
    profit: 3000,
    paymentStatus: 'Paid',
    notes: 'VIP Client'
  },
  {
    flightID: 'FLT002',
    date: '2024-06-03',
    clientName: 'XYZ Corporation',
    departureLocation: 'Chicago',
    destination: 'London',
    departureTime: '09:00 AM',
    returnDateTime: '2024-06-04 07:00 PM',
    aircraftType: 'Helicopter',
    totalFlightHours: 8,
    totalRevenue: 3500,
    operationalCost: 1500,
    profit: 2000,
    paymentStatus: 'Pending',
    notes: 'Urgent Delivery'
  },
  {
    flightID: 'FLT003',
    date: '2024-06-05',
    clientName: 'Sarah Johnson',
    departureLocation: 'Dubai',
    destination: 'Paris',
    departureTime: '10:30 AM',
    returnDateTime: '2024-06-06 08:00 PM',
    aircraftType: 'Jet',
    totalFlightHours: 12,
    totalRevenue: 7200,
    operationalCost: 2500,
    profit: 4700,
    paymentStatus: 'Unpaid',
    notes: 'Return Trip'
  },
  {
    flightID: 'FLT004',
    date: '2024-06-10',
    clientName: 'Alpha Industries',
    departureLocation: 'New York',
    destination: 'Tokyo',
    departureTime: '11:00 AM',
    returnDateTime: '2024-06-12 09:00 PM',
    aircraftType: 'Private Jet',
    totalFlightHours: 15,
    totalRevenue: 10000,
    operationalCost: 4000,
    profit: 6000,
    paymentStatus: 'Paid',
    notes: 'Business Conference'
  }
]

export function CharterRevTable () {
  const totalRevenue = charterRevenue.reduce(
    (sum, item) => sum + item.totalRevenue,
    0
  )
  const totalProfit = charterRevenue.reduce((sum, item) => sum + item.profit, 0)
  const totalOperationalCost = charterRevenue.reduce(
    (sum, item) => sum + item.operationalCost,
    0
  )

  return (
    <div>
      <Table className='relative '>
        {/* <TableCaption>
          A list of recent charter flights and their revenue details.
        </TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Flight ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Departure Location</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Departure Time</TableHead>
            <TableHead className='min-w-[200px]'>Return Date & Time</TableHead>
            <TableHead>Aircraft Type</TableHead>
            <TableHead>Total Flight Hours</TableHead>
            <TableHead>Total Revenue</TableHead>
            <TableHead>Operational Cost</TableHead>
            <TableHead>Profit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {charterRevenue.map(item => (
            <TableRow key={item.flightID}>
              <TableCell className='font-medium'>{item.flightID}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.clientName}</TableCell>
              <TableCell>{item.departureLocation}</TableCell>
              <TableCell>{item.destination}</TableCell>
              <TableCell>{item.departureTime}</TableCell>
              <TableCell>{item.returnDateTime}</TableCell>
              <TableCell>{item.aircraftType}</TableCell>
              <TableCell>{item.totalFlightHours}</TableCell>
              <TableCell>${item.totalRevenue.toLocaleString()}</TableCell>
              <TableCell>${item.operationalCost.toLocaleString()}</TableCell>
              <TableCell>${item.profit.toLocaleString()}</TableCell>
              <TableCell>{item.paymentStatus}</TableCell>
              <TableCell>{item.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>Total</TableCell>
            <TableCell>${totalRevenue.toLocaleString()}</TableCell>
            <TableCell>${totalOperationalCost.toLocaleString()}</TableCell>
            <TableCell className='text-right'>
              ${totalProfit.toLocaleString()}
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
