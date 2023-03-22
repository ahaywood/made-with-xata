import { Icon } from '../Icon';

interface TagProps {
  isXShowing?: boolean;
  handleClose?: () => void;
  name: string;
}

const Tag = ({ isXShowing = true, handleClose = () => {}, name }: TagProps) => (
  <div
    className={`inline-flex gap-x-2 pl-5 py-2 items-center bg-montana rounded-3xl
      ${isXShowing ? 'pr-4' : 'pr-5'}
    `}
  >
    <div className="text-sm leading-[18px]">{name}</div>
    {isXShowing && (
      <button
        className="text-stack hover:text-white relative -top-[3px]"
        onClick={() => handleClose()}
        type="button"
      >
        <Icon name="close" height={16} width={16} />
      </button>
    )}
  </div>
);

export { Tag };
