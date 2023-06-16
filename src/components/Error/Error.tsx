import { Icon } from '../Icon';

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => (
  <div className="error">
    <Icon name="hazard" />
    {message}
  </div>
);

export { Error };
