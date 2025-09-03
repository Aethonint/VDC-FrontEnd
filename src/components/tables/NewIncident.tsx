"use client";
import React, { useState } from "react";
import {
  Calendar,
  AlertTriangle,
  ChevronDown,
  Cog,
  Zap,
  Lock,
  ShieldAlert,
  Droplet,
  Activity,
} from "lucide-react"; // Added icons for incident titles

export default function AddIncidentReport() {
  const [formData, setFormData] = useState({
    driver: "",
    vehicle: "",
    site: "",
    severity: "Low",
    assignTo: "",
    tagDepartment: "",
    incidentCategory: "",
    resolutionDeadline: "",
    description: "",
    recurring: false,
    investigation: false,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Incident title items with icons
  const incidentOptions = [
    { label: "Mechanical", icon: Cog },
    { label: "Electrical", icon: Zap },
    { label: "Lock Fault", icon: Lock },
    { label: "Safety Issue", icon: ShieldAlert },
    { label: "Fluid Leak", icon: Droplet },
    { label: "Near Miss", icon: Activity },
  ];

  return (
    <div>
      {/* Grid Layout */}
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Driver Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Driver Name
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-full border border-gray-300 px-4 py-2 pr-10 shadow-sm 
                  focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition"
                value={formData.driver}
                onChange={(e) => handleChange("driver", e.target.value)}
              >
                <option value="">Select Driver</option>
                <option value="Driver1">Driver 1</option>
                <option value="Driver2">Driver 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Vehicle Reg */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Vehicle Reg
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-full border border-gray-300 px-4 py-2 pr-10 shadow-sm 
                  focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition"
                value={formData.vehicle}
                onChange={(e) => handleChange("vehicle", e.target.value)}
              >
                <option value="">Select Vehicle</option>
                <option value="V123">V123</option>
                <option value="V124">V124</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Incident Title Buttons with Icons */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Incident Title
            </label>
            <div className="grid grid-cols-3 gap-3">
              {incidentOptions.map(({ label, icon: Icon }, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-3 py-2 
                    text-sm font-medium bg-white hover:bg-blue-50 hover:border-blue-300 transition shadow-sm"
                >
                  <Icon className="h-4 w-4 text-gray-600" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Upload Photos */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Photos
            </label>
            <input
              type="file"
              multiple
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 
                focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition"
            />
          </div>

          {/* Incident Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Incident Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe the incident in detail"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm 
                focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Site */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Site
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-full border border-gray-300 px-4 py-2 pr-10 shadow-sm 
                  focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition"
                value={formData.site}
                onChange={(e) => handleChange("site", e.target.value)}
              >
                <option value="">Select Site</option>
                <option value="Site1">Site 1</option>
                <option value="Site2">Site 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Severity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Severity
            </label>
            <div className="flex gap-3">
              {["Low", "Medium", "High"].map((level) => (
                <button
                  key={level}
                  onClick={() => handleChange("severity", level)}
                  className={`px-5 py-2 rounded-full font-semibold shadow-sm transition 
                    ${
                      formData.severity === level
                        ? level === "Low"
                          ? "bg-green-500 text-white"
                          : level === "Medium"
                          ? "bg-yellow-400 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Assign To
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-full border border-gray-300 px-4 py-2 pr-10 shadow-sm 
                focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition">
                <option>Maintenance</option>
                <option>Operations</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Tag Department */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Tag Department
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-full border border-gray-300 px-4 py-2 pr-10 shadow-sm 
                focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition">
                <option>Maintenance</option>
                <option>Logistics</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Incident Category + Deadline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Incident Category
              </label>
              <select className="w-full rounded-full border border-gray-300 px-4 py-2 shadow-sm 
                focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition">
                <option>Driver Error</option>
                <option>System Failure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Resolution Deadline
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 shadow-sm 
                    focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-40 outline-none transition"
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Flags */}
          <div className="flex items-center gap-6 mt-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Flag as Recurring?
              <input type="checkbox" className="ml-2 h-4 w-4 accent-blue-600" />
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              Investigation Required?
              <input type="checkbox" className="ml-2 h-4 w-4 accent-blue-600" />
            </label>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-10 text-center">
        <button className="bg-[#002B66] text-white px-12 py-3 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:bg-[#00357a] transition">
          Submit
        </button>
      </div>
    </div>
  );
}
