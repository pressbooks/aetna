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

Aetna uses Conventional Commits, enforced with commitlint. This facilitates releasing new versions of the package via Release Please. Release notes will be automatically added to a PR based on commits to dev.

To cut a release, merge the current release pull request. This will tag a new GitHub release and update CHANGELOG.md.

Then, run npm publish from the root of the package and enter your one-time password when prompted. For more information on publishing to npm, see the npm publish documentation.