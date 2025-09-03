// "use client";

// import React from "react";

// interface ComponentCardProps {
//   title: string;
//   children: React.ReactNode;
//   className?: string;
//   desc?: string;
//   showFilterButton?: boolean;
//   onFilterClick?: () => void;
//   headerAction?: React.ReactNode; // optional custom action like button(s)
// }

// const ComponentCard: React.FC<ComponentCardProps> = ({
//   title,
//   children,
//   className = "",
//   desc = "",
//   showFilterButton = false,
//   onFilterClick,
//   headerAction,
// }) => {
//   return (
//     <div
//       className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
//     >
//       {/* Card Header */}
//       <div className="px-6 py-4 flex items-start justify-between">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-800 dark:text-white/90">
//             {title}
//           </h3>
//           {desc && (
//             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//               {desc}
//             </p>
//           )}
//         </div>

//         {/* Custom action area (like filter button) */}
//         {headerAction}

//         {/* Or default filter button if `showFilterButton` is true */}
//         {!headerAction && showFilterButton && (
//           <button
//             onClick={onFilterClick}
//             className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#002B66] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <svg
//               className="w-4 h-4 mr-2"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
//               />
//             </svg>
//             Filter
//           </button>
//         )}
//       </div>

//       {/* Card Body */}
//       <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
//         <div className="space-y-6">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default ComponentCard;


import React from "react";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {/* Card Header */}
      <div className="px-6 pt-5">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white/90">
          {title}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        )}
      </div>



{/* Filter Button */}
{/* <div className="px-6">
  <div className="flex justify-end">
  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#002B66] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <svg
      className="w-4 h-4 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
      />
    </svg>
    Filter
  </button>
</div>

</div> */}


      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
