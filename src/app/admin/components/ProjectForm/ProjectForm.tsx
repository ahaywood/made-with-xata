import { Upload } from '@/components/Form/Upload';
import { Tags } from '@/components/Form/Tags';
import { Submit } from '@/components/Form/Submit';
import { useForm } from 'react-hook-form';
import { Toggle } from '@/components/Toggle';

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

  const onSubmit = (data) => {
    fetch('/api/project', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        // res.json();
        console.log(res);
        toggleVisibility();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="form-heading mb-8">
        {state === 'add' ? 'Add' : 'Edit'} a Project
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            {...register('projectName', { required: true })}
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
          <label htmlFor="github">Project on GitHub</label>
          <input
            type="url"
            id="github"
            {...register('github', { required: true })}
          />
        </div>
        <div className="field">
          <label htmlFor="url">Project URL</label>
          <input type="url" id="url" {...register('url', { required: true })} />
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
