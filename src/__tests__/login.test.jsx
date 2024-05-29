import React              from 'react';
import { render, screen } from '@testing-library/react';
import Login              from '../routes/Login';

jest.mock('src/config.js', () => ({
  SERVER_URL: 'http://localhost:3000/api/v1',
}));

test('renders Login component with rendered text', () => {
  render( <Login /> );
  expect( screen.getByText( /Login to the App/i ) ).toBeInTheDocument();
});