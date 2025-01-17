import { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

const airportData = [
  {
    name: "Los Angeles International Airport",
    code: "LAX",
    codeExt: "KLAX",
    city: "Los Angeles",
    state: "California",
    country: "USA",
    latitude: 33.9416,
    longitude: -118.4085,
  },
  {
    name: "Toronto Pearson International Airport",
    code: "YYZ",
    codeExt: "CYYZ",
    city: "Toronto",
    state: "Ontario",
    country: "Canada",
    latitude: 43.6777,
    longitude: -79.6248,
  },
  {
    name: "Heathrow Airport",
    code: "LHR",
    codeExt: "EGLL",
    city: "London",
    state: "England",
    country: "UK",
    latitude: 51.4700,
    longitude: -0.4543,
  },
  {
    name: "Sydney Kingsford Smith Airport",
    code: "SYD",
    codeExt: "YSSY",
    city: "Sydney",
    state: "New South Wales",
    country: "Australia",
    latitude: -33.9399,
    longitude: 151.1753,
  },
  {
    name: "Tokyo Haneda Airport",
    code: "HND",
    codeExt: "RJTT",
    city: "Tokyo",
    state: "Tokyo Prefecture",
    country: "Japan",
    latitude: 35.5494,
    longitude: 139.7798,
  },
  {
    name: "Dubai International Airport",
    code: "DXB",
    codeExt: "OMDB",
    city: "Dubai",
    state: "Dubai",
    country: "UAE",
    latitude: 25.2532,
    longitude: 55.3657,
  },
];

export function LocationTable() {
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(airportData.length / itemsPerPage);

  // Get data for the current page
  const currentData = airportData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Table className="relative">
        <TableHeader>
          <TableRow>
            <TableHead>Airport Name</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Code Ext.</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Latitude</TableHead>
            <TableHead>Longitude</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.code}</TableCell>
              <TableCell>{data.codeExt}</TableCell>
              <TableCell>{data.city}</TableCell>
              <TableCell>{data.state}</TableCell>
              <TableCell>{data.country}</TableCell>
              <TableCell>{data.latitude}</TableCell>
              <TableCell>{data.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
