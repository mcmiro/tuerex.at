/* eslint-disable no-use-before-define */
import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Logo from './';

describe('Test input component', () => {
  it('Should pass when name, variant, size and placeholder is additional', () => {
    render(<Logo />);

    const renderInputComponent = screen.getByRole('link');
    expect(renderInputComponent).toBeDefined();
    expect(renderInputComponent).toMatchSnapshot();
  });
});
