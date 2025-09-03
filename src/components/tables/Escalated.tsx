import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface EscalatedReport {
  id: number;
  reportNo: string;
  site: string;
  vehicleReg: string;
  incidentType: string;
  escalatedTo: string;
  priority: "High" | "Medium" | "Low";
  date: string;
}

const escalatedReports: EscalatedReport[] = [
  {
    id: 1,
    reportNo: "ESC-001",
    site: "Site A",
    vehicleReg: "AB12 CDE",
    incidentType: "Brake Failure",
    escalatedTo: "Maintenance Team",
    priority: "High",
    date: "2025-08-20",
  },
  {
    id: 2,
    reportNo: "ESC-002",
    site: "Site B",
    vehicleReg: "XY34 ZRT",
    incidentType: "Fuel Leak",
    escalatedTo: "Safety Department",
    priority: "Medium",
    date: "2025-08-22",
  },
  {
    id: 3,
    reportNo: "ESC-003",
    site: "Site C",
    vehicleReg: "LM5B TUV",
    incidentType: "Electrical Issue",
    escalatedTo: "Electrical Engineer",
    priority: "Low",
    date: "2025-08-23",
  },
  {
    id: 4,
    reportNo: "ESC-004",
    site: "Site D",
    vehicleReg: "GH78 QWE",
    incidentType: "Engine Overheating",
    escalatedTo: "Senior Mechanic",
    priority: "High",
    date: "2025-08-25",
  },
];

export default function EscalatedReports() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1000px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Report No.",
                "Site",
                "Vehicle Reg",
                "Incident Type",
                "Escalated To",
                "Priority",
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
            {escalatedReports.map((report) => (
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

                {/* Incident Type */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.incidentType}
                </TableCell>

                {/* Escalated To */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.escalatedTo}
                </TableCell>

                {/* Priority */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={
                      report.priority === "High"
                        ? "error"
                        : report.priority === "Medium"
                        ? "warning"
                        : "info"
                    }
                  >
                    {report.priority}
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
