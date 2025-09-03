import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Report {
  id: number;
  reportId: string;
  siteName: string;
  date: string;
  reportType: string;
  submittedBy: string;
  summary: string;
  assignedTo: string;
}

const reports: Report[] = [
  {
    id: 1,
    reportId: "RPT-1001",
    siteName: "St Thomas Hospital",
    date: "2025-08-01",
    reportType: "Safety",
    submittedBy: "James Foster",
    summary: "Routine safety inspection completed.",
    assignedTo: "Olivia Smith",
  },
  {
    id: 2,
    reportId: "RPT-1002",
    siteName: "Lewisham Health Centre",
    date: "2025-08-05",
    reportType: "Maintenance",
    submittedBy: "Aisha Khan",
    summary: "HVAC system issue identified.",
    assignedTo: "Ben Thompson",
  },
  {
    id: 3,
    reportId: "RPT-1003",
    siteName: "HATS HQ – Croydon",
    date: "2025-08-10",
    reportType: "Incident",
    submittedBy: "Ben Thompson",
    summary: "Minor accident reported in parking area.",
    assignedTo: "James Foster",
  },
  {
    id: 4,
    reportId: "RPT-1004",
    siteName: "Royal Free Hospital",
    date: "2025-08-15",
    reportType: "Audit",
    submittedBy: "Olivia Smith",
    summary: "Quarterly audit submitted.",
    assignedTo: "Aisha Khan",
  },
];

export default function ReportList() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Report ID",
                "Site Name",
                "Date",
                "Report Type",
                "Submitted By",
                "Summary",
                "Action",
                "Assigned To",
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
                {/* Report ID */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.reportId}
                </TableCell>

                {/* Site Name */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.siteName}
                </TableCell>

                {/* Date */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.date}
                </TableCell>

                {/* Report Type */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.reportType}
                </TableCell>

                {/* Submitted By */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.submittedBy}
                </TableCell>

                {/* Summary */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.summary}
                </TableCell>

                {/* Action (View Button only) */}
               
<TableCell className="px-5 py-4 text-center">
                  <button className="text-xs px-4 py-1.5 bg-[#002B66] text-white rounded hover:bg-[#00357a] transition">
                    View
                  </button>
                </TableCell>

                {/* Assigned To */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {report.assignedTo}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
