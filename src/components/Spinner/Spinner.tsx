interface SpinnerProps {
  size?: number;
}

const Spinner = ({ size = 64 }: SpinnerProps) => (
  <div
    data-testid="spinner"
    className="border-currentColor border-2 border-b-transparent rounded-full inline-block animate-spin"
    style={{ height: size, width: size }}
  />
);

export { Spinner };
