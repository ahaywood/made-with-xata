import { Butterfly } from '@/components/Butterfly';

interface SubmitProps {
  label: string;
}

const Submit = ({ label }: SubmitProps) => (
  <div
    className="rainbow-border rounded-full relative inline-block p-[6px]"
    data-testid="border"
  >
    <div className="flex items-center px-10 py-4 text-lg gap-x-2 font-bold text-white bg-black rounded-full relative z-rainbowButton ">
      <Butterfly height={24} width={24} />
      {label}
    </div>
  </div>
);

export { Submit };
