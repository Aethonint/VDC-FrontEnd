import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Site {
  id: number;
  siteName: string;
  siteCode: number;
  address: string;
  region: string;
  assignedManager: string;
  vehiclesAssigned: number;
}

const sites: Site[] = [
  {
    id: 1,
    siteName: "St Thomas Hospital",
    siteCode: 1001,
    address: "Westminster Bridge Rd, London SE1 7EH",
    region: "London Central",
    assignedManager: "James Foster",
    vehiclesAssigned: 12,
  },
  {
    id: 2,
    siteName: "Lewisham Health Centre",
    siteCode: 1002,
    address: "Lewisham High St, London SE13",
    region: "London South",
    assignedManager: "Aisha Khan",
    vehiclesAssigned: 8,
  },
  {
    id: 3,
    siteName: "HATS HQ – Croydon",
    siteCode: 1003,
    address: "1 Croydon Rd, Croydon CR0",
    region: "London South",
    assignedManager: "Ben Thompson",
    vehiclesAssigned: 15,
  },
  {
    id: 4,
    siteName: "Royal Free Hospital",
    siteCode: 1004,
    address: "Pond St, Hampstead NW3",
    region: "London North",
    assignedManager: "Olivia Smith",
    vehiclesAssigned: 20,
  },
];

export default function SiteList() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Site Name",
                "Site Code",
                "Address",
                "Region",
                "Assigned Manager",
                "Vehicles Assigned",
              ].map((header, i) => (
                <TableCell
                  key={i}
                  isHeader
                  className="px-5 py-4 text-sm font-semibold text-[#002B66] text-center"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100">
            {sites.map((site) => (
              <TableRow
                key={site.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {/* Site Name */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {site.siteName}
                </TableCell>

                {/* Site Code */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {site.siteCode}
                </TableCell>

                {/* Address */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {site.address}
                </TableCell>

                {/* Region */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {site.region}
                </TableCell>

                {/* Assigned Manager */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {site.assignedManager}
                </TableCell>

                {/* Vehicles Assigned */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {site.vehiclesAssigned}
                </TableCell>

             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
