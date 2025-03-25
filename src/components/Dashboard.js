import React, { useState } from 'react';

export default function Dashboard() {
  const [view, setView] = useState('dashboard');

  const renderView = () => {
    switch (view) {
      case 'orders':
        return (
          <div>
            <h2 className='text-lg font-semibold mb-2'>Place New Order</h2>
            <form className='space-y-4'>
              <input className='w-full border p-2 rounded' placeholder='Client Name' />
              <input className='w-full border p-2 rounded' placeholder='Project Name' />
              <select className='w-full border p-2 rounded'>
                <option>Modern</option>
                <option>Classic</option>
              </select>
              <input className='w-full border p-2 rounded' placeholder='Bulkhead Ref' />
              <textarea className='w-full border p-2 rounded' rows='4' placeholder='Notes'></textarea>
              <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>Submit</button>
            </form>
          </div>
        );
      case 'catalog':
        return (
          <div>
            <h2 className='text-lg font-semibold mb-2'>Bulkhead Catalog</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <img src='/images/BH001.jpg' alt='BH001' className='rounded shadow' />
                <p className='mt-2 text-sm font-semibold'>BH001 – Modern Square Bulkhead</p>
              </div>
            </div>
          </div>
        );
      default:
        return <p>Welcome to your dashboard.</p>;
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='flex space-x-4 mb-4'>
        <button onClick={() => setView('dashboard')} className='text-sm bg-gray-200 px-3 py-1 rounded'>Dashboard</button>
        <button onClick={() => setView('orders')} className='text-sm bg-blue-200 px-3 py-1 rounded'>Orders</button>
        <button onClick={() => setView('catalog')} className='text-sm bg-green-200 px-3 py-1 rounded'>Catalog</button>
      </div>
      {renderView()}
    </div>
  );
}
