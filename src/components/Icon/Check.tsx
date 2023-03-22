interface CheckProps {
  height?: number;
  width?: number;
}

const Check = ({ height = 24, width = 24 }: CheckProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="checkIcon"
  >
    <title>Check</title>
    <path d="M9.00063 16.17L5.53063 12.7C5.14063 12.31 4.51063 12.31 4.12062 12.7C3.73063 13.09 3.73063 13.72 4.12062 14.11L8.30063 18.29C8.69063 18.68 9.32063 18.68 9.71063 18.29L20.2906 7.71001C20.6806 7.32001 20.6806 6.69001 20.2906 6.30001C19.9006 5.91001 19.2706 5.91001 18.8806 6.30001L9.00063 16.17Z" />
  </svg>
);

export { Check };
