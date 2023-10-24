import { render } from '@testing-library/react';
import AccessibleComponent from './AccessibleComponent';
import { axe } from 'jest-axe';

describe('AccessibleComponent', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<AccessibleComponent />);

    // Use jest-axe to check for accessibility violations
    const results = await axe(container);

    // Ensure that there are no accessibility violations
    expect(results).toHaveNoViolations();
  });
});
