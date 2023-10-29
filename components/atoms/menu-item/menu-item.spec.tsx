/* eslint-disable no-use-before-define */
import * as React from 'react';
import { screen, render } from '@testing-library/react';
import MenuItem from './';

describe('Test MenuItem component', () => {
  it('Should pass when item and hover function and placeholder is additional', () => {
    const mockItem = {
      name: '',
      url: '',
    };
    const hoverMock = jest.fn();

    render(<MenuItem data-testid="test" item={mockItem} onHover={hoverMock} />);

    const renderFiledComponent = screen.queryAllByTestId('test');
    expect(renderFiledComponent).not.toBeNull();
    expect(renderFiledComponent).toBeDefined();
    expect(renderFiledComponent).toMatchSnapshot();
  });
});
