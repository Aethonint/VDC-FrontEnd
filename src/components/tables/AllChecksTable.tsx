"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface VehicleCheck {
  id: number;
  vehicle: {
    image: string;
    name: string;
  };
  driver: string;
  time: string;
  timeTaken: string;
  defects: string;
  photos: string[];
  notes: string;
  status: "Active" | "Inactive";
}

const tableData: VehicleCheck[] = [
  {
    id: 1,
    vehicle: {
      image: "/images/vehicles/bus.webp",
      name: "VHC101",
    },
    driver: "John Doe",
    time: "09:15 AM",
    timeTaken: "12 mins",
    defects: "Brake issue",
    photos: [],
    notes: "Reported noise during check",
    status: "Active",
  },
  {
    id: 2,
    vehicle: {
      image: "/images/vehicles/bus.webp",
      name: "VHC102",
    },
    driver: "Alice Smith",
    time: "10:30 AM",
    timeTaken: "15 mins",
    defects: "None",
    photos: [],
    notes: "No issues",
    status: "Inactive",
  },
  {
    id: 3,
    vehicle: {
      image: "/images/vehicles/bus.webp",
      name: "VHC103",
    },
    driver: "John Doe",
    time: "09:15 AM",
    timeTaken: "11 mins",
    defects: "Brake issue",
    photos: [],
    notes: "No issue",
    status: "Active",
  },
];

