import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import AccountBalanceTranTable from '@/components/platform/account/account-blance-tran-table'

export function AccountBalance () {
  const transactions = [
    {
      transactionId: 'TXN001',
      date: '2024-12-01',
      description: 'Charter Revenue from FLT001',
      debit: 0,
      credit: 5000,
      balanceAfterTransaction: 5000
    },
    {
      transactionId: 'TXN002',
      date: '2024-12-02',
      description: 'Fuel Cost for FLT001',
      debit: 1500,
      credit: 0,
      balanceAfterTransaction: 3500
    },
    {
      transactionId: 'TXN003',
      date: '2024-12-03',
      description: 'Crew Salary (December)',
      debit: 800,
      credit: 0,
      balanceAfterTransaction: 2700
    }
  ]

  const totalIncome = transactions.reduce(
    (acc, transaction) => acc + transaction.credit,
    0
  )
  const totalExpenses = transactions.reduce(
    (acc, transaction) => acc + transaction.debit,
    0
  )
  const netBalance = totalIncome - totalExpenses

  const chartData = [
    { name: 'Income', value: totalIncome },
    { name: 'Expenses', value: totalExpenses }
  ]

  const handleDownloadStatement = () => {
    alert('Downloading Statement...')
  }

  return (
    <div>
      <CardTitle>Account Balance Overview</CardTitle>

      <div className='flex flex-col md:flex-row gap-5 items-center md:items-start justify-between mt-5'>
        <div className='flex flex-col md:flex-row  justify-between items-center gap-5'>
          <Card className='mb-6 p-4'>
            <h3 className='text-xl font-semibold mb-4'>Account Overview</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
              <div>
                <h4 className='text-lg font-medium'>Account Holder</h4>
                <p className='foreground'>John Doe</p>
              </div>
              <div>
                <h4 className='text-lg font-medium'>Account Number</h4>
                <p className='foreground'>ACC-12345678</p>
              </div>
              <div>
                <h4 className='text-lg font-medium'>Currency</h4>
                <p className='foreground'>USD</p>
              </div>
            </div>
          </Card>

          {/* Financial Summary Section */}
          <Card className='mb-6 p-4'>
            <h3 className='text-xl font-semibold mb-4'>Financial Summary</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
              <div>
                <h4 className='text-lg font-medium'>Total Income</h4>
                <p className='text-primary'>${totalIncome}</p>
              </div>
              <div>
                <h4 className='text-lg font-medium'>Total Expenses</h4>
                <p className='text-red-600'>${totalExpenses}</p>
              </div>
              <div>
                <h4 className='text-lg font-medium'>Net Balance</h4>
                <p className={`text-${netBalance >= 0 ? 'green' : 'red'}-600`}>
                  ${netBalance >= 0 ? netBalance : `(${Math.abs(netBalance)})`}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className='mb-6 p-4'>
          <h3 className='text-xl font-semibold mb-4'>Income vs Expenses</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              cx='50%'
              cy='50%'
              innerRadius={50}
              outerRadius={70}
              fill='#8884d8'
              dataKey='value'
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? '#82ca9d' : '#ff7300'}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Card>
      </div>

      <AccountBalanceTranTable transactions={transactions} />

      {/* Payment Progress Section */}
      <Card className='mb-6 p-4'>
        <h3 className='text-xl font-semibold mb-4'>Payment Progress</h3>
        <div className='flex items-center justify-between gap-2'>
          <p className='text-muted-foreground flex-shrink-0'>Payment Due</p>
          <Progress value={(totalExpenses / totalIncome) * 100} />
        </div>
      </Card>

      {/* Account Actions */}
      <div className='flex gap-4 mt-6'>
        <Button onClick={handleDownloadStatement}>
          Download Full Statement
        </Button>
        <Button variant='outline'>View Payment History</Button>
      </div>
    </div>
  )
}

export default AccountBalance
