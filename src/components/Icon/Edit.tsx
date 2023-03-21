interface EditProps {
  height?: number;
  width?: number;
}

const Edit = ({ height = 24, width = 24 }: EditProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="editIcon">
      <title>Edit</title>
      <path d="M7 21.46V24.5C7 24.78 7.22 25 7.5 25H10.54C10.67 25 10.8 24.95 10.89 24.85L21.81 13.94L18.06 10.19L7.15 21.1C7.05 21.2 7 21.32 7 21.46ZM24.71 11.04C25.1 10.65 25.1 10.02 24.71 9.63L22.37 7.29C21.98 6.9 21.35 6.9 20.96 7.29L19.13 9.12L22.88 12.87L24.71 11.04Z" />
    </svg>
  )
}

export {Edit}