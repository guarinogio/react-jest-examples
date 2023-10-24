import { render, screen } from '@testing-library/react';
import ConditionalRender from './ConditionalRender';

describe('ConditionalRender Component', () => {
  it('should render content when "show" is true', () => {
    render(<ConditionalRender show={true} />);
    const content = screen.getByText("This content is shown when 'show' is true.");
    expect(content).toBeInTheDocument();
  });

  it('should render different content when "show" is false', () => {
    render(<ConditionalRender show={false} />);
    const content = screen.getByText("This content is shown when 'show' is false.");
    expect(content).toBeInTheDocument();
  });
});
