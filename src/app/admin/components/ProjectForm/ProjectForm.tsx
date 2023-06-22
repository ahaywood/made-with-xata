'use client';

import { Upload } from '@/components/Form/Upload';
import { Tags } from '@/components/Form/Tags';
import { Submit } from '@/components/Form/Submit';
import { Controller, useForm } from 'react-hook-form';
import { Toggle } from '@/components/Toggle';
import { addProject, editProject } from '@/actions/projects';
import { ErrorMessage } from '@/components/ErrorMessage';

export const metadata = {
  title: 'Manage Projects | Made with Xata',
};

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
    control,
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

    // close slide out panel
    toggleVisibility();

    // refresh route
    console.log('refresh route');
  };

  return (
    <div>
      <div className="form-heading mb-8">
        {state === 'add' ? 'Add' : 'Edit'} a Project
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* project id */}
        {project?.id && (
          <input type="hidden" value={project.id} {...register('id')} />
        )}

        {/* contributor id */}
        {project?.contributor?.id && (
          <input
            type="hidden"
            {...register('contributorId')}
            value={project.contributor.id}
          />
        )}

        {/* is approved toggle */}
        <div className="field">
          <Controller
            control={control}
            defaultValue={project?.isApproved}
            name="isApproved"
            render={({ field: { onChange, value } }) => (
              <Toggle
                id="isApproved"
                label="Approved"
                onChange={onChange}
                value={value as boolean}
              />
            )}
          />
        </div>

        {/* featured in carousel toggle */}
        <div className="field">
          <Controller
            control={control}
            defaultValue={project?.featuredInCarousel}
            name="featuredInCarousel"
            render={({ field: { onChange, value } }) => (
              <Toggle
                id="featuredInCarousel"
                onChange={onChange}
                value={value as boolean}
                label="Featured in the Carousel"
              />
            )}
          />
        </div>

        {/* featured on homepage */}
        <div className="field">
          <Controller
            control={control}
            defaultValue={project?.featuredOnHomepage}
            name="featuredOnHomepage"
            render={({ field: { onChange, value } }) => (
              <Toggle
                id="featuredOnHomepage"
                onChange={onChange}
                value={value as boolean}
                label="Featured on the Homepage"
              />
            )}
          />
        </div>

        {/* project name */}
        <div className="field">
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            defaultValue={project?.name}
            {...register('name', { required: true })}
          />
          {errors.name && <ErrorMessage message="This field is required." />}
        </div>

        {/* contributor's name */}
        <div className="field">
          <label htmlFor="contributorName">Contributor's Name</label>
          <input
            type="text"
            defaultValue={project?.contributor?.name}
            id="contributorName"
            {...register('contributorName', { required: true })}
          />
          {errors.contributorName && (
            <ErrorMessage message="This field is required." />
          )}
        </div>

        {/* contributor's email */}
        <div className="field">
          <label htmlFor="contributorEmail">Contributor's Email</label>
          <input
            type="email"
            defaultValue={project?.contributor?.email}
            id="contributorEmail"
            {...register('contributorEmail', { required: true })}
          />
          {errors.contributorEmail && (
            <ErrorMessage message="This field is required." />
          )}
        </div>
        {/* project on GitHub */}
        <div className="field">
          <label htmlFor="gitHubRepo">Project on GitHub</label>
          <input
            type="url"
            defaultValue={project?.gitHubRepo}
            id="gitHubRepo"
            {...register('gitHubRepo', { required: true })}
          />
          {errors.gitHubRepo && (
            <ErrorMessage message="This field is required." />
          )}
        </div>
        {/* project URL */}
        <div className="field">
          <label htmlFor="projectUrl">Project URL</label>
          <input
            type="url"
            defaultValue={project?.projectUrl}
            id="projectUrl"
            {...register('projectUrl', { required: true })}
          />
          {errors.projectUrl && (
            <ErrorMessage message="This field is required." />
          )}
        </div>

        {/* upload a featured image */}
        <div className="field">
          <label htmlFor="upload">Upload a Featured Image</label>
          <Upload />
        </div>

        {/* upload additional images */}
        <div className="field">
          <label htmlFor="upload">Upload Additional Images</label>
          <Upload />
        </div>

        {/* description */}
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            defaultValue={project?.description}
            {...register('description', { required: true })}
          />
          {errors.description && (
            <ErrorMessage message="This field is required." />
          )}
        </div>

        {/* tags */}
        <div className="field">
          <label htmlFor="tags">Tags</label>
          <Controller
            defaultValue={project?.tags}
            control={control}
            name="tags"
            render={({ field: { onChange, value } }) => (
              <Tags onChange={onChange} value={value as string[]} />
            )}
          />
        </div>

        {/* submit button */}
        <div className="field text-right">
          <Submit
            label={`${state === 'add' ? 'Add the Project' : 'Save Updates'}`}
          />
        </div>
      </form>
    </div>
  );
};

export { ProjectForm };
