import { FC } from 'react';
import { FormattedCustomersTable, CustomersTableType } from '@/app/lib/definitions';

interface CustomersTableProps {
  customersData?: CustomersTableType[];
}

const CustomersTable: FC<CustomersTableProps> = ({ customersData = [] }) => {
  // Check if customersData is an array before using .map
  if (!Array.isArray(customersData) || customersData.length === 0) {
    console.warn('Customers data is not an array or is empty:', customersData);
    return <div>No data available</div>; // or render an error message as needed
  }

  // You may need to add formatting logic here based on your requirements
  const formattedCustomers: FormattedCustomersTable[] = customersData.map((customer) => ({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    image_url: customer.image_url,
    total_invoices: customer.total_invoices,
    total_pending: customer.total_pending,
    total_paid: customer.total_paid,
  }));

  return (
    <div>
      {/* Render your table using formattedCustomers */}
      <table>
        {/* Your table content goes here */}
      </table>
    </div>
  );
};

export default CustomersTable;
