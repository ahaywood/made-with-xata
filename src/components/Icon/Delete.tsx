interface DeleteProps {
  height?: number;
  width?: number;
}

const Delete = ({ height = 24, width = 24 }: DeleteProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="deleteIcon">
      <title>Delete</title>
      <path d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V13C22 11.9 21.1 11 20 11H12C10.9 11 10 11.9 10 13V23ZM13 13H19C19.55 13 20 13.45 20 14V22C20 22.55 19.55 23 19 23H13C12.45 23 12 22.55 12 22V14C12 13.45 12.45 13 13 13ZM19.5 8L18.79 7.29C18.61 7.11 18.35 7 18.09 7H13.91C13.65 7 13.39 7.11 13.21 7.29L12.5 8H10C9.45 8 9 8.45 9 9C9 9.55 9.45 10 10 10H22C22.55 10 23 9.55 23 9C23 8.45 22.55 8 22 8H19.5Z" />
    </svg>
  )
}

export {Delete}