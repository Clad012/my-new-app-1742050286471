
import React from 'react';
import { Button } from '@/components/ui/button';

const CarSearchForm = () => {
  // Placeholder for form logic (dates, location, car type)
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            placeholder="Enter pickup location"
          />
        </div>
        <div>
          <label htmlFor="dropoffLocation" className="block text-sm font-medium">
            Dropoff Location
          </label>
          <input
            type="text"
            id="dropoffLocation"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
            placeholder="Enter dropoff location"
          />
        </div>
        <div>
          <label htmlFor="pickupDate" className="block text-sm font-medium">
            Pickup Date
          </label>
          <input
            type="date"
            id="pickupDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
          />
        </div>
        <div>
          <label htmlFor="dropoffDate" className="block text-sm font-medium">
            Dropoff Date
          </label>
          <input
            type="date"
            id="dropoffDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
          />
        </div>
        <div className="md:col-span-4 flex justify-center">
          <Button type="submit">Search Cars</Button>
        </div>
      </form>
    </div>
  );
};

export default CarSearchForm;
