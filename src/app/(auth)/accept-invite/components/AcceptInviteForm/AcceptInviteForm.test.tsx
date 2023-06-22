import { render, screen } from '@testing-library/react'
import { AcceptInviteForm } from './AcceptInviteForm';

describe("AcceptInviteForm", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <AcceptInviteForm />)
    }).not.toThrow();
  });
});