import { Icon } from '../Icon';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="error">
    <Icon name="hazard" />
    {message}
  </div>
);

export { ErrorMessage };
