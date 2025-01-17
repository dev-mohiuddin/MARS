import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
  } from '@/components/ui/table';

  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationLink,
    PaginationEllipsis,
    PaginationNext
  } from '@/components/ui/pagination'
  
  const charterClients = [
    {
      date: '2024-07-15',
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '5123456789001',
      company: 'janedoe.org',
    },
    {
      date: '2024-05-20',
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '9876543210011',
      company: 'mbrowninc.com',
    },
    {
      date: '2024-03-30',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '4035678901234',
      company: 'emdavis.com',
    },
    {
      date: '2024-11-10',
      name: 'Chris Johnson',
      email: 'chris.johnson@example.com',
      phone: '2149876543210',
      company: 'chrisjohnson.net',
    },
    {
      date: '2024-01-25',
      name: 'Sophia Taylor',
      email: 'sophia.taylor@example.com',
      phone: '6012345678909',
      company: 'sophiataylor.biz',
    },
  ];
  
  export function OwnerTable() {
    return (
      <div>
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {charterClients.map((client, index) => (
              <TableRow key={index}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.company}</TableCell>
                <TableCell>{client.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
              <div className='mt-5'>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href='#' />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href='#'>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href='#' isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href='#'>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href='#' />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
      </div>
    );
  }
  