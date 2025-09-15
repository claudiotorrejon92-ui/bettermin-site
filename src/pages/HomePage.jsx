import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <BarChart3 /> BetterMin
      </h1>
      <p>Bienvenido a BetterMin.</p>
    </div>
  );
}
