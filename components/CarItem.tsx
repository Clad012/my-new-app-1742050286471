
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  imageUrl: string;
  pricePerDay: number;
  type: string;
}

interface CarItemProps {
  car: Car;
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <Image
        src={car.imageUrl}
        alt={`${car.make} ${car.model}`}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {car.make} {car.model} ({car.year})
        </h3>
        <p className="text-muted-foreground">{car.type}</p>
        <p className="text-lg font-bold mt-2">${car.pricePerDay} / day</p>
        <Button className="mt-4 w-full">Rent Now</Button>
      </div>
    </div>
  );
};

export default CarItem;
