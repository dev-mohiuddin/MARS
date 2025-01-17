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

const fixedCosts = [
  {
    costType: 'Aircraft Lease',
    description: 'Monthly lease payment for the aircraft.',
    amount: 5000, 
    frequency: 'Monthly'
  },
  {
    costType: 'Insurance',
    description: 'Annual insurance cost for the aircraft.',
    amount: 12000,
    frequency: 'Annually'
  },
  {
    costType: 'Staff Salaries',
    description: 'Salaries for the flight crew, maintenance, and other staff.',
    amount: 8000, 
    frequency: 'Monthly'
  },
  {
    costType: 'Maintenance',
    description:
      'Routine maintenance costs for the aircraft, including parts and labor.',
    amount: 2000, 
    frequency: 'Monthly'
  },
  {
    costType: 'Hangar Fees',
    description: 'Parking and storage fees for the aircraft in the hangar.',
    amount: 1500,
    frequency: 'Monthly'
  },
  {
    costType: 'Licensing and Regulatory Fees',
    description: 'Fees for regulatory compliance and aircraft licensing.',
    amount: 1000, 
    frequency: 'Annually'
  }
]

export function FixedCostTable () {
  return (
    <Table>
      <TableCaption>Fixed Costs for Aircraft Management</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cost Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className='text-right'>Amount (USD)</TableHead>
          <TableHead>Frequency</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fixedCosts.map((cost, index) => (
          <TableRow key={index}>
            <TableCell>{cost.costType}</TableCell>
            <TableCell>{cost.description}</TableCell>
            <TableCell className='text-right'>${cost.amount}</TableCell>
            <TableCell>{cost.frequency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Monthly Costs</TableCell>
          <TableCell className='text-right'>
            $
            {fixedCosts
              .filter(cost => cost.frequency === 'Monthly')
              .reduce((acc, cost) => acc + cost.amount, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}


