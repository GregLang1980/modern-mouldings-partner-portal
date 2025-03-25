import React from "react";

export default function PartnerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-xl mb-6">
        <h1 className="text-xl font-bold">Modern Mouldings Partner Portal</h1>
        <div className="space-x-4">
          <button className="text-sm">Dashboard</button>
          <button className="text-sm">Orders</button>
          <button className="text-sm">Catalog</button>
          <button className="text-sm">Commissions</button>
          <button className="text-sm">Marketing</button>
          <button className="text-sm">Training</button>
          <button className="text-sm">Support</button>
          <button className="text-sm border px-2 py-1 rounded">Logout</button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Welcome, [Partner Name]</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded">Active Orders: 5</div>
            <div className="p-4 bg-green-50 rounded">Commissions: R14,000</div>
            <div className="p-4 bg-yellow-50 rounded">Tier: Silver Partner</div>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Place New Order</button>
            <button className="bg-gray-200 px-4 py-2 rounded">View Catalog</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Download Toolkit</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-md font-semibold mb-2">Latest News</h3>
          <ul className="list-disc list-inside text-sm">
            <li>New bulkhead styles added to catalog</li>
            <li>Watch our latest installation guide</li>
            <li>March Partner Incentive is live!</li>
          </ul>
        </div>
      </main>
    </div>
  );
}