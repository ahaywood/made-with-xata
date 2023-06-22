export interface ToggleProps {
  disabled?: boolean;
  label?: string;
  id: string;
  onChange: (checked: boolean) => void; // comes from React Hook Form
  value?: boolean;
  name?: string;
}

const Toggle = ({
  disabled = false,
  label,
  id,
  onChange,
  value: defaultChecked = false,
  name,
}: ToggleProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label
      htmlFor={id}
      className="toggle flex gap-x-3 items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        className="hidden"
        onChange={handleChange}
        disabled={disabled}
      />
      <div className="bg-montana rounded-xl p-[2px] w-9 switch-wrapper flex">
        <div className="drop-shadow-toggle bg-white h-4 w-4 block rounded-full switch" />
      </div>
      {label && (
        <div className={`${disabled ? 'opacity-50' : ''}`}>{label}</div>
      )}
    </label>
  );
};

export { Toggle };
