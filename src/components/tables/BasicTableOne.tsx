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
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1000px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
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

                {/* <TableCell className="px-5 py-4 text-center">
                  <label className="cursor-pointer text-xs text-[#002B66] bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200 transition">
                    Upload
                    <input type="file" multiple className="hidden" />
                  </label>
                </TableCell> */}

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

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

// // Define the table data using the interface
// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Lindsey Curtis",
//       role: "Web Designer",
//     },
//     projectName: "Agency Website",
//     team: {
//       images: [
//         "/images/user/user-22.jpg",
//         "/images/user/user-23.jpg",
//         "/images/user/user-24.jpg",
//       ],
//     },
//     budget: "3.9K",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Kaiya George",
//       role: "Project Manager",
//     },
//     projectName: "Technology",
//     team: {
//       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
//     },
//     budget: "24.9K",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Zain Geidt",
//       role: "Content Writing",
//     },
//     projectName: "Blog Writing",
//     team: {
//       images: ["/images/user/user-27.jpg"],
//     },
//     budget: "12.7K",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     projectName: "Social Media",
//     team: {
//       images: [
//         "/images/user/user-28.jpg",
//         "/images/user/user-29.jpg",
//         "/images/user/user-30.jpg",
//       ],
//     },
//     budget: "2.8K",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Carla George",
//       role: "Front-end Developer",
//     },
//     projectName: "Website",
//     team: {
//       images: [
//         "/images/user/user-31.jpg",
//         "/images/user/user-32.jpg",
//         "/images/user/user-33.jpg",
//       ],
//     },
//     budget: "4.5K",
//     status: "Active",
//   },
// ];

// export default function BasicTableOne() {
//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <div className="min-w-[1102px]">
//           <Table>
//             {/* Table Header */}
//             <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//               <TableRow>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   User
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Project Name
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Team
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Status
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Budget
//                 </TableCell>
//               </TableRow>
//             </TableHeader>

//             {/* Table Body */}
//             <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//               {tableData.map((order) => (
//                 <TableRow key={order.id}>
//                   <TableCell className="px-5 py-4 sm:px-6 text-start">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 overflow-hidden rounded-full">
//                         <Image
//                           width={40}
//                           height={40}
//                           src={order.user.image}
//                           alt={order.user.name}
//                         />
//                       </div>
//                       <div>
//                         <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                           {order.user.name}
//                         </span>
//                         <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                           {order.user.role}
//                         </span>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {order.projectName}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <div className="flex -space-x-2">
//                       {order.team.images.map((teamImage, index) => (
//                         <div
//                           key={index}
//                           className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
//                         >
//                           <Image
//                             width={24}
//                             height={24}
//                             src={teamImage}
//                             alt={`Team member ${index + 1}`}
//                             className="w-full"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <Badge
//                       size="sm"
//                       color={
//                         order.status === "Active"
//                           ? "success"
//                           : order.status === "Pending"
//                           ? "warning"
//                           : "error"
//                       }
//                     >
//                       {order.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                     {order.budget}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }
