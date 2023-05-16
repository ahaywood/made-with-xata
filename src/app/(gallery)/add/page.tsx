'use client';

import { Header } from '@/components/Header';
import { AddProjectForm } from '@/components/AddProjectForm';
import { MobileDevice } from '@/components/MobileDevice';
import { useState } from 'react';

export default function Add() {
  const [project, setProject] = useState<Project>({
    name: 'something',
    isApproved: false,
    slug: 'something',
    description: 'lorem ipsum',
    featured: false,
    featuredImage: '',
    additionalImages: [],
    projectUrl: 'https://example.com',
    gitHubRepo: 'http://github.com',
    contributor: {
      name: 'Someone',
      avatar: 'https://avatars.githubusercontent.com/u/1234567?v=4',
      avatarColor: 'alienArmpit',
      email: 'something@example.com",',
    },
    tags: [{ name: 'Tailwind', id: '1' }],
  });

  const updateForm = (updatedProject: Project) => {
    setProject(updatedProject);
  };

  return (
    <div className="bg-showcase bg-100-auto bg-no-repeat">
      <Header />
      <div className="page pt-24">
        <div className="col-start-3 col-span-8 text-center mb-20">
          <h1>Made with Xata</h1>
          <h2>
            Share your project with a community of creators, developers, and
            entrepreneurs who are passionate about building web applications
            that push boundaries and solve real-world problems.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 max-w-pageWidth mx-auto pb-[130px]">
        <div className="self-start sticky top-0 col-span-5 col-start-1 justify-self-center">
          <MobileDevice project={project} />
        </div>
        <div className="col-start-7 col-span-5">
          <AddProjectForm updateForm={updateForm} />
        </div>
      </div>
    </div>
  );
}
