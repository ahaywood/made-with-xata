# Made with Xata

**Made with Xata** is a project gallery that showcases example projects built using the Xata platform. It includes a frontend gallery, with project details,user generated content, user authentication, and an admin interface for managing featured projects.

[This project was built in public.](https://www.notion.so/ahhacreative/Project-Page-Made-with-Xata-e1c3579bb49e4713bdd7a77b2e6f415a?pvs=4)

## Getting Started

To get this project up and running, you'll need to:

1. Clone the repo
2. Run `yarn install` to download and install all the project dependencies.
3. Duplicate `.env.example`, naming the second file `.env` You'll need to adjust the values in that file with your own API Keys.
4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

within the browser of your choice, go to [http://localhost:3000](http://localhost:3000).

## Storybook

All the components within this project are documented within [Storybook](https://storybook.js.org/).

To get Storybook up and running:

```bash
yarn storybook
```

The Storybook script should automatically open a browser window. But, you can also go to [http://localhost:6006/](http://localhost:6006/)

## Jest and JavaScript Testing Library

This project uses [Jest](https://jestjs.io/) and [JavaScript Testing Library](https://testing-library.com/) for testing. It makes use of the [built-in Next.js Jest configuration and the Rust compiler](https://nextjs.org/docs/testing#jest-and-react-testing-library). (It's fast!)

To get the test suite up and running:

```bash
yarn test
```

## Xata

On the backend, all the data is being managed through [Xata](https://xata.io/).

<!-- TODO: Add additional documentation around Xata once the project is finalized -->
