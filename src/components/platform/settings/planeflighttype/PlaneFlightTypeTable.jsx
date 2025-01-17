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
  
  const demoData = [
    { Type: 'Affiliate' },
    { Type: 'Charter' },
    { Type: 'Crew Rest' },
    { Type: 'Crew Training' },
    { Type: 'Crew Vacation' },
    { Type: 'Empty Leg' },
    { Type: 'Maintenance' },
    { Type: 'Other' },
  ];
  
  export function PlaneFlightTypeTable() {
    return (
      <div>
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.Type}</TableCell>
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
  