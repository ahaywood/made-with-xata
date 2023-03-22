import { Icon } from '@/components/Icon';
import { Tag } from '@/components/Tag';
import { Avatar } from '@/components/Avatar';
import Link from 'next/link';

interface ProjectRowProps {
  project: Project;
  handleEdit: () => void;
  handleDelete: () => void;
}

const ProjectRow = ({ project, handleEdit, handleDelete }: ProjectRowProps) => {
  const {
    featured,
    slug,
    name,
    contributor: { avatar, name: contributor },
    tags,
    isApproved,
  } = project;
  return (
    <div className="admin-gallery-table relative items-center py-6 border-bunker border-b-2 project-row">
      <div className="absolute -left-8 drag-drop-handle pr-6 py-6">
        <button type="button" className="cursor-grab">
          <Icon name="verticalDots" />
        </button>
      </div>
      <div className="text-selectiveYellow">
        {featured && <Icon name="check" width={32} height={32} />}
      </div>
      <div className="text-xl font-bold">
        <Link
          href={`/${slug}`}
          className={`hover:text-selectiveYellow hover:underline ${
            !isApproved ? 'italic text-gray' : ''
          }`}
        >
          {name}
        </Link>
      </div>
      <div
        className={`flex items-center gap-x-2 text-lg ${
          !isApproved ? 'italic text-gray' : ''
        }`}
      >
        <Avatar src={avatar} alt={contributor} />
        {contributor}
      </div>
      <div className="flex relative gap-x-4 overflow-hidden">
        <div className="absolute w-1/2 right-0 h-full bg-gradient-to-l from-black" />
        {tags &&
          tags.map((tag) => (
            <Tag isXShowing={false} name={tag.name} key={tag.id} />
          ))}
      </div>
      <div className="flex gap-x-4">
        <button
          type="button"
          className="hover:text-selectiveYellow"
          onClick={() => handleEdit()}
          data-testid="editProject"
        >
          <Icon width={32} height={32} name="edit" />
        </button>
        <button
          type="button"
          className="hover:text-selectiveYellow"
          onClick={() => handleDelete()}
          data-testid="deleteProject"
        >
          <Icon width={32} height={32} name="delete" />
        </button>
      </div>
    </div>
  );
};

export { ProjectRow };
