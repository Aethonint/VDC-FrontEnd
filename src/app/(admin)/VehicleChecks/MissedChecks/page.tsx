import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MissedChecksTable from "@/components/tables/MissedChecksTable";
import Pagination from "@/components/tables/Pagination";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Missed Checks" />

      <div className="space-y-6">
        <ComponentCard title="Missed Checks">


<div className="">
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

</div>

          <MissedChecksTable />
        </ComponentCard>

{/* <ComponentCard
  title="Missed Checks"
  headerAction={(
    <button onClick={() => console.log("clicked")}>Filter</button>
  )}
>
  <MissedChecksTable />
</ComponentCard> */}



      </div>
     
    </div>




  );
}
