"use client";

import * as React from "react";
import Link from "next/link";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="min-h-screen bg-navy-50 dark:bg-navy-950">
      <div className="bg-white dark:bg-navy-900 border-b border-navy-200 dark:border-navy-800">
        <div className="container-main py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-navy-900 dark:text-white">
                Welcome back!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
