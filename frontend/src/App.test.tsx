import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe ('The Main App', () => {

  it('Should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });
  it('Should render the Payments link', () => {
    render(<App />);
    expect(screen.getByText('Payments')).toBeInTheDocument();
  })
  it('Should render the Home link', () => {
    render(<App />);
    // expect(screen.getAllByText('Home)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: "Home"})).toBeInTheDocument();
  })
  it('Should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument();
  }) 

});
