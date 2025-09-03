"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  ClipboardCheck,
  ClipboardX,
  Wrench,
  AlertTriangle,
} from "lucide-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface MetricItem {
  title: string;
  description: string;
  value: number;
  icon: React.ReactNode;
  bgColor: string; // Color for the radial bar
}

export const EcommerceMetrics = () => {
  const metrics: MetricItem[] = [
    {
      title: "Checks Completed",
      description: "Completed Today",
      value: 75.55,
      icon: <ClipboardCheck className="w-6 h-6 text-green-700 dark:text-green-400" />,
      bgColor: "#1F7A1F", // green
    },
    {
      title: "Checks Incomplete",
      description: "Completed Today",
      value: 45.2,
      icon: <ClipboardX className="w-6 h-6 text-red-700 dark:text-red-400" />,
      bgColor: "#B22222", // red
    },
    {
      title: "Defects Reported",
      description: "Completed Today",
      value: 92.8,
      icon: <Wrench className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
      bgColor: "#FFB100", // yellow
    },
    {
      title: "Incidents Reported",
      description: "Completed Today",
      value: 12.1,
      icon: <AlertTriangle className="w-6 h-6 text-red-700 dark:text-red-400" />,
      bgColor: "#B22222", // red
    },
  ];

  const getOptions = (label: string, color: string): ApexCharts.ApexOptions => ({
    colors: [color],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "65%",
        },
        track: {
          background: "#E4E7EC",
          strokeWidth: "100%",
          margin: 5,
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "16px",
            fontWeight: "600",
            offsetY: -20,
            color: "#1D2939",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: [color],
    },
    stroke: {
      lineCap: "round",
    },
    labels: [label],
  });

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
              {metric.icon}
            </div>
            <div className="mt-4">
              <h6 className="font-bold text-gray-800 text-[15px] dark:text-white/90">
                {metric.title}
              </h6>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {metric.description}
              </span>
              <div className="max-h-[200px] mt-3">
                <ReactApexChart
                  options={getOptions(metric.title, metric.bgColor)}
                  series={[metric.value]}
                  type="radialBar"
                  height={200}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import {
//   BoxIconLine,
//   GroupIcon,
//   ArrowDownIcon,
//   ArrowUpIcon,
// } from "@/icons";

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// // Type for metric items
// interface MetricItem {
// title: string;
// description: string;
// value: number;
// icon: React.ReactNode;
// bgColor?: string;
// }

// export const EcommerceMetrics = () => {
//   // 🟡 1. Define all metrics here
//   const metrics: MetricItem[] = [
//     {
//       title: "Checks Completed",
//       description: "Completed Today",
//       value: 75.55,
//       icon: <BoxIconLine className="text-gray-800 dark:text-white/90" />,
//     },
//     {
//       title: "Checks Incomplete",
//       description: "Completed Today",
//       value: 45.2,
//       icon: <GroupIcon className="text-gray-800 dark:text-white/90" />,
//     },
//     {
//       title: "Defects Reported",
//       description: "Completed Today",
//       value: 92.8,
//       icon: <GroupIcon className="text-gray-800 dark:text-white/90" />,
//     },
//     {
//       title: "Incidents Reported",
//       description: "Completed Today",
//       value: 12.1,
//       icon: <GroupIcon className="text-gray-800 dark:text-white/90" />,
//     },
//   ];

//   // 🟠 2. Chart options factory
//   const getOptions = (label: string): ApexCharts.ApexOptions => ({
//     colors: ["#465FFF"],
//     chart: {
//       fontFamily: "Outfit, sans-serif",
//       type: "radialBar",
//       height: 330,
//       sparkline: {
//         enabled: true,
//       },
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -85,
//         endAngle: 85,
//         hollow: {
//           size: "65%",
//         },
//         track: {
//           background: "#E4E7EC",
//           strokeWidth: "100%",
//           margin: 5,
//         },
//         dataLabels: {
//           name: { show: false },
//           value: {
//             fontSize: "16px",
//             fontWeight: "600",
//             offsetY: -20,
//             color: "#1D2939",
//             formatter: (val) => `${val}%`,
//           },
//         },
//       },
//     },
//     fill: {
//       type: "solid",
//       colors: ["#002B66"],
//     },
//     stroke: {
//       lineCap: "round",
//     },
//     labels: [label],
//   });

//   return (
//   <div className="max-w-screen-2xl mx-auto">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//     {metrics.map((metric, idx) => (
//       <div
//         key={idx}
//         className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between"
//       >
//         <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
//           {metric.icon}
//         </div>
//         <div className="mt-4">
//           <h6 className="font-bold text-gray-800 text-[15px] dark:text-white/90">
//             {metric.title}
//           </h6>
//           <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//             {metric.description}
//           </span>
//           <div className="max-h-[200px] mt-3">
//             <ReactApexChart
//               options={getOptions(metric.title)}
//               series={[metric.value]}
//               type="radialBar"
//               height={200}
//             />
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//   );
// };




    {/* // <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"> */}

     {/* Metric Item Start 
      <div 
           style={{ backgroundColor: 'var(--light-blue)' }}
      className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5 ">
          <div>
            <h6 className="mt-2 font-bold whitespace-nowrap text-gray-800 text-[15px]  dark:text-white/90">
              Checks Completed
            </h6>
          </div>
           
        </div>
         <div className="max-h-[230px]">
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={200}
            />
          </div>
      </div>
     Metric Item End 

  Metric Item Start 
      <div 
           style={{ backgroundColor: 'var(--purple-blue)' }}
      className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5 ">
          <div>
            <h6 className="mt-2 font-bold whitespace-nowrap text-gray-800 text-[15px]  dark:text-white/90">
              Checks Completed
            </h6>
          </div>
           
        </div>
         <div className="max-h-[230px]">
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={200}
            />
          </div>
      </div>
       Metric Item End 


          Metric Item Start 
      <div 
           style={{ backgroundColor: 'var(--pink)' }}
      className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5 ">
          <div>
            <h6 className="mt-2 font-bold whitespace-nowrap text-gray-800 text-[15px]  dark:text-white/90">
              Checks Completed
            </h6>
          </div>
           
        </div>
         <div className="max-h-[230px]">
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={200}
            />
          </div>
      </div>
       Metric Item End 


           Metric Item Start 
      <div 
      className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5 ">
          <div>
            <h6 className="mt-2 font-bold whitespace-nowrap text-gray-800 text-[15px]  dark:text-white/90">
              Checks Completed
            </h6>
          </div>
           
        </div>
         <div className="max-h-[230px]">
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={200}
            />
          </div>
      </div> */}
      {/* <!-- Metric Item End --> */}


      {/* <!-- Metric Item Start --> */}
      {/* <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Orders
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            9.05%
          </Badge>
        </div>
      </div> */}
      {/* <!-- Metric Item End --> */}
//     </div>
//   );
// };
