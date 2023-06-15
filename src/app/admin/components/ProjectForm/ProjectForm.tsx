import { Upload } from '@/components/Form/Upload';
import { Tags } from '@/components/Form/Tags';
import { Submit } from '@/components/Form/Submit';
import { useForm } from 'react-hook-form';
import { Toggle } from '@/components/Toggle';
import { addProject, editProject } from '@/app/actions';

interface ProjectFormProps {
  project?: Project;
  state?: 'add' | 'edit';
  toggleVisibility: () => void;
}

const ProjectForm = ({
  state = 'add',
  project,
  toggleVisibility,
}: ProjectFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Project & { contributorName?: string }) => {
    if (state === 'add') {
      addProject(data);
    } else if (state === 'edit') {
      editProject(data);
    }
    // toggleVisibility();
  };

  return (
    <div>
      <div className="form-heading mb-8">
        {state === 'add' ? 'Add' : 'Edit'} a Project
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {project?.id && <input type="hidden" name="id" value={project.id} />}
        <div className="field">
          <Toggle
            label="Featured in the Carousel"
            name="featured"
            defaultChecked={project?.featured}
          />
        </div>
        <div className="field">
          <Toggle
            label="Featured on the Homepage"
            name="homepage"
            defaultChecked
          />
        </div>
        <div className="field">
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </div>
        <div className="field">
          <label htmlFor="contributorName">Contributor's Name</label>
          <input
            type="text"
            id="contributorName"
            {...register('contributorName', { required: true })}
          />
        </div>
        <div className="field">
          <label htmlFor="contributorEmail">Contributor's Email</label>
          <input
            type="email"
            id="contributorEmail"
            {...register('contributorEmail', { required: true })}
          />
        </div>
        <div className="field">
          <label htmlFor="gitHubRepo">Project on GitHub</label>
          <input
            type="url"
            id="gitHubRepo"
            {...register('gitHubRepo', { required: true })}
          />
        </div>
        <div className="field">
          <label htmlFor="projectUrl">Project URL</label>
          <input
            type="url"
            id="projectUrl"
            {...register('projectUrl', { required: true })}
          />
        </div>

        <div className="field">
          <label htmlFor="upload">Upload a Featured Image</label>
          <Upload />
        </div>

        <div className="field">
          <label htmlFor="upload">Upload Additional Images</label>
          <Upload />
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register('description', { required: true })}
          />
        </div>

        <div className="field">
          <label htmlFor="tags">Tags</label>
          <Tags />
        </div>

        <div className="field text-right">
          <Submit label={`${state === 'add' ? 'Add' : 'Edit'} a Project`} />
        </div>
      </form>
    </div>
  );
};

export { ProjectForm };
