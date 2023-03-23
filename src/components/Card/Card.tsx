import { ButtonLink } from '../ButtonLink';
import { OnGitHub } from '../OnGitHub/OnGitHub';

const Card = () => (
  <div className="border-darkGray rounded-xl border-[1px] overflow-hidden max-h-[700px]">
    <div className="p-10">
      <h2 className="mb-3">Prune Your Followers</h2>
      <p className="mb-6 text-sm leading-8">
        Find Twitter accounts you follow that no longer spark joy, unfollow them
        and make room for new connections to grow
      </p>
      <div className="flex items-center gap-x-9">
        <ButtonLink
          href="/something"
          label="Project Details"
          borderWidth="thin"
          isButterflyShowing={false}
          textSize="large"
        />
        <OnGitHub href="#" />
      </div>
    </div>

    <div className="flex gap-x-4 w-[820px] -top-8 relative">
      {/* screen 1 */}
      <div className="mt-14 -rotate-12">
        <img src="/images/placeholder.png" alt="Placeholder" />
      </div>

      {/* screen 2 */}
      <div className="-rotate-12">
        <img src="/images/placeholder.png" alt="Placeholder" />
      </div>
    </div>
  </div>
);

export { Card };
