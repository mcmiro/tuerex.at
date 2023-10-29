/* eslint-disable no-use-before-define */
import * as React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textarea from './';

describe('Test Textarea component', () => {
  it('Should pass when name, variant, size and placeholder is additional', () => {
    render(<Textarea variant="outline" placeholder="test" />);

    const texarea = screen.getByRole('textbox');
    expect(texarea).toBeDefined();
    expect(texarea).toMatchSnapshot();
  });

  it('Should pass when value is empty', () => {
    const changeMock = jest.fn();
    render(
      <Textarea
        onInputChange={changeMock}
        variant="outline"
        placeholder="test-placeholder"
      />
    );
    const textbox = screen.getByRole('textbox');
    textbox && expect(textbox).toHaveValue('');
    textbox && expect(textbox).toBeEnabled();
  });

  it('Should pass when value is changed', async () => {
    const changeMock = jest.fn();
    render(
      <Textarea
        onInputChange={changeMock}
        variant="outline"
        placeholder="test-placeholder"
      />
    );
    const textbox = screen.getByRole('textbox');
    textbox && expect(textbox).toHaveValue('');
    textbox && userEvent.type(textbox, 'test content');
    await waitFor(() => {
      expect(textbox).toHaveValue('test content');
    });
  });
});
