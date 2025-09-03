"use client";
import React, { useState } from "react";
import { BoxIconLine, CalenderIcon } from "@/icons";

export default function DriverDocuments() {
  const [formData, setFormData] = useState({
    driverId: "DRV-2387",
    driverName: "Mark Ellison",
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
    <div>
      {/* Title */}
      

      {/* Driver Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Driver ID
          </label>
          <input
            type="text"
            value={formData.driverId}
            onChange={(e) => handleChange("driverId", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-inner focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Driver Name
          </label>
          <input
            type="text"
            value={formData.driverName}
            onChange={(e) => handleChange("driverName", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-inner focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
      </div>

      {/* Documents */}
      {[
        { label: "License Number", key: "license", field: "licenseNumber" },
        { label: "Insurance Certificate", key: "insurance", field: "insuranceCertificate" },
        { label: "Medical Certificate", key: "medical", field: "medicalCertificate" },
        { label: "DBS/ Background Check", key: "background", field: "backgroundCheck" },
      ].map((doc, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 py-6 hover:bg-gray-50 rounded-lg transition px-3"
        >
          {/* Document Value */}
          <div className="flex-1 w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {doc.label}
            </label>
            <input
              type="text"
              value={(formData as any)[doc.field]}
              onChange={(e) => handleChange(doc.field, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-inner focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>

          {/* Expiry Date */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold text-gray-700">
              Expiry date:
            </label>
            <div className="relative">
              <input
                type="date"
                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-inner focus:ring-2 focus:ring-blue-200 transition"
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

      {/* Submit */}
      <div className="mt-10 text-start">
        <button className="bg-[#002B66] text-white px-12 py-3 rounded-lg font-bold text-lg hover:bg-[#00357a] transition">
          Submit
        </button>
      </div>
    </div>
  );
}
