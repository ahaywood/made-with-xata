interface GitHubProps {
  height?: number;
  width?: number;
}

const GitHub = ({ height = 24, width = 24 }: GitHubProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="githubIcon"
  >
    <title>GitHub</title>
    <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM19.125 19.125C18.225 20.025 17.1 20.775 15.9 21.3C15.6 21.45 15.3 21.525 15 21.675V19.875C15 18.9 14.7 18.225 14.025 17.775C14.4 17.7 14.775 17.7 15.15 17.625C15.525 17.55 15.825 17.475 16.2 17.325C16.575 17.175 16.95 17.025 17.25 16.875C17.55 16.725 17.85 16.425 18.15 16.125C18.45 15.825 18.675 15.525 18.825 15.15C18.975 14.775 19.125 14.325 19.275 13.8C19.35 13.275 19.425 12.675 19.425 12.075C19.425 10.875 19.05 9.825 18.225 9C18.6 8.1 18.525 7.05 18.075 5.925H17.775C17.55 5.925 17.175 6 16.65 6.15C16.125 6.375 15.525 6.675 14.85 7.125C13.95 6.9 12.975 6.75 11.925 6.75C10.95 6.75 9.975 6.9 9.075 7.125C8.625 6.825 8.25 6.6 7.875 6.45C7.65 6.15 7.35 6.075 7.125 6C6.9 5.925 6.675 5.85 6.45 5.85C6.225 5.85 6.15 5.85 6.075 5.85C6 5.85 6 5.85 5.925 5.85C5.475 6.975 5.475 7.95 5.775 8.925C4.95 9.75 4.575 10.8 4.575 12C4.575 12.6 4.65 13.2 4.725 13.725C4.8 14.25 4.95 14.7 5.175 15.075C5.325 15.45 5.625 15.75 5.85 16.05C6.15 16.35 6.45 16.575 6.75 16.8C7.05 16.95 7.425 17.175 7.8 17.25C8.175 17.4 8.55 17.475 8.85 17.55C9.225 17.625 9.6 17.7 9.975 17.7C9.3 18.15 9 18.825 9 19.8V21.6C8.625 21.525 8.325 21.375 7.95 21.225C6.75 20.7 5.7 20.025 4.725 19.05C3.825 18.15 3.075 17.025 2.55 15.825C2.025 14.55 1.725 13.275 1.725 11.925C1.725 10.575 2.025 9.225 2.55 8.025C3.075 6.825 3.75 5.775 4.725 4.8C5.625 3.9 6.75 3.15 7.95 2.625C9.225 2.1 10.5 1.8 11.85 1.8C13.2 1.8 14.55 2.1 15.75 2.625C16.95 3.15 18 3.825 18.975 4.8C19.875 5.7 20.625 6.825 21.15 8.025C21.675 9.3 21.975 10.575 21.975 11.925C21.975 13.275 21.675 14.625 21.15 15.825C20.775 17.1 20.025 18.225 19.125 19.125Z" />
  </svg>
);

export { GitHub };
