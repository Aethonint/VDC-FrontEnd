import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Defect {
  id: number;
  vehicleRegNo: string;
  dateReported: string;
  defectType: string;
  reportedBy: string;
  priority: "High" | "Medium" | "Low";
}

const defects: Defect[] = [
  {
    id: 1,
    vehicleRegNo: "AB12 CDE",
    dateReported: "2025-08-10",
    defectType: "Brake Failure",
    reportedBy: "James Foster",
    priority: "High",
  },
  {
    id: 2,
    vehicleRegNo: "XY34 ZRT",
    dateReported: "2025-08-12",
    defectType: "Headlight Issue",
    reportedBy: "Aisha Khan",
    priority: "Medium",
  },
  {
    id: 3,
    vehicleRegNo: "LM5B TUV",
    dateReported: "2025-08-15",
    defectType: "Flat Tire",
    reportedBy: "Ben Thompson",
    priority: "Low",
  },
  {
    id: 4,
    vehicleRegNo: "GH78 QWE",
    dateReported: "2025-08-20",
    defectType: "Engine Noise",
    reportedBy: "Olivia Smith",
    priority: "High",
  },
];

export default function ActiveDefects() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Vehicle Reg No.",
                "Date Reported",
                "Defect Type",
                "Reported By",
                "Priority",
                "Status",
                "Action",
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
            {defects.map((defect) => (
              <TableRow
                key={defect.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {/* Vehicle Reg No */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {defect.vehicleRegNo}
                </TableCell>

                {/* Date Reported */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {defect.dateReported}
                </TableCell>

                {/* Defect Type */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {defect.defectType}
                </TableCell>

                {/* Reported By */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {defect.reportedBy}
                </TableCell>

                {/* Priority */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={
                      defect.priority === "High"
                        ? "error"
                        : defect.priority === "Medium"
                        ? "warning"
                        : "success"
                    }
                  >
                    {defect.priority}
                  </Badge>
                </TableCell>

                {/* Notes/Images */}
               <TableCell className="px-5 py-4 text-center">
                  <button className="text-xs px-4 py-1.5 bg-[#002B66] text-white rounded hover:bg-[#00357a] transition">
                    Open
                  </button>
                </TableCell>

                {/* Action */}
                <TableCell className="px-5 py-4 text-center">
                  {/* <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Mark Resolved
                  </button> */}
                      <button className="text-xs px-4 py-1.5 bg-[#002B66] text-white rounded hover:bg-[#00357a] transition">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
