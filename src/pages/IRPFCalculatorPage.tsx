import React, { useState } from 'react';

const taxBrackets = [
  { limit: 12450, rate: 0.19 },
  { limit: 20200, rate: 0.24 },
  { limit: 35200, rate: 0.30 },
  { limit: 60000, rate: 0.37 },
  { limit: Infinity, rate: 0.45 },
];

const calculateIRPF = (netIncome: number) => {
  if (netIncome <= 0) return 0;
  let remaining = netIncome;
  let prevLimit = 0;
  let tax = 0;
  for (const bracket of taxBrackets) {
    const taxable = Math.min(bracket.limit - prevLimit, remaining);
    tax += taxable * bracket.rate;
    remaining -= taxable;
    prevLimit = bracket.limit;
    if (remaining <= 0) break;
  }
  return tax;
};

const IRPFCalculatorPage: React.FC = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [amortization, setAmortization] = useState(0);
  const net = income - expenses - amortization;
  const tax = calculateIRPF(net);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-narrow">
        <h2 className="section-title text-center mb-8">Calculadora IRPF</h2>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Introduce tus ingresos, gastos deducibles y amortización para estimar el impuesto sobre la renta (IRPF) siguiendo los tramos estatales vigentes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-medium" htmlFor="income">Ingresos (€)</label>
            <input
              id="income"
              type="number"
              min="0"
              value={income}
              onChange={e => setIncome(Number(e.target.value))}
              className="w-full border border-stone-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="expenses">Gastos deducibles (€)</label>
            <input
              id="expenses"
              type="number"
              min="0"
              value={expenses}
              onChange={e => setExpenses(Number(e.target.value))}
              className="w-full border border-stone-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="amortization">Amortización (€)</label>
            <input
              id="amortization"
              type="number"
              min="0"
              value={amortization}
              onChange={e => setAmortization(Number(e.target.value))}
              className="w-full border border-stone-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl font-serif mb-2">Rendimiento neto: <span className="font-bold">{net.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span></p>
          <p className="text-lg md:text-xl font-serif">IRPF estimado: <span className="font-bold text-blue-700">{tax.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span></p>
        </div>
      </div>
    </section>
  );
};

export default IRPFCalculatorPage; 