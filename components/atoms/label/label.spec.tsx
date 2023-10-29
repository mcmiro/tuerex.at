/* eslint-disable no-use-before-define */
import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Label from './';

describe('Test label component', () => {
  it('Should pass when content is additional', () => {
    render(<Label content="test" data-testid="label-test" />);

    const label = screen.queryByTestId('testid');
    expect(label).toBeDefined();
    expect(label).toMatchSnapshot();
  });
});
