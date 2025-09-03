import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Inspection {
  id: number;
  inspectionId: string;
  site: string;
  inspectionDate: string;
  inspector: string;
  issuesFound: string;
  followUpDates: string;
  status: "Active" | "Pending" | "Completed";
}

const inspections: Inspection[] = [
  {
    id: 1,
    inspectionId: "INSP-001",
    site: "St Thomas Hospital",
    inspectionDate: "2025-08-10",
    inspector: "James Foster",
    issuesFound: "Fire alarm system requires servicing",
    followUpDates: "2025-09-01",
    status: "Active",
  },
  {
    id: 2,
    inspectionId: "INSP-002",
    site: "Lewisham Health Centre",
    inspectionDate: "2025-08-12",
    inspector: "Aisha Khan",
    issuesFound: "Minor cracks in walls",
    followUpDates: "2025-09-05",
    status: "Pending",
  },
  {
    id: 3,
    inspectionId: "INSP-003",
    site: "HATS HQ – Croydon",
    inspectionDate: "2025-08-15",
    inspector: "Ben Thompson",
    issuesFound: "Emergency exit light not working",
    followUpDates: "2025-09-10",
    status: "Completed",
  },
  {
    id: 4,
    inspectionId: "INSP-004",
    site: "Royal Free Hospital",
    inspectionDate: "2025-08-18",
    inspector: "Olivia Smith",
    issuesFound: "Broken window in ward",
    followUpDates: "2025-09-12",
    status: "Active",
  },
];

export default function SiteInspection() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Inspection ID",
                "Site",
                "Inspection Date",
                "Inspector",
                "Issues Found",
                "Follow-up Dates",
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
            {inspections.map((inspection) => (
              <TableRow
                key={inspection.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {/* Inspection ID */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {inspection.inspectionId}
                </TableCell>

                {/* Site */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {inspection.site}
                </TableCell>

                {/* Inspection Date */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {inspection.inspectionDate}
                </TableCell>

                {/* Inspector */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {inspection.inspector}
                </TableCell>

                {/* Issues Found */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {inspection.issuesFound}
                </TableCell>

                {/* Follow-up Dates */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {inspection.followUpDates}
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={
                      inspection.status === "Active"
                        ? "success"
                        : inspection.status === "Completed"
                        ? "info"
                        : "warning"
                    }
                  >
                    {inspection.status}
                  </Badge>
                </TableCell>

                {/* Action (View Button only) */}
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
