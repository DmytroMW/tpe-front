import React              from 'react';
import { render, screen } from '@testing-library/react';
import HomePage           from '../components/HomePage';

test('renders Home component with rendered text', () => {
  render( <HomePage /> );
  expect( screen.getByText( /Home page/i ) ).toBeInTheDocument();
});