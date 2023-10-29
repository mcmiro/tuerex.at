import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Radio from './';

describe('Test Radio component', () => {
  it('Should pass when name added', () => {
    render(<Radio name="test" />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDefined();
    expect(radio).toMatchSnapshot();
  });

  it('Should pass when radio is not checked', () => {
    const changeMock = jest.fn();
    render(<Radio name="test" onChange={changeMock} />);

    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(false);
  });

  it('Should pass when component click radio and change checked to true', async () => {
    const changeMock = jest.fn();
    render(<Radio name="test" onChange={changeMock} />);

    const radio = screen.getByRole('radio') as HTMLInputElement;
    fireEvent.click(radio);
    expect(changeMock).toHaveBeenCalledTimes(1);
    expect(radio).toBeChecked();
  });
});
