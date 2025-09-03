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


// export default function QuickActions() {
//   return (
//     <div className="grid grid-col justify-start items-center bg-white rounded-2xl border border-gray-200 p-5 ">
     
// <h2 className="text-2xl font-semibold text-[#002B66]">
//   Quick Actions
// </h2>

// <div className="flex flex-col justify-start items-start pt-5">



//   <div className="flex  justify-center items-center gap-2">
  
//      <div className="flex items-center justify-center bg-gray-100 rounded-xl p-2">
//       <GroupIcon className="w-[24px] h-[24px] " />
//         </div>
// <Link href="/" >
// <div className="hover:underline">
// <h3 className="text-[#002B66]">Add Vechicle</h3>
// </div>
// </Link>
// </div>


// <div className="flex  justify-center items-center gap-2 pt-2">
  
//      <div className="flex items-center justify-center bg-gray-100 rounded-xl p-2">
//       <GroupIcon className="w-[24px] h-[24px] " />
//         </div>
// <Link href="/" >
// <div className="hover:underline">
// <h3 className="text-[#002B66]">Add Driver</h3>
// </div>
// </Link>
// </div>


// <div className="flex  justify-center items-center gap-2 pt-2">
  
//      <div className="flex items-center justify-center bg-gray-100 rounded-xl p-2">
//       <GroupIcon className="w-[24px] h-[24px] " />
//         </div>
// <Link href="/" >
// <div className="hover:underline">
// <h3 className="text-[#002B66]">Upload Document</h3>
// </div>
// </Link>
// </div>


// <div className="flex  justify-center items-center gap-2 pt-2">
  
//      <div className="flex items-center justify-center bg-gray-100 rounded-xl p-2">
//       <GroupIcon className="w-[24px] h-[24px] " />
//         </div>
// <Link href="/" >
// <div className="hover:underline">
// <h3 className="text-[#002B66]">Escalate Defects</h3>
// </div>
// </Link>
// </div>





// </div>




//     </div>
//   );
// }

import Link from "next/link";
import React from "react";
import { GroupIcon, BoxIconLine, ArrowUpIcon, ArrowDownIcon } from "@/icons";

export default function QuickActions() {
  const actions = [
    { label: "Add Vehicle", href: "/", icon: BoxIconLine },
    { label: "Add Driver", href: "/", icon: GroupIcon },
    { label: "Upload Document", href: "/", icon: BoxIconLine },
    { label: "Escalate Defects", href: "/", icon: GroupIcon },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold text-[#002B66] mb-3">Quick Actions</h2>

      <div className="flex flex-col gap-2">
        {actions.map(({ label, href, icon: Icon }, index) => (
  <Link href={href} key={index}>
    <div className="flex items-center gap-3 p-2 rounded-lg bg-[#F4F7FB] hover:bg-[#e3ecf9] transition-all duration-200 shadow-sm cursor-pointer group">
      <div className="flex items-center justify-center bg-[#002B66] rounded-md w-10 h-10">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-sm font-semibold text-[#002B66]">
        {label}
      </h3>
    </div>
  </Link>
))}

      </div>
    </div>
  );
}

