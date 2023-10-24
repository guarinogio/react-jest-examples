import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const testData = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];

describe('Table Component', () => {
  it('should render a table with data', () => {
    render(<Table data={testData} />);

    // Verificar que la tabla se haya renderizado
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();

    // Verificar que los encabezados estén presentes
    const nameHeader = screen.getByText('Name');
    const ageHeader = screen.getByText('Age');
    expect(nameHeader).toBeInTheDocument();
    expect(ageHeader).toBeInTheDocument();

    // Verificar que los datos de la tabla se rendericen correctamente
    testData.forEach((item) => {
      const nameCell = screen.getByText(item.name);
      const ageCell = screen.getByText(item.age.toString());
      expect(nameCell).toBeInTheDocument();
      expect(ageCell).toBeInTheDocument();
    });
  });

  it('should handle an empty data array', () => {
    render(<Table data={[]} />);

  // Check if the table is rendered
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();

  // Check that there are no data rows in the table
  const rows = screen.queryAllByRole('row');
  
  // The first row is the header, so the length should be 1
  expect(rows.length).toBe(1);
  });
});
