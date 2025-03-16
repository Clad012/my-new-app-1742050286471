
import React from 'react';
import { Icon } from 'lucide-react';

interface CarFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const CarFeature: React.FC<CarFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="text-center p-6 rounded-lg bg-card shadow-md">
      <Icon name={icon} className="h-12 w-12 mx-auto mb-4 text-primary" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default CarFeature;
