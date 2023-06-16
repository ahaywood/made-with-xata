interface HazardProps {
  height?: number;
  width?: number;
}

const Hazard = ({ height = 24, width = 24 }: HazardProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="hazardIcon"
  >
    <title>Hazard</title>
    <path d="M4.00137 20.0075H19.0614C20.6014 20.0075 21.5614 18.3375 20.7914 17.0075L13.2614 3.9975C12.4914 2.6675 10.5714 2.6675 9.80137 3.9975L2.27137 17.0075C1.50137 18.3375 2.46137 20.0075 4.00137 20.0075ZM11.5314 13.0075C10.9814 13.0075 10.5314 12.5575 10.5314 12.0075V10.0075C10.5314 9.4575 10.9814 9.0075 11.5314 9.0075C12.0814 9.0075 12.5314 9.4575 12.5314 10.0075V12.0075C12.5314 12.5575 12.0814 13.0075 11.5314 13.0075ZM12.5314 17.0075H10.5314V15.0075H12.5314V17.0075Z" />
  </svg>
);

export { Hazard };
