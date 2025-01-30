import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { trunCateText } from '@/lib/utils'

const maintenanceCosts = [
    {
        maintenanceType: 'Routine Inspection',
        description: 'Standard inspection for checking all aircraft systems.',
        costAmount: 1500,
        date: '2024-06-01',
        duration: '3 hours',
        serviceProvider: 'AeroTech Maintenance Services',
        remarks: 'Performed as part of regular maintenance cycle.',
    },
    {
        maintenanceType: 'Engine Overhaul',
        description: 'Complete overhaul of the engine for performance optimization.',
        costAmount: 5000,
        date: '2024-06-05',
        duration: '12 hours',
        serviceProvider: 'Jet Engines Inc.',
        remarks: 'Required due to engine wear and tear.',
    },
    {
        maintenanceType: 'Parts Replacement',
        description: 'Replacement of landing gear components.',
        costAmount: 2000,
        date: '2024-06-10',
        duration: '4 hours',
        serviceProvider: 'Airline Parts Solutions',
        remarks: 'Replacement of hydraulic pump.',
    },
    {
        maintenanceType: 'Avionics Calibration',
        description: 'Calibration of avionics systems to ensure flight accuracy.',
        costAmount: 1200,
        date: '2024-06-15',
        duration: '2 hours',
        serviceProvider: 'TechFlight Services',
        remarks: 'Routine check-up and calibration of flight instruments.',
    },
    {
        maintenanceType: 'Wheel Replacement',
        description: 'Replacement of aircraft wheels and tires.',
        costAmount: 1000,
        date: '2024-06-18',
        duration: '1 hour',
        serviceProvider: 'AeroParts Ltd.',
        remarks: 'Critical replacement due to tire wear.',
    },
]

export function MaintenanceCostTable () {
    return (
       <Table className="min-w-max">
      {/* <TableCaption>Aircraft Maintenance Costs</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Maintenance Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead >Cost Amount (USD)</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Service Provider</TableHead>
          <TableHead>Remarks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {maintenanceCosts.map((cost, index) => (
          <TableRow key={index}>
            <TableCell>{cost.maintenanceType}</TableCell>
            <TableCell>
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>{trunCateText(cost.description, 20)}</span>
                  </TooltipTrigger>
                  <TooltipContent>{cost.description}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell >${cost.costAmount}</TableCell>
            <TableCell>{cost.date}</TableCell>
            <TableCell>{cost.duration}</TableCell>
            <TableCell>{cost.serviceProvider}</TableCell>
            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>{trunCateText(cost.remarks, 10)}</span>
                  </TooltipTrigger>
                  <TooltipContent>{cost.remarks}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total Maintenance Costs</TableCell>
          <TableCell colSpan={1} >
            ${maintenanceCosts.reduce((acc, cost) => acc + cost.costAmount, 0)}
          </TableCell>
          <TableCell colSpan={4}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    )
}
