'use client';

import { useForm } from 'react-hook-form';
import { Submit } from '../Form/Submit';

interface AddProjectFormProps {
  updateForm: (updatedProject: Project) => void;
}

const AddProjectForm = ({ updateForm = () => {} }: AddProjectFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const onUpdate = () => {
    updateForm({
      id: 'yolo',
      name: 'yolo',
      isApproved: true,
      slug: 'yolo',
      featured: true,
      contributor: {
        name: 'Someone',
        avatar: 'https://avatars.githubusercontent.com/u/1234567?v=4',
        avatarColor: 'alienArmpit',
      },
      tags: [{ name: 'Tailwind', id: '1' }],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            {...register('projectName', { required: true })}
            onBlur={onUpdate}
          />
          {errors.projectName && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            onBlur={onUpdate}
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            onBlur={onUpdate}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="projectOnGitHub">Project on GitHub</label>
          <input
            type="url"
            {...register('projectOnGitHub', { required: true })}
            onBlur={onUpdate}
          />
          {errors.projectOnGitHub && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="projectUrl">Project URL</label>
          <input
            type="url"
            {...register('projectUrl', { required: true })}
            onBlur={onUpdate}
          />
          {errors.projectUrl && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="uploadImage">Upload Image</label>
          <input
            type="file"
            placeholder="Select a File on your Computer or Drag and Drop here."
            {...register('uploadImage', { required: true })}
            onBlur={onUpdate}
          />
          {errors.uploadImage && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" onBlur={onUpdate} />
          {errors.description && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="tags">Tags</label>
          <input type="text" {...register('tags')} onBlur={onUpdate} />
        </div>

        <div className="text-right">
          <Submit label="Submit Project" />
        </div>
      </form>
    </div>
  );
};

export { AddProjectForm };
