import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function AccountBalanceTranTable ({ transactions }) {
    
  const totalIncome = transactions.reduce(
    (acc, transaction) => acc + transaction.credit,
    0
  )
  const totalExpenses = transactions.reduce(
    (acc, transaction) => acc + transaction.debit,
    0
  )
  const netBalance = totalIncome - totalExpenses

  const handleDownloadStatement = () => {
    alert('Downloading Statement...')
  }

  return (
    <Card className='p-4'>
      <h3 className='text-xl font-semibold mb-4'>Recent Transactions</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Debit (USD)</TableHead>
            <TableHead>Credit (USD)</TableHead>
            <TableHead>Balance After Transaction (USD)</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.transactionId}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>
                {transaction.debit > 0 ? `$${transaction.debit}` : '-'}
              </TableCell>
              <TableCell>
                {transaction.credit > 0 ? `$${transaction.credit}` : '-'}
              </TableCell>
              <TableCell>${transaction.balanceAfterTransaction}</TableCell>
              <TableCell>
                <Button variant='link' onClick={handleDownloadStatement}>
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>${totalExpenses}</TableCell>
            <TableCell>${totalIncome}</TableCell>
            <TableCell>${netBalance}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  )
}

export default AccountBalanceTranTable