export default function BasicTableOne() {
  return (
    <div className="w-full overflow-x-auto space-y-6">
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Date Range */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#002B66]">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Today</option>
            </select>
          </div>

          {/* Vehicle */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Vehicle</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#002B66]">
              <option>All Vehicles</option>
              <option>VHC101</option>
              <option>VHC102</option>
            </select>
          </div>

          {/* Driver */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Driver</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#002B66]">
              <option>All Drivers</option>
              <option>John Doe</option>
              <option>Alice Smith</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#002B66]">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Export Button */}
        <div className="sm:ml-4">
          <button className="bg-[#002B66] text-white px-6 py-2 rounded-md text-sm hover:bg-blue-800 transition duration-150 w-full sm:w-auto">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-[1000px] rounded-2xl border border-gray-200 bg-white shadow-md">
          <Table>
            <TableHeader className="bg-[#F4F7FB]">
              <TableRow>
                {[
                  "Vehicle",
                  "Driver",
                  "Time",
                  "Time Taken",
                  "Defects",
                  "Photos",
                  "Notes",
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

            <TableBody className="divide-y divide-gray-100">
              {tableData.map((entry) => (
                <TableRow
                  key={entry.id}
                  className="hover:bg-gray-50 transition-all duration-200"
                >
                  {/* Vehicle */}
                  <TableCell className="px-5 py-4">
                    <div className="flex items-center gap-3 justify-center">
                      <Image
                        src={entry.vehicle.image}
                        alt={entry.vehicle.name}
                        width={40}
                        height={40}
                        className="rounded-md object-contain"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {entry.vehicle.name}
                      </span>
                    </div>
                  </TableCell>

                  {/* Driver */}
                  <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                    {entry.driver}
                  </TableCell>

                  {/* Time */}
                  <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                    {entry.time}
                  </TableCell>

                  {/* Time Taken */}
                  <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                    {entry.timeTaken}
                  </TableCell>

                  {/* Defects */}
                  <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                    {entry.defects}
                  </TableCell>

                  {/* Photos */}
                  <TableCell className="px-5 py-4 text-center">
                    <button className="text-xs px-4 py-1.5 bg-[#002B66] text-white rounded hover:bg-[#00357a] transition">
                      View
                    </button>
                  </TableCell>

                  {/* Notes */}
                  <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                    {entry.notes}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="px-5 py-4 text-center">
                    <Badge
                      size="sm"
                      color={entry.status === "Active" ? "success" : "error"}
                    >
                      {entry.status}
                    </Badge>
                  </TableCell>

                  {/* Actions */}
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
    </div>
  );
}



// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import Badge from "../ui/badge/Badge";
// import Image from "next/image";

// interface VehicleCheck {
//   id: number;
//   vehicle: {
//     image: string;
//     name: string;
//   };
//   driver: string;
//   time: string;
//   timeTaken: string;
//   defects: string;
//   photos: string[];
//   notes: string;
//   status: "Active" | "Inactive";
// }

// const tableData: VehicleCheck[] = [
//   {
//     id: 1,
//     vehicle: {
//       image: "/images/vehicles/bus.webp",
//       name: "VHC101",
//     },
//     driver: "John Doe",
//     time: "09:15 AM",
//     timeTaken: "12 mins",
//     defects: "Brake issue",
//     photos: [],
//     notes: "Reported noise during check",
//     status: "Active",
//   },
//   {
//     id: 2,
//     vehicle: {
//       image: "/images/vehicles/bus.webp",
//       name: "VHC102",
//     },
//     driver: "Alice Smith",
//     time: "10:30 AM",
//     timeTaken: "15 mins",
//     defects: "None",
//     photos: [],
//     notes: "No issues",
//     status: "Inactive",
//   },
//   {
//     id: 3,
//     vehicle: {
//       image: "/images/vehicles/bus.webp",
//       name: "VHC103",
//     },
//     driver: "John Doe",
//     time: "09:15 AM",
//     timeTaken: "11 mins",
//     defects: "Brake issue",
//     photos: [],
//     notes: "No issue",
//     status: "Active",
//   },
// ];

// export default function BasicTableOne() {
//   return (
//     <div className="w-full overflow-x-auto">
//       <div className="min-w-[1000px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
//         <Table>
//           <TableHeader className="bg-[#F4F7FB]">
//             <TableRow>
//               {[
//                 "Vehicle",
//                 "Driver",
//                 "Time",
//                 "Time Taken",
//                 "Defects",
//                 "Photos",
//                 "Notes",
//                 "Status",
//                 "Action",
//               ].map((header, i) => (
//                 <TableCell
//                   key={i}
//                   isHeader
//                   className="px-5 py-4 text-sm font-semibold text-[#002B66] text-center"
//                 >
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHeader>

//           <TableBody className="divide-y divide-gray-100">
//             {tableData.map((entry) => (
//               <TableRow
//                 key={entry.id}
//                 className="hover:bg-gray-50 transition-all duration-200"
//               >
//                 {/* Vehicle */}
//                 <TableCell className="px-5 py-4">
//                   <div className="flex items-center gap-3 justify-center">
//                     <Image
//                       src={entry.vehicle.image}
//                       alt={entry.vehicle.name}
//                       width={40}
//                       height={40}
//                       className="rounded-md object-contain"
//                     />
//                     <span className="text-sm font-medium text-gray-800">
//                       {entry.vehicle.name}
//                     </span>
//                   </div>
//                 </TableCell>

//                 {/* Driver */}
//                 <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
//                   {entry.driver}
//                 </TableCell>

//                 {/* Time */}
//                 <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
//                   {entry.time}
//                 </TableCell>

//                 {/* Time Taken */}
//                 <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
//                   {entry.timeTaken}
//                 </TableCell>

//                 {/* Defects */}
//                 <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
//                   {entry.defects}
//                 </TableCell>

//                 {/* Photos */}
//                 <TableCell className="px-5 py-4 text-center">
//                   <label className="cursor-pointer text-xs text-[#002B66] bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200 transition">
//                     Upload
//                     <input type="file" multiple className="hidden" />
//                   </label>
//                 </TableCell>

//                 {/* Notes */}
//                 <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
//                   {entry.notes}
//                 </TableCell>

//                 {/* Status */}
//                 <TableCell className="px-5 py-4 text-center">
//                   <Badge
//                     size="sm"
//                     color={entry.status === "Active" ? "success" : "error"}
//                   >
//                     {entry.status}
//                   </Badge>
//                 </TableCell>

//                 {/* Actions */}
//                 <TableCell className="px-5 py-4 text-center">
//                   <div className="flex items-center justify-center gap-2 text-sm">
//                     <button className="text-[#002B66] hover:underline">
//                       View
//                     </button>
//                     <span className="text-gray-400">|</span>
//                     <button className="text-[#002B66] hover:underline">
//                       Edit
//                     </button>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }