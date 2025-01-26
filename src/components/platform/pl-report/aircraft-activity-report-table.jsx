import React from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function AircraftActivityReportTable () {
    const data = [
        {
            logNumber: '001',
            flight: 'FL123',
            date: '2024-12-01',
            client: 'Client A',
            hours: 3,
            type: 'charter',
            details: 'Business trip to NYC',
        },
        {
            logNumber: '002',
            flight: 'FL124',
            date: '2024-12-02',
            client: 'Client B',
            hours: 2,
            type: 'owner',
            details: 'Private flight to LA',
        },
        {
            logNumber: '003',
            flight: 'FL125',
            date: '2024-12-03',
            client: 'Client C',
            hours: 4,
            type: 'charter',
            details: 'Delivery to Chicago',
        },
    ]

    return (
        <Card className='p-4'>
            <h3 className='text-xl font-semibold mb-4'>Flight Log - January 2024</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Log #</TableHead>
                        <TableHead>Flight</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>Flight Detail</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((entry, index) => (
                        <TableRow key={index}>
                            <TableCell>{entry.logNumber}</TableCell>
                            <TableCell>{entry.flight}</TableCell>
                            <TableCell>{entry.date}</TableCell>
                            <TableCell>{entry.client}</TableCell>
                            <TableCell>{entry.hours}</TableCell>
                            <TableCell>{entry.details}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter >
                    <TableRow>
                        <TableCell>Total Hours</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>{data.reduce((sum, entry) => sum + entry.hours, 0)}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Charter Hours (revenue)</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            {data
                                .filter(entry => entry.type === 'charter')
                                .reduce((sum, entry) => sum + entry.hours, 0)}
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Owner Hours (non-revenue)</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            {data.filter(entry => entry.type === 'owner').reduce((sum, entry) => sum + entry.hours, 0)}
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Card>
    )
}

export default AircraftActivityReportTable
