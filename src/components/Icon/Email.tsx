interface EmailProps {
  height?: number;
  width?: number;
}

const Email = ({ height = 24, width = 24 }: EmailProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="emailIcon"
  >
    <title>Email</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6.75C5.58921 6.75 5.25 7.08921 5.25 7.5V16.5C5.25 16.9108 5.58921 17.25 6 17.25H18C18.4108 17.25 18.75 16.9108 18.75 16.5V7.5C18.75 7.08921 18.4108 6.75 18 6.75H6ZM3.75 7.5C3.75 6.26079 4.76079 5.25 6 5.25H18C19.2392 5.25 20.25 6.26079 20.25 7.5V16.5C20.25 17.7392 19.2392 18.75 18 18.75H6C4.76079 18.75 3.75 17.7392 3.75 16.5V7.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.88564 7.06985C4.12318 6.73051 4.59082 6.64798 4.93016 6.88552L12.0001 11.8345L19.07 6.88552C19.4093 6.64798 19.877 6.73051 20.1145 7.06985C20.352 7.40918 20.2695 7.87683 19.9302 8.11437L12.4302 13.3644C12.1719 13.5451 11.8282 13.5451 11.57 13.3644L4.06997 8.11437C3.73063 7.87683 3.6481 7.40918 3.88564 7.06985Z"
    />
  </svg>
);

export { Email };
