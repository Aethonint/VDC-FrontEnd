// "use client";
// import { ApexOptions } from "apexcharts";
// import dynamic from "next/dynamic";
// import { MoreDotIcon } from "@/icons";
// import { DropdownItem } from "../ui/dropdown/DropdownItem";
// import { useState } from "react";
// import { Dropdown } from "../ui/dropdown/Dropdown";

// // Dynamically import the ReactApexChart component
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// export default function MonthlySalesChart() {
//   const options: ApexOptions = {
//     colors: ["#465fff"],
//     chart: {
//       fontFamily: "Outfit, sans-serif",
//       type: "bar",
//       height: 180,
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "39%",
//         borderRadius: 5,
//         borderRadiusApplication: "end",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 4,
//       colors: ["transparent"],
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     legend: {
//       show: true,
//       position: "top",
//       horizontalAlign: "left",
//       fontFamily: "Outfit",
//     },
//     yaxis: {
//       title: {
//         text: undefined,
//       },
//     },
//     grid: {
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     fill: {
//       opacity: 1,
//     },

//     tooltip: {
//       x: {
//         show: false,
//       },
//       y: {
//         formatter: (val: number) => `${val}`,
//       },
//     },
//   };
//   const series = [
//     {
//       name: "Sales",
//       data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
//     },
//   ];
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleDropdown() {
//     setIsOpen(!isOpen);
//   }

//   function closeDropdown() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
//         Reort and Analysis
//         </h3>

//         <div className="relative inline-block">
//           <button onClick={toggleDropdown} className="dropdown-toggle">
//             <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
//           </button>
//           <Dropdown
//             isOpen={isOpen}
//             onClose={closeDropdown}
//             className="w-40 p-2"
//           >
//             <DropdownItem
//               onItemClick={closeDropdown}
//               className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               View More
//             </DropdownItem>
//             <DropdownItem
//               onItemClick={closeDropdown}
//               className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               Delete
//             </DropdownItem>
//           </Dropdown>
//         </div>
//       </div>

//       <div className="max-w-full overflow-x-auto custom-scrollbar">
//         <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
//           <ReactApexChart
//             options={options}
//             series={series}
//             type="bar"
//             height={180}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { MoreDotIcon } from "@/icons";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";

// Dynamically import the chart
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlySalesChart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const options: ApexOptions = {
    colors: ["#002B66", "#FFB100"], // Blue = Defects, Orange = Incidents
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: { text: undefined },
    },
    grid: {
      yaxis: {
        lines: { show: true },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };

  const series = [
    {
      name: "Defects",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
    {
      name: "Incidents",
      data: [120, 250, 180, 190, 160, 140, 200, 90, 160, 300, 220, 95],
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6">
      {/* Header */}
      {/* <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Report and Analysis
        </h3>

        <div className="relative inline-block">
          <button onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div> */}
      
<div className="flex items-center justify-between">
  <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
    Report and Analysis
  </h3>

  <div className="flex space-x-2">
    <button className="text-sm px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/10">
      Weekly
    </button>
    <button className="text-sm px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/10">
      Monthly
    </button>
  </div>
</div>

      {/* Chart */}
      <div className="max-w-full overflow-x-auto custom-scrollbar mt-3">
        <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={240}
          />
        </div>
      </div>
    </div>
  );
}

 {/* Optional Legend (colors explanation) */}
      {/* <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#002B66]"></span>
          <span className="text-sm text-gray-600 dark:text-gray-300">Defects</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#F97316]"></span>
          <span className="text-sm text-gray-600 dark:text-gray-300">Incidents</span>
        </div>
      </div> */}
