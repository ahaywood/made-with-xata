import Image from 'next/image';
import { useEffect } from 'react';
import iphone2x from './images/iphone@2x.png';

interface MobileDeviceProps {
  project: Project;
}

const MobileDevice = ({ project }: MobileDeviceProps) => (
  <div className="relative">
    <div className="relative z-10">
      <Image src={iphone2x} alt="iPhone" height={834} width={418} />
    </div>
    <div className="py-20 px-10 left-0 top-0 absolute z-5 w-full h-full">
      {JSON.stringify(project)}
    </div>
  </div>
);

export { MobileDevice };
