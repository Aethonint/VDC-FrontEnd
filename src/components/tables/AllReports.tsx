import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Report {
  id: number;
  reportNo: string;
  site: string;
  vehicleReg: string;
  status: "Open" | "Escalated" | "Closed" | "In Review";
  date: string;
}

const reports: Report[] = [
  {
    id: 1,
    reportNo: "RPT-001",
    site: "Site A",
    vehicleReg: "AB12 CDE",
    status: "Open",
    date: "2025-08-10",
  },
  {
    id: 2,
    reportNo: "RPT-002",
    site: "Site B",
    vehicleReg: "XY34 ZRT",
    status: "Escalated",
    date: "2025-08-12",
  },
  {
    id: 3,
    reportNo: "RPT-003",
    site: "Site C",
    vehicleReg: "LM5B TUV",
    status: "In Review",
    date: "2025-08-14",
  },
  {
    id: 4,
    reportNo: "RPT-004",
    site: "Site D",
    vehicleReg: "GH78 QWE",
    status: "Closed",
    date: "2025-08-15",
  },
];

export default function AllReports() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Report No.",
                "Site",
                "Vehicle Reg",
                "Status",
                "Date",
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
            {reports.map((report) => (
              <TableRow
                key={report.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {/* Report No */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.reportNo}
                </TableCell>

                {/* Site */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.site}
                </TableCell>

                {/* Vehicle Reg */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.vehicleReg}
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={
                      report.status === "Open"
                        ? "warning"
                        : report.status === "Escalated"
                        ? "error"
                        : report.status === "Closed"
                        ? "success"
                        : "info"
                    }
                  >
                    {report.status}
                  </Badge>
                </TableCell>

                {/* Date */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.date}
                </TableCell>

                {/* Action */}
                   <TableCell className="px-5 py-4 text-center">
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
