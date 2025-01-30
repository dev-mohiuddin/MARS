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


const variableCosts = [
    {
        costType: 'Fuel',
        amountPerFlight: 1500,
        flightDistance: 1500,
        remarks: 'Fuel cost depends on aircraft type and distance',
    },
    {
        costType: 'Crew Payments',
        amountPerFlight: 1000,
        flightDistance: 1200,
        remarks: 'Payment includes pilots and flight attendants',
    },
    {
        costType: 'Catering',
        amountPerFlight: 500,
        numberOfPassengers: 50,
        remarks: 'Catering cost depends on passenger count',
    },
    {
        costType: 'Landing and Handling Fees',
        amountPerFlight: 200,
        flightDistance: 1000,
        remarks: 'Fees vary by airport and location',
    },
    {
        costType: 'Insurance',
        amountPerFlight: 300,
        flightDistance: 1500,
        remarks: 'Insurance costs vary by distance and aircraft type',
    },
]

export function VariableCostTable () {
    return (
        <Table>
            {/* <TableCaption>Variable Costs for Aircraft Operations</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>Cost Type</TableHead>
                    <TableHead>Amount per Flight (USD)</TableHead>
                    <TableHead>Flight Distance (km)</TableHead>
                    <TableHead>Remarks</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {variableCosts.map((cost, index) => (
                    <TableRow key={index}>
                        <TableCell>{cost.costType}</TableCell>
                        <TableCell>${cost.amountPerFlight}</TableCell>
                        <TableCell>{cost.flightDistance}</TableCell>
                        <TableCell>
                            {' '}
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
                    <TableCell colSpan={1}>Total Maintenance Costs</TableCell>
                    <TableCell colSpan={1}>
                        ${variableCosts.reduce((acc, cost) => acc + cost.amountPerFlight, 0)}
                    </TableCell>
                    <TableCell colSpan={1}></TableCell>
                    <TableCell colSpan={2}></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
