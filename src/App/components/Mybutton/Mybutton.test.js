import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mybutton from './Mybutton';

describe('<Mybutton />', () => {
  test('it should mount', () => {
    render(<Mybutton />);
    
    const mybutton = screen.getByTestId('Mybutton');

    expect(mybutton).toBeInTheDocument();
  });
});