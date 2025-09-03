import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import DriversTable from "@/components/tables/DriversTable";
import AssignVehiclesTable  from "@/components/tables/AssignVehiclesTable";

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
      <PageBreadcrumb pageTitle="Assign Vehicles" />

      <div className="space-y-6">
        <ComponentCard title="Assign Vechicles">


          <AssignVehiclesTable />
        </ComponentCard>
      </div>
     
    </div>
  );
}
