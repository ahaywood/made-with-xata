interface EditProps {
  height?: number;
  width?: number;
}

const Edit = ({ height = 24, width = 24 }: EditProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="editIcon"
  >
    <title>Edit</title>
    <path d="M5.25 16.095V18.375C5.25 18.585 5.415 18.75 5.625 18.75H7.905C8.0025 18.75 8.1 18.7125 8.1675 18.6375L16.3575 10.455L13.545 7.64248L5.3625 15.825C5.2875 15.9 5.25 15.99 5.25 16.095ZM18.5325 8.27998C18.825 7.98748 18.825 7.51498 18.5325 7.22248L16.7775 5.46748C16.485 5.17498 16.0125 5.17498 15.72 5.46748L14.3475 6.83998L17.16 9.65248L18.5325 8.27998Z" />
  </svg>
);

export { Edit };
