import { currentYear } from '@/utils/DateHelpers';

const Footer = () => (
  <div className="max-w-pageWidth mx-auto text-sm italic mt-20 text-gray text-right mb-10">
    Copyright &copy; {currentYear()}. Xata. All Rights Reserved.
  </div>
);

export { Footer };
