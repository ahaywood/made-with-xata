import { Check } from "./Check";
import { Close } from "./Close";
import { Delete } from "./Delete";
import { Discord } from "./Discord";
import { Dots } from "./Dots";
import { Edit } from "./Edit";
import { Email } from "./Email";
import { GitHub } from "./GitHub";
import { LinkedIn } from "./Linkedin";
import { Twitter } from "./Twitter";
import { Upload } from "./Upload";

interface IconProps {
  height?: number;
  name: string;
  width?: number;
}

const Icon = ({ height = 24, name, width = 24 }: IconProps) => {
  switch (name.toLowerCase()) {
    case "check":
      return <Check height={height} width={width} />
    case "close":
      return <Close height={height} width={width} />
    case "delete":
      return <Delete height={height} width={width} />
    case "discord":
      return <Discord height={height} width={width} />
    case "dots":
      return <Dots height={height} width={width} />
    case "edit":
      return <Edit height={height} width={width} />
    case "email":
      return <Email height={height} width={width} />
    case "github":
      return <GitHub height={height} width={width} />
    case "linkedin":
      return <LinkedIn height={height} width={width} />
    case "twitter":
      return <Twitter height={height} width={width} />
    case "upload":
      return <Upload height={height} width={width} />
    default:
      return <div />
  }
}

export { Icon }