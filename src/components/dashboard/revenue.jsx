import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'

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
  { month: 'january', profit: 275, fill: 'var(--color-january)' },
  { month: 'february', profit: 200, fill: 'var(--color-february)' },
  { month: 'march', profit: 287, fill: 'var(--color-march)' },
  { month: 'april', profit: 173, fill: 'var(--color-april)' },
  { month: 'may', profit: 190, fill: 'var(--color-may)' },
  { month: 'june', profit: 275, fill: 'var(--color-january)' },
  { month: 'july', profit: 200, fill: 'var(--color-february)' },
  { month: 'august', profit: 287, fill: 'var(--color-march)' },
  { month: 'september', profit: 173, fill: 'var(--color-april)' },
  { month: 'october', profit: 190, fill: 'var(--color-may)' },
  { month: 'november', profit: 275, fill: 'var(--color-january)' },
  { month: 'december', profit: 200, fill: 'var(--color-february)' }
]

const chartConfig = {
  january: {
    label: 'January',
    color: 'hsl(var(--chart-1))'
  },
  february: {
    label: 'February',
    color: 'hsl(var(--chart-2))'
  },
  march: {
    label: 'March',
    color: 'hsl(var(--chart-3))'
  },
  april: {
    label: 'April',
    color: 'hsl(var(--chart-4))'
  },
  may: {
    label: 'May',
    color: 'hsl(var(--chart-5))'
  }
}

export function Revenue () {
  const totalprofit = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.profit, 0)
  }, [])

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto h-20 md:h-auto md:aspect-square md:max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='profit'
              nameKey='month'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalprofit.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Yearly profit
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
