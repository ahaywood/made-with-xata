interface DotsProps {
  height?: number;
  width?: number;
}

const Dots = ({ height = 24, width = 24 }: DotsProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="dotsIcon"
  >
    <title>Dots</title>
    <circle cx="4.5" cy="12" r="2.25" />
    <circle cx="12" cy="12" r="2.25" />
    <circle cx="19.5" cy="12" r="2.25" />
  </svg>
);

export { Dots };
