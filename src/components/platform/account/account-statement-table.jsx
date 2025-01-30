import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { trunCateText } from '@/lib/utils'

export function AccountStatementsTable () {
  const accountStatements = [
    {
      transactionId: 'TXN001',
      date: '2024-12-01',
      description: 'Payment for Charter Revenue',
      credit: 5000,
      debit: 0,
      balance: 5000
    },
    {
      transactionId: 'TXN002',
      date: '2024-12-02',
      description: 'Fuel Costs for Flight FL001',
      credit: 0,
      debit: 1500,
      balance: 3500
    },
    {
      transactionId: 'TXN003',
      date: '2024-12-03',
      description: 'Crew Salaries (December)',
      credit: 0,
      debit: 800,
      balance: 2700
    }
  ]

  const handleEdit = transactionId => {
    alert(`Editing transaction: ${transactionId}`)
  }

  const handleDelete = transactionId => {
    alert(`Deleting transaction: ${transactionId}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Credit (USD)</TableHead>
          <TableHead>Debit (USD)</TableHead>
          <TableHead>Balance (USD)</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accountStatements.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell>{transaction.transactionId}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>{trunCateText(transaction.description, 20)}</span>
                  </TooltipTrigger>
                  <TooltipContent>{transaction.description}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell>
              {transaction.credit > 0 ? `$${transaction.credit}` : '-'}
            </TableCell>
            <TableCell>
              {transaction.debit > 0 ? `$${transaction.debit}` : '-'}
            </TableCell>
            <TableCell>${transaction.balance}</TableCell>
            <TableCell>
              <div className='flex gap-2'>
                <Button
                  variant='link'
                  onClick={() => handleEdit(transaction.transactionId)}
                >
                  Download
                </Button>
              </div>
            </TableCell>
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
            {accountStatements.reduce(
              (acc, transaction) => acc + transaction.credit,
              0
            )}
          </TableCell>
          <TableCell>
            $
            {accountStatements.reduce(
              (acc, transaction) => acc + transaction.debit,
              0
            )}
          </TableCell>
          <TableCell>
            $
            {accountStatements.reduce(
              (acc, transaction) => acc + transaction.balance,
              0
            )}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
