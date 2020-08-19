import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatReader from './TchatReader';

describe('<TchatReader />', () => {
  test('it should mount', () => {
    render(<TchatReader />);
    
    const tchatReader = screen.getByTestId('TchatReader');

    expect(tchatReader).toBeInTheDocument();
  });
});