import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Driver {
  id: number;
  name: string;
  licenseNo: string;
  contactNo: string;
  assignedSite: string;
  status: "Active" | "On leave" | "Suspended";
}

const drivers: Driver[] = [
  {
    id: 1,
    name: "James Foster",
    licenseNo: "FOSTJ80509IJ99AB",
    contactNo: "07700 900123",
    assignedSite: "St Thomas Hospital",
    status: "Active",
  },
  {
    id: 2,
    name: "Aisha Khan",
    licenseNo: "KHANA912122K88BC",
    contactNo: "07700 900456",
    assignedSite: "Lewisham Health Centre",
    status: "On leave",
  },
  {
    id: 3,
    name: "Ben Thompson",
    licenseNo: "THOMB7I0310T77CD",
    contactNo: "07700 900786",
    assignedSite: "HATS HQ – Croydon",
    status: "Suspended",
  },
  {
    id: 4,
    name: "Olivia Smith",
    licenseNo: "SMIT062082IS66DE",
    contactNo: "07700 900125",
    assignedSite: "Royal Free Hospital",
    status: "Active",
  },
];

export default function DriversTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Driver Name",
                "License No",
                "Contact No",
                "Assigned Site",
                "Status",
                "View/Edit",
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
            {drivers.map((driver) => (
              <TableRow
                key={driver.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {/* Driver Name */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.name}
                </TableCell>

                {/* License No */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.licenseNo}
                </TableCell>

                {/* Contact No */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.contactNo}
                </TableCell>

                {/* Assigned Site */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.assignedSite}
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={
                      driver.status === "Active"
                        ? "success"
                        : driver.status === "Suspended"
                        ? "error"
                        : "warning"
                    }
                  >
                    {driver.status}
                  </Badge>
                </TableCell>

                {/* View/Edit */}
               <TableCell className="px-5 py-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <button className="text-[#002B66] hover:underline">
                      View
                    </button>
                    <span className="text-gray-400">|</span>
                    <button className="text-[#002B66] hover:underline">
                      Edit
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
