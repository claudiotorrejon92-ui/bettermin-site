import React from 'react';
import InteractiveFlowchart from '../components/InteractiveFlowchart.jsx';

export default function ProcesosPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Procesos</h1>
      <p>Descripción general de los procesos.</p>
      <InteractiveFlowchart />
    </div>
  );
}
