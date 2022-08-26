# Aetna

Front-end SCSS component library for [Pressbooks][1].

[1]: https://pressbooks.org

## Usage

1. Install via npm: `npm install aetna --save`.
2. Import into your project's Sass files:

```scss
@import "~aetna/assets/styles/aetna.scss";
```

## Development and testing

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This helps generate a CHANGELOG automatically.

Sass goes in `assets/styles`.

Components are documented using [Fractal](https://fractal.build). Fractal source goes in `src`.

Run Stylelint on your Sass: `npm run lint`

Run a test build to ensure that your Sass compiles without issue: `npm run build`

## Releasing

1. Run `npm run production` to generate an updated stylesheet for the component library which is published at <https://aetna.pressbooks.org>.
2. Commit the changes using the `chore` scope in your commit message:
   `git commit -am "chore(build): build stylesheet`
3. Push this change to GitHub.
4. Inspect the automatically generated [release pull request](https://github.com/google-github-actions/release-please-action).
5. If it looks good, you can merge it which will tag a new version and create a new GitHub release.
6. Pull the latest changes into your local environment, then run `npm publish`.
