/* eslint-disable */
import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Badge from './';

describe('Test badge component', () => {
  it('Should pass when value is greater than 0', () => {
    const BADGE_VALUE = 1;
    render(
      React.cloneElement(<Badge value={BADGE_VALUE} data-testid="badge-test" />)
    );

    const renderBadgeComponent = screen.queryByTestId('badge-test');
    expect(renderBadgeComponent).toBeDefined();
    expect(renderBadgeComponent).toMatchSnapshot();
  });
});
