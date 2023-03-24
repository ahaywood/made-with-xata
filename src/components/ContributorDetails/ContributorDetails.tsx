import { Avatar } from '../Avatar';

interface ContributorDetailsProps {
  // props here
}

const ContributorDetails = ({}: /* props */ ContributorDetailsProps) => (
  <div className="flex gap-x-5 items-center">
    <div>
      <Avatar alt="Queen Raae" size={72} />
    </div>
    <div>
      <h3 className="leading-none">Contributed By</h3>
      <div className="text-2xl leading-none">Queen Raae</div>
    </div>
  </div>
);

export { ContributorDetails };
