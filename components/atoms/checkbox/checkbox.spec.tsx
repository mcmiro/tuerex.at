import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Checkbox from './';

describe('Test Checkbox component', () => {
  it('Should pass when name added', () => {
    render(<Checkbox name="test" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDefined();
    expect(checkbox).toMatchSnapshot();
  });

  it('Should pass when component is not checked', () => {
    const changeMock = jest.fn();
    render(
      <Checkbox name="test" onCheck={changeMock} data-testid="my-checkbox" />
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('Should pass when component click checkbox and change checked to true', async () => {
    const changeMock = jest.fn();
    render(
      <Checkbox name="test" onCheck={changeMock} data-testid="my-checkbox" />
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(changeMock).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });
});
