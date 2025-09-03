"use client";

import React, { useState } from "react";
import {
  Calendar,
  Upload,
  AlertTriangle,
  Wrench,
  FileText,
  CarFront,
  Camera,
  RefreshCw,
} from "lucide-react";

export default function ReportNewDefect() {
  const [priority, setPriority] = useState<"Low" | "Medium" | "High" | null>(
    null
  );

  return (
    <div>
      <div >
        {/* Header */}
        {/* <h2 className="text-2xl font-bold text-[#002B66] mb-6 flex items-center gap-2">
          <Wrench className="h-6 w-6 text-[#002B66]" />
          Report New Defect
        </h2> */}

        {/* Form Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Vehicle Reg No */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Reg No
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#002B66]">
                <CarFront className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="DRV-2387"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Date Reported */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date Reported
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-07-25"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none"
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Defect Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Defect Location
              </label>
              <div className="flex justify-center items-center border rounded-lg p-4 bg-gray-50 shadow-inner">
                <img
                  src="/images/vehicles/car2.webp"
                  alt="Car Diagram"
                  className="w-60 h-auto object-cover"
                />
              </div>
            </div>

            {/* Upload Images */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Images
              </label>
              <label className="flex items-center gap-2 bg-[#002B66] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#00357a] transition cursor-pointer w-fit">
                <Camera className="h-5 w-5" />
                Choose File
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Repeat Issue Warning */}
            <div className="flex items-center gap-2 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm font-medium shadow">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Repeat Issue - Investigate Root Cause
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Defect Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Defect Type
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none">
                <option>Defect Type</option>
                <option>Engine</option>
                <option>Brakes</option>
                <option>Electrical</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Priority
              </label>
              <div className="flex gap-3">
                {["Low", "Medium", "High"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setPriority(level as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition ${
                      priority === level
                        ? level === "Low"
                          ? "bg-green-600 text-white"
                          : level === "Medium"
                          ? "bg-yellow-500 text-white"
                          : "bg-red-600 text-white"
                        : level === "Low"
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : level === "Medium"
                        ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                        : "bg-red-100 text-red-700 hover:bg-red-200"
                    }`}
                  >
                    <AlertTriangle className="h-4 w-4" />
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Repair Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Repair Location
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none">
                <option>Select</option>
                <option>Workshop</option>
                <option>Field</option>
              </select>
            </div>

            {/* Additional Options */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Options
              </label>
              <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  Needs repair
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Parts ordered
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Further investigation
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Notes
              </label>
              <textarea
                placeholder="Describe the defect here including any relevant details."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none"
                rows={3}
              ></textarea>
            </div>

            {/* Recurring Issue Info */}
            <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg text-sm shadow">
              <RefreshCw className="h-5 w-5 text-yellow-600" />
              <span>
                <strong>Recurring Issue:</strong> This defect has been reported
                3 times in the last 6 months.
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <button className="bg-gradient-to-r from-[#002B66] to-[#004C99] text-white px-12 py-3 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-lg transition-transform duration-200 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}




// "use client";

// import React, { useState } from "react";
// // import { Calendar, Upload, AlertTriangle, Info } from "lucide-react";
// import { Camera,
//   Car,
//   Bus,
//   Incidents,
// CalenderIcon } from "@/icons";


// export default function ReportNewDefect() {
//   const [priority, setPriority] = useState<"Low" | "Medium" | "High" | null>(
//     null
//   );

//   return (
//     <div className="">
//       {/* Main Card */}
//       <div>
//         {/* Form Grid */}
//         <div className="grid grid-cols-2 gap-8">
//           {/* Left Column */}
//           <div className="space-y-5">
//             {/* Vehicle Reg No */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Vehicle Reg No
//               </label>
//               <input
//                 type="text"
//                 defaultValue="DRV-2387"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none"
//               />
//             </div>

//             {/* Date Reported */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Date Reported
//               </label>
//               <div className="relative">
//                 <input
//                   type="date"
//                   defaultValue="2025-07-25"
//                   className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none"
//                 />
//                 <CalenderIcon className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
//               </div>
//             </div>

//             {/* Defect Location */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Defect Location
//               </label>
//               <div className="flex justify-center items-center border rounded-lg p-4">
//                 {/* Placeholder vehicle diagram */}
//                 <img
//                   src="/images/vehicles/car2.webp"
//                   alt="Car Diagram"
//                   className="w-60 h-auto object-cover"
//                 />
//               </div>
//             </div>

//             {/* Upload Images */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Upload Images
//               </label>
//               <div className="flex items-center gap-3">
//                 <button className="flex items-center gap-2 bg-[#002B66] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#00357a] transition">
//                   <Car className="h-5 w-5" />
//                   Choose File
//                 </button>
//               </div>
//             </div>

//             {/* Repeat Issue Warning */}
//             <div className="flex items-center gap-2 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
//               <Incidents className="h-5 w-5 text-red-600" />
//               Repeat Issue - Investigate Root Cause
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-5">
//             {/* Defect Type */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Defect Type
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none">
//                 <option>Defect Type</option>
//                 <option>Engine</option>
//                 <option>Brakes</option>
//                 <option>Electrical</option>
//               </select>
//             </div>

//             {/* Priority */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Priority
//               </label>
//               <div className="flex gap-3">
//                 {["Low", "Medium", "High"].map((level) => (
//                   <button
//                     key={level}
//                     type="button"
//                     onClick={() => setPriority(level as any)}
//                     className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
//                       priority === level
//                         ? level === "Low"
//                           ? "bg-green-600 text-white"
//                           : level === "Medium"
//                           ? "bg-yellow-500 text-white"
//                           : "bg-red-600 text-white"
//                         : level === "Low"
//                         ? "bg-green-100 text-green-700 hover:bg-green-200"
//                         : level === "Medium"
//                         ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
//                         : "bg-red-100 text-red-700 hover:bg-red-200"
//                     }`}
//                   >
//                     {level}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Repair Location */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Repair Location:
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none">
//                 <option>Defect Type</option>
//                 <option>Workshop</option>
//                 <option>Field</option>
//               </select>
//             </div>

//             {/* Additional Options */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Additional Options
//               </label>
//               <div className="flex gap-4 text-gray-700 text-sm">
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" defaultChecked />
//                   Needs repair
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" />
//                   Parts ordered
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" />
//                   Further investigation
//                 </label>
//               </div>
//             </div>

//             {/* Notes */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Notes
//               </label>
//               <textarea
//                 placeholder="Describe the defect here including any relevant details."
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#002B66] focus:border-[#002B66] outline-none"
//                 rows={3}
//               ></textarea>
//             </div>

//             {/* Recurring Issue Info */}
//             <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg text-sm">
//               <Bus className="h-5 w-5 text-yellow-600" />
//               <span>
//                 <strong>Recurring Issue:</strong> This defect has been reported
//                 3 times in the last 6 months.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-start pt-4">
//           <button className="bg-[#002B66] text-white px-10 py-3 rounded-lg font-bold text-lg hover:bg-[#00357a] transition">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
