import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/common/date-range-picker'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const RevenueExpenseProfitChart = () => {
  const [revenue, setRevenue] = useState(5000) 
  const [expenses, setExpenses] = useState(2000)

  const data = {
    labels: ['Revenue', 'Expenses'],
    datasets: [
      {
        data: [revenue, expenses],
        backgroundColor: ['#36A2EB', '#FF5733'],
        hoverBackgroundColor: ['#72B9E6', '#FF7F66']
      }
    ]
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue - Expenses</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className='mt-5'>
        <div className='flex w-full flex-col md:flex-row justify-around items-start gap-8 mx-auto'>
          <div className='w-full md:w-[400px]'>
            <Pie data={data} />
          </div>
          <div className='w-full  flex flex-col items-start md:items-end justify-end space-y-5'>
            <DatePickerWithRange />
            <Button>Download Report</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default RevenueExpenseProfitChart
