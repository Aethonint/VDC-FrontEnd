"use client";
import React, { useState } from "react";
import { CalenderIcon,  Incidents, } from "@/icons";

export default function VehicleDocuments() {
  const [formData, setFormData] = useState({
    driverId: "DRV-2387",
    licenseNumber: "UKL-55832901-Z",
    insuranceCertificate: "UKL-55832901-Z",
    medicalCertificate: "UKL-55832901-Z",
    backgroundCheck: "UKL-55832901-Z",
    expiryDates: {
      license: "",
      insurance: "",
      medical: "",
      background: "",
    },
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log("Uploaded file:", e.target.files[0]);
    }
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Breadcrumb */}
      {/* <div className="text-sm text-gray-500 mb-4">
        Home <span className="mx-2">{">"}</span> Vehicles{" "}
        <span className="mx-2">{">"}</span>{" "}
        <span className="font-semibold text-gray-800">Vehicle Documents</span>
      </div> */}

      {/* Documents List */}
      {[
        { label: "MOT Certificate", key: "license", field: "licenseNumber" },
        {
          label: "Insurance Document",
          key: "insurance",
          field: "insuranceCertificate",
        },
        { label: "V5C Logbook Upload", key: "medical", field: "medicalCertificate" },
        { label: "42-Day Wash Record", key: "background", field: "backgroundCheck" },
      ].map((doc, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 py-4"
        >
          {/* Document Value */}
          <div className="flex-1 w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {doc.label}
            </label>
            <input
              type="text"
              value={(formData as any)[doc.field]}
              onChange={(e) => handleChange(doc.field, e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>

          {/* Expiry Date */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Expiry date:</span>
            <div className="relative">
              <input
                type="date"
                className="rounded-full border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-200 transition"
                value={(formData.expiryDates as any)[doc.key]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expiryDates: {
                      ...formData.expiryDates,
                      [doc.key]: e.target.value,
                    },
                  })
                }
              />
              <CalenderIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Upload File */}
          <div>
            <label className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800 hover:underline transition">
              Upload File
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>
      ))}

      {/* Road Tax + Documents Attention */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Road Tax */}
         <div className="flex flex-col items-start gap-4 border rounded-lg p-4 bg-gray-50">
          <span className="font-semibold text-gray-800 text-lg">Road Tax</span>
          <div className="flex flex-wrap gap-3">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition">
              Paid
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-red-600 transition">
              UnPaid
            </button>
          </div>
        </div>

        {/* Documents Needing Attention */}
        <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
          <h3 className="text-sm font-bold text-gray-800 mb-3">
            Documents Needing Attention
          </h3>
          <div className="flex items-center gap-3">
            <Incidents className="text-yellow-500 h-6 w-6" />
            <div className="flex-1">
              <div className="font-semibold text-gray-800">DRV-2387</div>
              <div className="text-sm text-gray-600">MOT Certificate</div>
            </div>
            <div className="text-right">
              <div className="text-red-500 font-bold text-sm">01/08/2025</div>
              <div className="text-xs text-gray-500">In 7 days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-10 text-end">
        <button className="bg-[#002B66] text-white px-12 py-3 rounded-lg font-bold text-lg hover:bg-[#00357a] transition">
          Submit
        </button>
      </div>
    </div>
  );
}
