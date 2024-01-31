// /app/ui/customers/CustomersTableSkeleton.tsx
import React from 'react';

export default function CustomersTableSkeleton() {
  return (
    <div className="mt-6">
      <table className="min-w-full text-gray-900">
        <thead className="text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Customer Name
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Email
            </th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* Repeat a simple loading row for each row */}
          <tr>
            <td className="px-4 py-3">Loading...</td>
            <td className="px-3 py-3">Loading...</td>
            {/* Add more cells as needed */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
