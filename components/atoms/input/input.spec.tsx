/* eslint-disable no-use-before-define */
import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Input from './';

describe('Test input component', () => {
  it('Should pass when name, variant, size and placeholder is additional', () => {
    render(
      <Input
        name="test"
        variant="outline"
        size="md"
        placeholder="test-placeholder"
      />
    );

    const renderInputComponent = screen.getByRole('textbox');
    expect(renderInputComponent).toBeDefined();
    expect(renderInputComponent).toMatchSnapshot();
  });

  it('Should pass when value is changed', () => {
    const changeMock = jest.fn();
    const value = '';
    render(
      <Input
        name="test"
        value={value}
        onInputChange={changeMock}
        variant="outline"
        size="md"
        placeholder="test-placeholder"
      />
    );
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue(value);
    input && expect(input).toBeEnabled();
    const updatedValue = 'Updated Value';
    fireEvent.change(input, { target: { value: updatedValue } });
    expect(input).toHaveValue(updatedValue);
  });
});
