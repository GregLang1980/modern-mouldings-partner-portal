import React, { useState } from "react";

export default function PartnerDashboard() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "orders":
        return (
          <div>
            <h2 className="text-md font-semibold mb-4">Place New Order</h2>
            <form className="space-y-4">
              <input className="w-full border p-2 rounded" placeholder="Client Name" required />
              <input className="w-full border p-2 rounded" placeholder="Project Name" required />
              <select className="w-full border p-2 rounded">
                <option>Modern</option>
                <option>Classic</option>
                <option>Contemporary</option>
              </select>
              <input className="w-full border p-2 rounded" placeholder="Bulkhead Code or Description" />
              <input type="file" className="w-full border p-2 rounded" accept=".pdf,.jpg,.jpeg,.png,.dwg" />
              <textarea className="w-full border p-2 rounded" rows="4" placeholder="Notes"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Order</button>
            </form>
          </div>
        );
      case "catalog":
        return (
          <div>
            <h2 className="text-md font-semibold mb-4">Catalog</h2>
            <p className="text-sm mb-4">Browse bulkhead styles below. You can manually upload and display images with reference codes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border p-4 rounded shadow">
                <img src="/images/BH001.jpg" alt="BH001" className="mb-2 rounded" />
                <p className="font-semibold">BH001 – Modern Square Bulkhead</p>
              </div>
            </div>
          </div>
        );
      case "commissions":
        return <p className="text-sm">Monthly commissions and partner tier info.</p>;
      case "marketing":
        return <p className="text-sm">Download logos, social media posts and print material.</p>;
      case "training":
        return <p className="text-sm">Videos, guides and live training links coming soon.</p>;
      case "support":
        return <p className="text-sm">Submit a support request or message us via WhatsApp.</p>;
      default:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">Welcome, [Partner Name]</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded">Active Orders: 5</div>
              <div className="p-4 bg-green-50 rounded">Commissions: R14,000</div>
              <div className="p-4 bg-yellow-50 rounded">Tier: Silver Partner</div>
            </div>
            <div className="space-x-4">
              <button onClick={() => setActiveView("orders")} className="bg-blue-600 text-white px-4 py-2 rounded">Place New Order</button>
              <button onClick={() => setActiveView("catalog")} className="bg-gray-200 px-4 py-2 rounded">View Catalog</button>
              <button onClick={() => setActiveView("marketing")} className="bg-gray-200 px-4 py-2 rounded">Download Toolkit</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-xl mb-6">
        <h1 className="text-xl font-bold">Modern Mouldings Partner Portal</h1>
        <div className="space-x-4">
          <button className="text-sm" onClick={() => setActiveView("dashboard")}>Dashboard</button>
          <button className="text-sm" onClick={() => setActiveView("orders")}>Orders</button>
          <button className="text-sm" onClick={() => setActiveView("catalog")}>Catalog</button>
          <button className="text-sm" onClick={() => setActiveView("commissions")}>Commissions</button>
          <button className="text-sm" onClick={() => setActiveView("marketing")}>Marketing</button>
          <button className="text-sm" onClick={() => setActiveView("training")}>Training</button>
          <button className="text-sm" onClick={() => setActiveView("support")}>Support</button>
          <button className="text-sm border px-2 py-1 rounded">Logout</button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white p-6 rounded shadow">
          {renderContent()}
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