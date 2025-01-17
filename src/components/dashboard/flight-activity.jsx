import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
const chartData = [
  { month: 'December', charter: 186, owner: 80 },
  { month: 'January', charter: 305, owner: 200 },
  { month: 'February', charter: 237, owner: 120 },
  { month: 'March', charter: 73, owner: 190 },
  { month: 'April', charter: 209, owner: 130 },
  { month: 'May', charter: 214, owner: 140 },
  { month: 'Jun', charter: 186, owner: 80 },
  { month: 'July', charter: 305, owner: 200 },
  { month: 'August', charter: 237, owner: 120 },
  { month: 'September', charter: 73, owner: 190 },
  { month: 'October', charter: 209, owner: 130 },
  { month: 'November', charter: 214, owner: 140 }
]

const chartConfig = {
  charter: {
    label: 'Charter',
    color: 'hsl(var(--chart-1))'
  },
  owner: {
    label: 'Owner',
    color: 'hsl(var(--chart-2))'
  }
}

export function FlightActivity () {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flight Activity</CardTitle>
        <CardDescription>From December 2024 to November 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' />}
            />
            <Area
              dataKey='owner'
              type='natural'
              fill='var(--color-owner)'
              fillOpacity={0.4}
              stroke='var(--color-owner)'
              stackId='a'
            />
            <Area
              dataKey='charter'
              type='natural'
              fill='var(--color-charter)'
              fillOpacity={0.4}
              stroke='var(--color-charter)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>
              March 2024 - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
