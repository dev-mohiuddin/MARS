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

export function PlaneDocumentsTable () {
  const planeDocuments = [
    {
      documentType: 'Aircraft Registration',
      documentId: 'REG12345',
      issueDate: '2022-05-01',
      expirationDate: '2027-05-01',
      status: 'Active',
      remarks: 'Valid registration'
    },
    {
      documentType: 'Airworthiness Certificate',
      documentId: 'AC45678',
      issueDate: '2023-01-15',
      expirationDate: '2026-01-15',
      status: 'Active',
      remarks: 'Passed all inspections'
    },
    {
      documentType: 'Maintenance Log',
      documentId: 'ML89012',
      issueDate: '2024-04-01',
      expirationDate: 'N/A',
      status: 'Ongoing',
      remarks: 'Routine maintenance completed'
    },
    {
      documentType: 'Insurance Policy',
      documentId: 'INS78901',
      issueDate: '2024-01-01',
      expirationDate: '2025-01-01',
      status: 'Active',
      remarks: 'Fully insured for all risks'
    },
    {
      documentType: 'Flight Crew Qualification',
      documentId: 'FCQ56789',
      issueDate: '2023-07-01',
      expirationDate: '2026-07-01',
      status: 'Active',
      remarks: 'Pilot certified for all aircraft types'
    }
  ]

  const handleView = documentId => {
    alert(`Viewing document: ${documentId}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Document Type</TableHead>
          <TableHead>Document ID</TableHead>
          <TableHead>Issue Date</TableHead>
          <TableHead>Expiration Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Remarks</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {planeDocuments.map((doc, index) => (
          <TableRow key={index}>
            <TableCell>{doc.documentType}</TableCell>
            <TableCell>{doc.documentId}</TableCell>
            <TableCell>{doc.issueDate}</TableCell>
            <TableCell>{doc.expirationDate}</TableCell>
            <TableCell>{doc.status}</TableCell>
            <TableCell>{doc.remarks}</TableCell>
            <TableCell>
              <div className='flex gap-2'>
                <Button
                  variant='link'
                  onClick={() => handleView(doc.documentId)}
                >
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7}>
            <Button variant='link'>View All Documents</Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
