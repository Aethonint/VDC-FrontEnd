"use client";
import React from "react";
import {
  CalendarClock,
  Wrench,
  Droplets,
  AlertTriangle,
  Building2,
} from "lucide-react";

export default function Reminders() {
  const reminders = [
    { text: "MOT expiring in 3 days", icon: <CalendarClock size={18} /> },
    { text: "Service expiring in 3 days", icon: <Wrench size={18} /> },
    { text: "Car wash expiring in 4 days", icon: <Droplets size={18} /> },
    {
      text: "Mechanical unresolved on KBX 365M",
      icon: <AlertTriangle size={18} className="text-[#002B66]" />,
    },
    { text: "Inspection at Site A overdue", icon: <Building2 size={18} /> },
    { text: "Inspection at Site B overdue", icon: <Building2 size={18} /> },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <h2 className="text-xl font-semibold text-[#002B66]">Reminders</h2>

      <div className="mt-4 space-y-2">
        {reminders.map((reminder, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-sm sm:text-base text-[#002B66]"
          >
            <span className="flex items-center justify-center w-7 h-8 rounded-md bg-gray-100">
              {reminder.icon}
            </span>
            <span>{reminder.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import {
//   BoxIconLine,
//   GroupIcon,
//   ArrowDownIcon,
//   ArrowUpIcon,
//   Incidents,
// } from "@/icons";


// export default function Reminders() {
//   return (
//     <div className="grid grid-col justify-start items-center bg-white rounded-2xl border border-gray-200 p-5 ">
     
// <h2 className="text-2xl font-semibold text-[#002B66]">
//   Reminders
// </h2>

// <div className="flex flex-col justify-start items-start pt-5">


//   <div className="flex  justify-start items-start gap-2">
//     <div> 
//       <Incidents className="w-[24px] h-[24px]" />
//    </div>

// <div>
// <h3 className="text-[#002B66]">MOT expiring in 3 days</h3>
// </div>
// </div>


// <div className="flex  justify-start items-start gap-2 pt-3">
//     <div> 
//       <Incidents className="w-[24px] h-[24px]" />
//    </div>

// <div>
// <h3 className="text-[#002B66]">Service expiring in 3 days</h3>
// </div>
// </div>


// <div className="flex  justify-start items-start gap-2  pt-3">
//     <div> 
//       <Incidents className="w-[24px] h-[24px]" />
//    </div>

// <div>
// <h3 className="text-[#002B66]">Car wash expiring in 4 days</h3>
// </div>
// </div>


// <div className="flex justify-start items-start gap-2  pt-3">
//     <div> 
//       <Incidents className="w-[24px] h-[24px]" />
//    </div>

// <div>
// <h3 className="text-[#002B66]">Mechanical unresolved on KBX 365M</h3>
// </div>
// </div>


// <div className="flex  justify-start items-start gap-2  pt-3">
//     <div> 
//       <Incidents className="w-[24px] h-[24px]" />
//    </div>

// <div>
// <h3 className="text-[#002B66]">Inspection at Site A overdue</h3>
// </div>
// </div>


// <div className="flex justify-start items-start gap-2  pt-3">
//     <div> 
//       <Incidents className="w-[24px] h-[24px]" />
//    </div>

// <div>
// <h3 className="text-[#002B66]">Inspection at Site B overdue</h3>
// </div>
// </div>

// </div>




//     </div>
//   );
// }

