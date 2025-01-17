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

export function BudgetStatementsTable () {

  const budgetData = [
    {
      expenseCategory: 'Fuel',
      estimatedCost: 15000,
      actualCost: 14500,
      variance: 500
    },
    {
      expenseCategory: 'Crew Salary',
      estimatedCost: 12000,
      actualCost: 12500,
      variance: -500
    },
    {
      expenseCategory: 'Maintenance',
      estimatedCost: 10000,
      actualCost: 9500,
      variance: 500
    },
    {
      expenseCategory: 'Insurance',
      estimatedCost: 5000,
      actualCost: 5200,
      variance: -200
    },
    {
      expenseCategory: 'Depreciation',
      estimatedCost: 2000,
      actualCost: 2000,
      variance: 0
    }
  ]

  const handleEdit = expenseCategory => {
    alert(`Editing expense category: ${expenseCategory}`)
  }

  const handleDelete = expenseCategory => {
    alert(`Deleting expense category: ${expenseCategory}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Expense Category</TableHead>
          <TableHead>Estimated Cost (USD)</TableHead>
          <TableHead>Actual Cost (USD)</TableHead>
          <TableHead>Variance (USD)</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {budgetData.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.expenseCategory}</TableCell>
            <TableCell>${data.estimatedCost}</TableCell>
            <TableCell>${data.actualCost}</TableCell>
            <TableCell>
              {data.variance > 0 ? `+${data.variance}` : data.variance}
            </TableCell>
            <TableCell >
              <div className='flex gap-2 justify-end'>
                <Button
                  onClick={() => handleEdit(data.expenseCategory)}
                >
                  Edit
                </Button>
                <Button
                  variant='link'
                  onClick={() => handleDelete(data.expenseCategory)}
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
          <TableCell>
            ${budgetData.reduce((acc, data) => acc + data.estimatedCost, 0)}
          </TableCell>
          <TableCell>
            ${budgetData.reduce((acc, data) => acc + data.actualCost, 0)}
          </TableCell>
          <TableCell>
            ${budgetData.reduce((acc, data) => acc + data.variance, 0)}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
