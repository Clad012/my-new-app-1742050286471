
import React from 'react';
import { Layout } from '@/components/Layout';
import CarSearchForm from '@/components/CarSearchForm';
import CarFeature from '@/components/CarFeature';
import CarList from '@/components/CarList';
import { Car } from '@/components/CarItem';

const cars: Car[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    imageUrl: '/placeholder.svg?height=200&width=300',
    pricePerDay: 50,
    type: 'Sedan',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2022,
    imageUrl: '/placeholder.svg?height=200&width=300',
    pricePerDay: 45,
    type: 'Sedan',
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2024,
    imageUrl: '/placeholder.svg?height=200&width=300',
    pricePerDay: 80,
    type: 'Sports Car',
  },
  {
    id: 4,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    imageUrl: '/placeholder.svg?height=200&width=300',
    pricePerDay: 90,
    type: 'Electric',
  },
];

const CarsPage = () => {
  return (
    <Layout title="Car Rentals" description="Find the perfect car for your trip">
      <div className="container mx-auto p-4">
        <section className="py-12">
          <h1 className="text-3xl font-bold text-center mb-8">
            Find Your Perfect Ride
          </h1>
          <CarSearchForm />
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Cars</h2>
          <CarList cars={cars} />
        </section>

        <section className="py-12 bg-muted">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CarFeature
              icon="lucide:map-pin"
              title="Wide Selection of Locations"
              description="Pick up your car at convenient locations worldwide."
            />
            <CarFeature
              icon="lucide:dollar-sign"
              title="Competitive Pricing"
              description="Get the best rates on your car rental."
            />
            <CarFeature
              icon="lucide:thumbs-up"
              title="Excellent Customer Service"
              description="We're here to help you every step of the way."
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CarsPage;
