interface ButterflyProps {
  height?: number;
  width?: number;
}

const Butterfly = ({ height = 44, width = 44 }: ButterflyProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="butterfly"
  >
    <title>Xata Butterfly Icon</title>
    <path
      d="M36.6847 43.9354C39.7262 40.8994 41.7626 37.1044 42.3428 33.3837C42.9244 29.6629 42.0032 26.323 39.7812 24.0969L28.3096 35.5424L36.6847 43.9354Z"
      fill="#06D6A0"
    />
    <path
      d="M6.68929 44C3.64779 40.9654 1.61141 37.169 1.03116 33.4496C0.449539 29.7289 1.37079 26.3876 3.59141 24.1615L15.063 35.607L6.68929 44Z"
      fill="#FFBE0B"
    />
    <path
      d="M4.75722 22.9144C1.71547 19.879 0.00393324 15.7598 -0.000966016 11.4626C-0.00586527 7.16544 1.69628 3.04229 4.73109 0L16.2027 11.4455C19.2437 14.4812 20.9545 18.6003 20.9588 22.8972C20.9632 27.194 19.2608 31.3166 16.2261 34.3585L4.75722 22.9144Z"
      fill="#FF0075"
    />
    <path
      d="M38.6154 22.9144C41.6566 19.8785 43.3674 15.7589 43.3715 11.4617C43.3757 7.16458 41.6728 3.04174 38.6374 0L27.1658 11.4455C24.1248 14.4812 22.4141 18.6003 22.4097 22.8972C22.4053 27.194 24.1077 31.3166 27.1424 34.3585L38.6154 22.9144Z"
      fill="#0076FF"
    />
  </svg>
);

export { Butterfly };
