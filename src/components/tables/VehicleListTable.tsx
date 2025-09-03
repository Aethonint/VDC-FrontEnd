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
  VehicleRegNo: string;
  VehicleType: string;
  AssignedDriver: string;
  MotExpiry: string;
  InsuranceExpiry: string;
  ServiceDue: string;
  status: "Active" | "Off-Road" | "In Repair";
}

const drivers: Driver[] = [
  {
    id: 1,
    VehicleRegNo: "AB12 CDE",
    VehicleType: "Ambulance",
    AssignedDriver: "James Foster",
    MotExpiry: "12/11/25",
    InsuranceExpiry: "10/10/25",
    ServiceDue: "01/05/25",
    status: "Active",
  },
  {
    id: 2,
    VehicleRegNo: "XY34 ZRT",
    VehicleType: "CAR",
    AssignedDriver: "Aisha Khan",
    MotExpiry: "12/11/25",
   InsuranceExpiry: "10/10/25",
    ServiceDue: "01/05/25",
    status: "Off-Road",
  },
  {
    id: 3,
    VehicleRegNo: "LM5B TUV",
    VehicleType: "MiniBus",
    AssignedDriver: "Ben Thompson",
    MotExpiry: "12/11/25",
   InsuranceExpiry: "10/10/25",
    ServiceDue: "01/05/25",
    status: "In Repair",
  },
  {
    id: 4,
    VehicleRegNo: "GH78 QWE",
    VehicleType: "Ambulance",
    AssignedDriver: "Olivia Smith",
    MotExpiry: "12/11/25",
   InsuranceExpiry: "10/10/25",
    ServiceDue: "01/05/25",
    status: "Active",
  },
];

export default function VehicleList() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Vehicle Reg No.",
                "Vehicle Type",
                "Assigned Drivers",
                "MOT Expiry",
                "Insurance Expiry",
                "Service Due",

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
                  {driver.VehicleRegNo}
                </TableCell>

                {/* License No */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.VehicleType}
                </TableCell>

                {/* Contact No */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.AssignedDriver}
                </TableCell>

                {/* Assigned Site */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.MotExpiry}
                </TableCell>

                 {/* Assigned Site */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.InsuranceExpiry}
                </TableCell>

                 {/* Assigned Site */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {driver.ServiceDue}
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={
                      driver.status === "Active"
                        ? "success"
                        : driver.status === "In Repair"
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
