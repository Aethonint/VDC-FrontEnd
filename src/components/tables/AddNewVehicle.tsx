"use client";

import React from "react";
import { Camera } from "@/icons";

export default function AddNewVehicle() {
  return (
    <div>
      <div >
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-y-6">
            {/* Vehicle Reg No */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Reg No:
              </label>
              <input
                type="text"
                placeholder="Enter registration number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition"
              />
            </div>

            {/* Make & Model */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Make & Model
              </label>
              <input
                type="text"
                placeholder="e.g., Toyota Prius"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition"
              />
            </div>

            {/* Assigned Driver */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Assigned Driver:
              </label>
              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition">
                <option>Select a driver</option>
                <option>James Foster</option>
                <option>Aisha Khan</option>
                <option>Ben Thompson</option>
              </select>
            </div>

            {/* Purchase Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Purchase Date:
              </label>
              <input
                type="date"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition"
              />
            </div>

            {/* Vehicle Color */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Vehicle Color:
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  "bg-red-500",
                  "bg-black",
                  "bg-blue-800",
                  "bg-pink-600",
                  "bg-orange-500",
                  "bg-gray-500",
                  "bg-red-900",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full cursor-pointer border border-gray-200 hover:border-[#002B66] hover:scale-110 transition`}
                  >
                    <div className={`w-full h-full rounded-full ${color}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button className="w-full bg-[#002B66] text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-[#00357a] hover:shadow-lg transition">
                Submit
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-y-6">
            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Type:
              </label>
              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition">
                <option>Select type</option>
                <option>Ambulance</option>
                <option>Car</option>
                <option>MiniBus</option>
              </select>
            </div>

            {/* Year of Manufacture */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Year of Manufacture:
              </label>
              <input
                type="number"
                placeholder="e.g., 2022"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition"
              />
            </div>

            {/* Assigned Site */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Assigned Site:
              </label>
              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 shadow-sm focus:border-[#002B66] focus:outline-none transition">
                <option>Select site</option>
                <option>St Thomas Hospital</option>
                <option>Lewisham Health Centre</option>
                <option>Royal Free Hospital</option>
              </select>
            </div>

            {/* Upload Photo */}
            <div className="flex flex-col justify-center items-center gap-y-4 border-2 border-dashed rounded-2xl border-gray-300 p-14 hover:border-[#002B66] transition cursor-pointer">
              <Camera className="size-20 text-[#002B66]" />
              <p className="text-lg font-semibold text-gray-600">
                Upload Vehicle Photo
              </p>
              <span className="text-sm text-gray-400">JPG, PNG up to 5MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
