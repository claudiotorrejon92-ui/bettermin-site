import React from 'react';
import SystemArchitecture from '../components/SystemArchitecture.jsx';

export default function TecnologiaPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Tecnología</h1>
      <p>Información sobre la tecnología utilizada.</p>
      <SystemArchitecture />
    </div>
  );
}
