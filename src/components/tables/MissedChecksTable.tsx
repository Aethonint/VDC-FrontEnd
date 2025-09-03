// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import Badge from "../ui/badge/Badge";

// // Updated interface
// interface VehicleCheck {
//   id: number;
//   vehicle: {
//     image: string;
//     name: string;
//   };
//   driver: string;
//   time: string; // Scheduled Time
//   timeTaken: string; // Last Seen
//   defects: string;
//   photos: string[];
//   notes: string; // Reason
//   status: "Active" | "Inactive"; // Becomes Incomplete / Missed
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
//     time: "11:00 AM",
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
//       <div className="min-w-[1000px] overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//         <Table>
//           <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//             <TableRow>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Vehicle</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Driver</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Scheduled Time</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Last Seen</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Status</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Photos</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">Reasons</TableCell>
//               <TableCell isHeader className="px-4 py-3 text-center text-[15px] font-bold text-black">View</TableCell>
//             </TableRow>
//           </TableHeader>

//           <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//             {tableData.map((entry) => (
//               <TableRow key={entry.id}>
//                 {/* Vehicle */}
//                 <TableCell className="px-4 py-3">
//                   <div className="flex items-center gap-3 justify-center">
//                     <img
//                       src={entry.vehicle.image}
//                       alt={entry.vehicle.name}
//                       className="w-14 h-14 object-contain rounded-md"
//                     />
//                     <span className="text-sm font-medium text-gray-800 dark:text-white">
//                       {entry.vehicle.name}
//                     </span>
//                   </div>
//                 </TableCell>

//                 {/* Driver */}
//                 <TableCell className="px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300">
//                   {entry.driver}
//                 </TableCell>

//                 {/* Scheduled Time */}
//                 <TableCell className="px-4 py-3 text-center text-sm text-gray-700">
//                   {entry.time}
//                 </TableCell>

//                 {/* Last Seen */}
//                 <TableCell className="px-4 py-3 text-center text-sm text-gray-700">
//                   {entry.timeTaken}
//                 </TableCell>

//                 {/* Status */}
//                 <TableCell className="px-4 py-3 text-center">
//                   <Badge
//                     size="sm"
//                     color={entry.status === "Active" ? "warning" : "error"}
//                   >
//                     {entry.status === "Active" ? "Incomplete" : "Missed"}
//                   </Badge>
//                 </TableCell>

//                 {/* Photos */}
//                 <TableCell className="px-4 py-3 text-center">
//                   <label className="cursor-pointer text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
//                     Upload
//                     <input type="file" multiple className="hidden" />
//                   </label>
//                 </TableCell>

//                 {/* Reasons */}
//                 <TableCell className="px-4 py-3 text-center text-sm text-gray-700">
//                   {entry.notes}
//                 </TableCell>

//                 {/* View */}
//                 <TableCell className="px-4 py-3 text-center">
//                   <button className="text-sm px-3 py-1 bg-brand-500 text-white rounded hover:bg-brand-600">
//                     View
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }


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
    vehicle: { image: "/images/vehicles/bus.webp", name: "VHC101" },
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
    vehicle: { image: "/images/vehicles/bus.webp", name: "VHC102" },
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
    vehicle: { image: "/images/vehicles/bus.webp", name: "VHC103" },
    driver: "John Doe",
    time: "11:00 AM",
    timeTaken: "11 mins",
    defects: "Brake issue",
    photos: [],
    notes: "No issue",
    status: "Active",
  },
];

export default function BasicTableOne() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1000px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <Table>
          <TableHeader className="bg-[#F4F7FB]">
            <TableRow>
              {[
                "Vehicle",
                "Driver",
                "Scheduled Time",
                "Last Seen",
                "Status",
                "Photos",
                "Reasons",
                "Actions",
              ].map((heading, idx) => (
                <TableCell
                  key={idx}
                  isHeader
                  className="px-5 py-4 text-center text-sm font-semibold text-[#002B66]"
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100">
            {tableData.map((entry) => (
              <TableRow
                key={entry.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Vehicle */}
                <TableCell className="px-5 py-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    {/* <img
                      src={entry.vehicle.image}
                      alt={entry.vehicle.name}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                    /> */}
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

                {/* Scheduled Time */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {entry.time}
                </TableCell>

                {/* Last Seen */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700">
                  {entry.timeTaken}
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4 text-center">
                  <Badge
                    size="sm"
                    color={entry.status === "Active" ? "warning" : "error"}
                  >
                    {entry.status === "Active" ? "Incomplete" : "Missed"}
                  </Badge>
                </TableCell>

                {/* Photos */}

 <TableCell className="px-5 py-4 text-center">
                  <button className="text-xs px-4 py-1.5 bg-[#002B66] text-white rounded hover:bg-[#00357a] transition">
                    View
                  </button>
                </TableCell>

                {/* <TableCell className="px-5 py-4 text-center">
                  <label className="inline-block cursor-pointer text-xs text-white bg-[#002B66] px-3 py-1.5 rounded hover:bg-[#00357a] transition">
                    Upload
                    <input type="file" multiple className="hidden" />
                  </label>
                </TableCell> */}

                {/* Reasons */}
                <TableCell className="px-5 py-4 text-center text-sm text-gray-700 max-w-[200px] truncate">
                  {entry.notes}
                </TableCell>

                {/* View */}

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

                {/* <TableCell className="px-5 py-4 text-center">
                  <button className="text-xs px-4 py-1.5 bg-[#002B66] text-white rounded hover:bg-[#00357a] transition">
                    View
                  </button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
