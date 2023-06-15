import { act, render, screen, waitFor } from '@testing-library/react';
import { FeaturedScreenshot } from './FeaturedScreenshot';
import { data } from './FeaturedScreenshot.mocks';

describe('FeaturedScreenshot', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<FeaturedScreenshot featuredImages={data} />);
    }).not.toThrow();
  });

  it('displays the first image in the featuredImages array', () => {
    render(<FeaturedScreenshot featuredImages={data} />);
    const featuredImage = screen.getByTestId('featured');
    const img = featuredImage.querySelector('img');
    expect(img).toHaveAttribute('src', data[0].src);
  });

  it('displays all the images as thumbnails', () => {
    render(<FeaturedScreenshot featuredImages={data} />);
    const thumbnails = screen.getAllByRole('button');
    expect(thumbnails).toHaveLength(data.length);
  });

  it('changes the featured image when the user clicks on the corresponding thumbnail', () => {
    render(<FeaturedScreenshot featuredImages={data} />);
    const thumbnails = screen.getAllByRole('button');
    const featuredImage = screen.getByTestId('featured');
    const img = featuredImage.querySelector('img');
    expect(img).toHaveAttribute('src', data[0].src);
    act(() => {
      thumbnails[1].click();
    });
    waitFor(() => {
      expect(img).toHaveAttribute('src', data[1].src);
    });
  });
});
