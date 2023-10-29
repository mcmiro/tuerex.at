import * as React from 'react';
import { screen, render } from '@testing-library/react';
import MegaMenu from './';

describe('Test Field component', () => {
  it('Should pass when name, variant, size and placeholder is additional', () => {
    render(<MegaMenu data-testid="test" />);

    const megaMenu = screen.queryByTestId('test');
    expect(megaMenu).toBeDefined();
    expect(megaMenu).toMatchSnapshot();
  });
});
