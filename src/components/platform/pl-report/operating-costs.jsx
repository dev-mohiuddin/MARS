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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { trunCateText } from '@/lib/utils'

const operatingCosts = [
    {
        costType: 'Fuel',
        description: 'Fuel costs for aircraft during the flight.',
        amount: 3000,
        frequency: 'Per Flight',
        remarks: 'Varies based on distance and aircraft type',
    },
    {
        costType: 'Crew Salaries',
        description: 'Salaries for the flight crew, including pilots and flight attendants.',
        amount: 1500,
        frequency: 'Monthly',
        remarks: 'Includes both pilots and cabin crew',
    },
    {
        costType: 'Landing Fees',
        description: 'Fees paid to the airport for landing the aircraft.',
        amount: 500,
        frequency: 'Per Flight',
        remarks: 'Varies by airport and location',
    },
    {
        costType: 'Maintenance',
        description: 'Cost for routine maintenance and repair of aircraft.',
        amount: 2000,
        frequency: 'Monthly',
        remarks: 'Covers regular inspections and repairs',
    },
    {
        costType: 'Airport Parking Fees',
        description: 'Parking fees for the aircraft at the airport.',
        amount: 1000,
        frequency: 'Monthly',
        remarks: 'Depends on airport location and parking facilities',
    },
    {
        costType: 'Catering',
        description: 'Food and beverage costs for passengers during the flight.',
        amount: 300,
        frequency: 'Per Flight',
        remarks: 'Depends on passenger count and flight duration',
    },
]

export function OperatingCostTable () {
    return (
        <Table>
            {/* <TableCaption>Operating Costs for Aircraft Management</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead>Cost Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead >Amount (USD)</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Remarks</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {operatingCosts.map((cost, index) => (
                    <TableRow key={index}>
                        <TableCell>{cost.costType}</TableCell>
                        <TableCell>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><span>{trunCateText(cost.description, 20)}</span></TooltipTrigger>
                                    <TooltipContent>{cost.description}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableCell>
                        <TableCell >${cost.amount}</TableCell>
                        <TableCell>{cost.frequency}</TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild><span>{trunCateText(cost.remarks, 10)}</span></TooltipTrigger>
                              <TooltipContent>{cost.remarks}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>Total Monthly Operating Costs</TableCell>
                    <TableCell colSpan={2}>
                        $
                        {operatingCosts
                            .filter(cost => cost.frequency === 'Monthly')
                            .reduce((acc, cost) => acc + cost.amount, 0)}
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
