import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatLogin from './TchatLogin';

describe('<TchatLogin />', () => {
  test('it should mount', () => {
    render(<TchatLogin />);
    
    const tchatLogin = screen.getByTestId('TchatLogin');

    expect(tchatLogin).toBeInTheDocument();
  });
});