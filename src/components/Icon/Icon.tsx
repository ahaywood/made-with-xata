interface IconProps {
  height?: number;
  name: string;
  width?: number;
}

const Icon = ({ height = 32, name, width = 32 }: IconProps) => {
  switch (name.toLowerCase()) {
    case "check":
    case "close":
    case "discord":
    case "dots":
    case "edit":
    case "email":
    case "delete":
    case "github":
    case "linkedin":
    case "twitter":
    case "upload":
    default:
      return <div />
  }
}

export { Icon }