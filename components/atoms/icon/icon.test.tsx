/* eslint-disable */
import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Icon from '.';
import { CheckIcon } from '@heroicons/react/24/outline';

describe('Test icon component', () => {
  it('Should pass when icon is true', () => {
    render(
      React.cloneElement(<Icon icon={CheckIcon} data-testid="icon-test" />)
    );

    const renderIconComponent = screen.queryByTestId('icon-test');
    expect(renderIconComponent).toBeDefined();
    expect(renderIconComponent).toMatchSnapshot();
  });
});
