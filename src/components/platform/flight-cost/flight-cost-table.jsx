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

const flightCostReport = [
  {
    flightNumber: 'FL001',
    date: '2024-12-01',
    route: 'New York to Los Angeles',
    fuelCost: 15000,
    crewCost: 8000,
    airportCharges: 5000,
    maintenanceCost: 3500,
    navigationCharges: 2000,
    inFlightServiceCost: 1500,
    insuranceCost: 2500,
    operationalCost: 4000,
    marketingCost: 1200,
    penaltiesOrDelays: 0,
    totalCost: 42700,
    revenue: 60000,
    profitOrLoss: 17300
  },
  {
    flightNumber: 'FL002',
    date: '2024-12-02',
    route: 'Los Angeles to Chicago',
    fuelCost: 12000,
    crewCost: 7000,
    airportCharges: 4500,
    maintenanceCost: 3000,
    navigationCharges: 1800,
    inFlightServiceCost: 1200,
    insuranceCost: 2200,
    operationalCost: 3800,
    marketingCost: 1000,
    penaltiesOrDelays: 500,
    totalCost: 37000,
    revenue: 50000,
    profitOrLoss: 13000
  },
  {
    flightNumber: 'FL003',
    date: '2024-12-03',
    route: 'Chicago to Miami',
    fuelCost: 10000,
    crewCost: 6500,
    airportCharges: 4000,
    maintenanceCost: 2800,
    navigationCharges: 1500,
    inFlightServiceCost: 1000,
    insuranceCost: 2000,
    operationalCost: 3500,
    marketingCost: 800,
    penaltiesOrDelays: 200,
    totalCost: 32300,
    revenue: 40000,
    profitOrLoss: 7700
  }
]

export function FlightCostReportTable () {
  return (
    <Table>
      {/* <TableCaption>Flight Cost Report</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Flight Number</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Route</TableHead>
          <TableHead >Fuel Cost</TableHead>
          <TableHead>Crew Cost</TableHead>
          <TableHead>Airport Charges</TableHead>
          <TableHead>Total Cost</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead className="text-right">Profit/Loss</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flightCostReport.map((flight, index) => (
          <TableRow key={index}>
            <TableCell>{flight.flightNumber}</TableCell>
            <TableCell>{flight.date}</TableCell>
            <TableCell>{flight.route}</TableCell>
            <TableCell >${flight.fuelCost}</TableCell>
            <TableCell >${flight.crewCost}</TableCell>
            <TableCell >
              ${flight.airportCharges}
            </TableCell>
            <TableCell >${flight.totalCost}</TableCell>
            <TableCell >${flight.revenue}</TableCell>
            <TableCell className="text-right">${flight.profitOrLoss}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>
            $
            {flightCostReport.reduce((acc, flight) => acc + flight.fuelCost, 0)}
          </TableCell>
          <TableCell>
            $
            {flightCostReport.reduce((acc, flight) => acc + flight.crewCost, 0)}
          </TableCell>
          <TableCell>
            $
            {flightCostReport.reduce(
              (acc, flight) => acc + flight.airportCharges,
              0
            )}
          </TableCell>
          <TableCell>
            $
            {flightCostReport.reduce(
              (acc, flight) => acc + flight.totalCost,
              0
            )}
          </TableCell>
          <TableCell>
            ${flightCostReport.reduce((acc, flight) => acc + flight.revenue, 0)}
          </TableCell>
          <TableCell className='text-right'>
            $
            {flightCostReport.reduce(
              (acc, flight) => acc + flight.profitOrLoss,
              0
            )}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
