interface SearchProps {
  height?: number;
  width?: number;
}

const Search = ({ height = 24, width = 24 }: SearchProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="searchIcon"
  >
    <title>Search</title>
    <path d="M9.75 16.5C6 16.5 3 13.5 3 9.75C3 6 6 3 9.75 3C13.5 3 16.5 6 16.5 9.75C16.5 13.5 13.5 16.5 9.75 16.5ZM9.75 4.5C6.825 4.5 4.5 6.825 4.5 9.75C4.5 12.675 6.825 15 9.75 15C12.675 15 15 12.675 15 9.75C15 6.825 12.675 4.5 9.75 4.5Z" />
    <path d="M20.25 21C20.025 21 19.875 20.925 19.725 20.775L13.725 14.775C13.425 14.475 13.425 14.025 13.725 13.725C14.025 13.425 14.475 13.425 14.775 13.725L20.775 19.725C21.075 20.025 21.075 20.475 20.775 20.775C20.625 20.925 20.475 21 20.25 21Z" />
  </svg>
);

export { Search };
