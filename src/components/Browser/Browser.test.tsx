import { render, screen } from '@testing-library/react';
import { Browser } from './Browser';

describe('Browser', () => {
  const alt = 'Cute Kittens';
  const featuredImage = 'http://placekitten.com/1080/1080';
  const width = 1080;
  const height = 720;

  it('renders correctly', () => {
    expect(() => {
      render(
        <Browser
          name={alt}
          featuredImage={featuredImage}
          width={width}
          height={height}
        />
      );
    }).not.toThrow();
  });

  it('shows the correct image', () => {
    render(
      <Browser
        name={alt}
        featuredImage={featuredImage}
        width={width}
        height={height}
      />
    );
    expect(screen.getByAltText(alt)).toHaveAttribute('src', src);
  });

  it('shows the correct alt text', () => {
    render(
      <Browser
        name={alt}
        featuredImage={featuredImage}
        width={width}
        height={height}
      />
    );
    expect(screen.getByAltText(alt)).toHaveAttribute('alt', alt);
  });

  it('displays the correct size', () => {
    render(
      <Browser
        name={alt}
        featuredImage={featuredImage}
        width={width}
        height={height}
      />
    );
    expect(screen.getByTestId('browserComponent')).toHaveStyle({
      width: `${width}px`,
      height: `${height}px`,
    });
  });
});
