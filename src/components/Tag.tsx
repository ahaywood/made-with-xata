import { Icon } from "./Icons";

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <div>
      {name}
      <Icon name="close" />
    </div>
  )
}

export { Tag }