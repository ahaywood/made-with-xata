'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Submit } from '../Form/Submit';

interface AddProjectFormProps {
  updateForm?: (updatedProject: Project) => void;
}

const AddProjectForm = ({ updateForm = () => {} }: AddProjectFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const watchAllFields = watch([
    'projectName',
    'name',
    'email',
    'projectOnGitHub',
    'projectUrl',
    'uploadImage',
    'uploadScreenshots',
    'description',
    'tags',
  ]);

  useEffect(() => {
    const subscription = watch((value) => updateForm(value));
    return () => subscription.unsubscribe();
  }, [watch, updateForm]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="projectName">Project Name</label>
          <input type="text" {...register('projectName', { required: true })} />
          {errors.projectName && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="name">Your Full Name</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Your Email</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="projectOnGitHub">Project on GitHub</label>
          <input
            type="url"
            {...register('projectOnGitHub', { required: true })}
          />
          {errors.projectOnGitHub && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="projectUrl">Project URL</label>
          <input type="url" {...register('projectUrl', { required: true })} />
          {errors.projectUrl && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="uploadImage">Featured Image</label>
          <input
            type="file"
            placeholder="Select a File on your Computer or Drag and Drop here."
            {...register('uploadImage', { required: true })}
          />
          {errors.uploadImage && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="uploadScreenshots">
            Additional Screenshots (up to 3)
          </label>
          <input
            type="file"
            placeholder="Select a File on your Computer or Drag and Drop here."
            {...register('uploadScreenshots', { required: true })}
          />
          {errors.uploadImage && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea id="description" {...register('description')} />
          {errors.description && <span>This field is required</span>}
        </div>

        <div className="field">
          <label htmlFor="tags">Tags</label>
          <input type="text" {...register('tags')} />
        </div>

        <div className="text-right">
          <Submit label="Submit Project" />
        </div>
      </form>
    </div>
  );
};

export { AddProjectForm };
