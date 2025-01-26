import React from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend)

function FlightLogTable () {

    const summaryData = {
        hoursStart: 128.7,
        hoursDuring: 40,
        hoursEnd: 128.7,
        cyclesStart: 74,
        cyclesDuring: 60,
        cyclesEnd: 74,
    }

    const hoursData = {
        labels: ['Start of Period', 'Hours During Period', 'End of Period'],
        datasets: [
            {
                label: 'Hours',
                data: [summaryData.hoursStart, summaryData.hoursDuring, summaryData.hoursEnd],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1,
            },
        ],
    }

    const cyclesData = {
        labels: ['Start of Period', 'Cycles During Period', 'End of Period'],
        datasets: [
            {
                label: 'Cycles',
                data: [summaryData.cyclesStart, summaryData.cyclesDuring, summaryData.cyclesEnd],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className='space-y-8'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Card className='p-4'>
                    <h3 className='text-xl font-semibold mb-4'>Hours Summary</h3>
                    <Doughnut
                        data={hoursData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                animation: {
                                    animateScale: true,
                                },
                            },
                        }}
                    />
                </Card>

                <Card className='p-4 '>
                    <h3 className='text-xl font-semibold mb-4'>Cycles Summary</h3>
                    <Doughnut
                        data={cyclesData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                animation: {
                                    animateScale: true,
                                },
                            },
                        }}
                    />
                </Card>
            </div>
        </div>
    )
}

export default FlightLogTable
