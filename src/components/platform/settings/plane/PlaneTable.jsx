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
    {
      owner: "John Doe",
      tail: "N12345",
      startingHours: 1500,
      startingLandings: 350,
      taxableRate: 0.05,
      maintenanceRate: 0.02,
      charterRate: 500,
      openingBalance: 10000,
      retainerBalance: 2000,
    },
    {
      owner: "Jane Smith",
      tail: "N54321",
      startingHours: 1200,
      startingLandings: 290,
      taxableRate: 0.06,
      maintenanceRate: 0.025,
      charterRate: 550,
      openingBalance: 12000,
      retainerBalance: 2500,
    },
    {
      owner: "Michael Johnson",
      tail: "N67890",
      startingHours: 1800,
      startingLandings: 420,
      taxableRate: 0.04,
      maintenanceRate: 0.03,
      charterRate: 600,
      openingBalance: 15000,
      retainerBalance: 3000,
    },
    {
      owner: "Sarah Brown",
      tail: "N98765",
      startingHours: 900,
      startingLandings: 200,
      taxableRate: 0.055,
      maintenanceRate: 0.022,
      charterRate: 520,
      openingBalance: 11000,
      retainerBalance: 1800,
    },
    {
      owner: "Chris Lee",
      tail: "N45678",
      startingHours: 1000,
      startingLandings: 250,
      taxableRate: 0.05,
      maintenanceRate: 0.018,
      charterRate: 580,
      openingBalance: 14000,
      retainerBalance: 2600,
    },
    {
      owner: "Emily Davis",
      tail: "N87654",
      startingHours: 1300,
      startingLandings: 320,
      taxableRate: 0.045,
      maintenanceRate: 0.02,
      charterRate: 560,
      openingBalance: 12500,
      retainerBalance: 2200,
    },
  ];
  
  
  export function PlaneTable() {
    return (
      <div>
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead>Owner</TableHead>
              <TableHead>Tail </TableHead>
              <TableHead>Starting Hours</TableHead>
              <TableHead>Starting Landings</TableHead>
              <TableHead>Taxable Rate</TableHead>
              <TableHead>Maintenance Rate</TableHead>
              <TableHead>Charter Rate</TableHead>
              <TableHead>Opening Balance</TableHead>
              <TableHead>Retainer Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
            demoData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.owner}</TableCell>
                  <TableCell>{data.tail}</TableCell>
                  <TableCell>{data.startingHours}</TableCell>
                  <TableCell>{data.startingLandings}</TableCell>
                  <TableCell>{data.taxableRate}</TableCell>
                  <TableCell>{data.maintenanceRate}</TableCell>
                  <TableCell>{data.charterRate}</TableCell>
                  <TableCell>{data.openingBalance}</TableCell>
                  <TableCell>{data.retainerBalance}</TableCell>
                </TableRow>
              ))
            }
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
  