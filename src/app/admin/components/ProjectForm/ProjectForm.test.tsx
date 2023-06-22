import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { ProjectForm } from './ProjectForm';

describe('ProjectForm', () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <Suspense>
          <ProjectForm toggleVisibility={() => {}} />
        </Suspense>
      );
    }).not.toThrow();
  });
});
