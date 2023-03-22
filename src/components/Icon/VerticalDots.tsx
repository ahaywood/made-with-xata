interface VerticalDotsProps {
  height?: number;
  width?: number;
}

const VerticalDots = ({ height = 24, width = 24 }: VerticalDotsProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="verticalDotsIcon">
      <title>Vertical Dots</title>
      <circle cx="12" cy="4.5" r="2.25" transform="rotate(90 12 4.5)" />
      <circle cx="12" cy="12" r="2.25" transform="rotate(90 12 12)" />
      <circle cx="12" cy="19.5" r="2.25" transform="rotate(90 12 19.5)" />
    </svg>
  )
}

export {VerticalDots}