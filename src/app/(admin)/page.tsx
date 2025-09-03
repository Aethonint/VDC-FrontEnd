// import type { Metadata } from "next";
// import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
// import React from "react";
// import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";
// import Reminders from "@/components/ecommerce/Reminders";
// import QuickActions from "@/components/ecommerce/Quickactions";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

// export default function Ecommerce() {
//   return (
//     <div className="flex flex-col gap-4">
//       <h2 className="text-2xl font-semibold">Dashboard</h2>

//       {/* Metrics row */}
//       <EcommerceMetrics />

//       {/* Sales + Target row */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
//         {/* These stay stacked until lg */}
//         <div className="lg:col-span-2">
//           <MonthlySalesChart />
//         </div>
//         <div>
//           <QuickActions />
//         </div>
//         <div>
//           <Reminders />
//         </div>
//       </div>
//     </div>
//   );
// }




import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import Reminders from "@/components/ecommerce/Reminders";
import QuickActions from "@/components/ecommerce/Quickactions";


export const metadata: Metadata = {
  title:
    "Fleet Edge | Admin Dasboard",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Ecommerce() {
  return (

   <div className="grid gap-4">

    <h2 className="text-2xl font-semibold">
      Dashboard
    </h2>

  {/* Metrics row */}
  <div>
    <EcommerceMetrics />
  </div>

  {/* Sales + Target row */}
  <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
    <div className="lg:col-span-2">
      <MonthlySalesChart />
    </div>
     <div>
      <QuickActions />
    </div>
    <div>
      <Reminders />
    </div>
  </div>
</div>
  );
}


    // <div className="grid grid-cols-12 gap-4 md:gap-6">
    //   <div className="col-span-12 space-y-6 xl:col-span-7">
    //     <EcommerceMetrics />

    //     <MonthlySalesChart />
    //   </div>

    //   <div className="col-span-12 xl:col-span-5">
    //     <MonthlyTarget />
    //   </div>

    //   <div className="col-span-12">
    //     <StatisticsChart />
    //   </div>

    //   <div className="col-span-12 xl:col-span-5">
    //     <DemographicCard />
    //   </div>

    //   <div className="col-span-12 xl:col-span-7">
    //     <RecentOrders />
    //   </div>
    // </div>