export interface ToggleProps {
  defaultChecked?: boolean
  label?: string
  name: string
}

const Toggle = ({ defaultChecked, label, name }: ToggleProps) => {
  return (
    <label htmlFor={name} className="toggle flex gap-x-3 items-center cursor-pointer">
      <input type="checkbox" name={name} id={name} defaultChecked={defaultChecked} className="hidden" />
      <div className="bg-montana rounded-xl p-[2px] w-9 switch-wrapper flex">
        <div className="drop-shadow-toggle bg-white h-4 w-4 block rounded-full switch" />
      </div>
      {label && (<div>{label}</div>)}
    </label>
  )
}

export {Toggle}