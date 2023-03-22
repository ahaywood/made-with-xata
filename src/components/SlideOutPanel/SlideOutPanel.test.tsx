import { render, screen, waitFor } from '@testing-library/react';
import { SlideOutPanel } from './SlideOutPanel';

describe('SlideOutPanel', () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <SlideOutPanel>
          <div>Test</div>
        </SlideOutPanel>
      );
    }).not.toThrow();
  });

  it('displays the content', () => {
    render(
      <SlideOutPanel defaultIsShowing>
        <div>Test</div>
      </SlideOutPanel>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('is showing by default', () => {
    render(
      <SlideOutPanel defaultIsShowing>
        <div>Test</div>
      </SlideOutPanel>
    );
    expect(screen.getByTestId('slide-out-panel')).toBeInTheDocument();
  });

  it('is hidden by default', () => {
    render(
      <SlideOutPanel defaultIsShowing={false}>
        <div>Test</div>
      </SlideOutPanel>
    );
    expect(screen.queryByTestId('slide-out-panel')).not.toBeInTheDocument();
  });

  it('is hidden when clicking the close button', async () => {
    render(
      <SlideOutPanel defaultIsShowing>
        <div>Test</div>
      </SlideOutPanel>
    );
    expect(screen.getByTestId('slide-out-panel')).toBeInTheDocument();
    await waitFor(() => screen.getByRole('button').click());
    await waitFor(() =>
      expect(screen.queryByTestId('slide-out-panel')).not.toBeInTheDocument()
    );
  });
});
