import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Trash } from 'lucide-react'
import { Button } from '../ui/button'

const bookings = [
  {
    subject: 'SBJ001',
    destination: 'New York',
    status: 'Paid',
    totalPayment: '$250.00',
    bookingDate: '2024-06-01',
    departureDate: '2024-06-05',
    returnDate: '2024-06-10'
  },
  {
    subject: 'SBJ002',
    destination: 'Los Angeles',
    status: 'Pending',
    totalPayment: '$150.00',
    bookingDate: '2024-06-02',
    departureDate: '2024-06-07',
    returnDate: '2024-06-12'
  },
  {
    subject: 'SBJ003',
    destination: 'Chicago',
    status: 'Unpaid',
    totalPayment: '$350.00',
    bookingDate: '2024-06-03',
    departureDate: '2024-06-08',
    returnDate: '2024-06-13'
  },
  {
    subject: 'SBJ004',
    destination: 'Houston',
    status: 'Paid',
    totalPayment: '$450.00',
    bookingDate: '2024-06-04',
    departureDate: '2024-06-09',
    returnDate: '2024-06-14'
  },
  {
    subject: 'SBJ005',
    destination: 'San Francisco',
    status: 'Paid',
    totalPayment: '$550.00',
    bookingDate: '2024-06-05',
    departureDate: '2024-06-10',
    returnDate: '2024-06-15'
  },
  {
    subject: 'SBJ006',
    destination: 'Miami',
    status: 'Pending',
    totalPayment: '$200.00',
    bookingDate: '2024-06-06',
    departureDate: '2024-06-11',
    returnDate: '2024-06-16'
  },
  {
    subject: 'SBJ007',
    destination: 'Seattle',
    status: 'Unpaid',
    totalPayment: '$300.00',
    bookingDate: '2024-06-07',
    departureDate: '2024-06-12',
    returnDate: '2024-06-17'
  }
]

export function BookingList () {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Booking List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="relative" >
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Subject</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Booking Data</TableHead>
              <TableHead>Departure Date</TableHead>
              <TableHead>Return Date</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings?.map(booking => (
              <TableRow key={booking.subject} >
                <TableCell className='font-medium'>{booking.subject}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>{booking.totalPayment}</TableCell>
                <TableCell>{booking.bookingDate}</TableCell>
                <TableCell>{booking.departureDate}</TableCell>
                <TableCell>{booking.returnDate}</TableCell>
                <TableCell>{booking.totalAmount}</TableCell>
                <TableCell className=''>
                  <Button variant="destructive" size='icon'>
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
