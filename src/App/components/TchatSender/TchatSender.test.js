import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatSender from './TchatSender';

describe('<TchatSender />', () => {
  test('it should mount', () => {
    render(<TchatSender />);
    
    const tchatSender = screen.getByTestId('TchatSender');

    expect(tchatSender).toBeInTheDocument();
  });
});