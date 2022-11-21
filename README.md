# P5.js Circles

Generative circle artwork created with [P5.js](https://p5js.org/). A hosted version can be [seen here](https://dholmes.co.uk/p5js-circles/dist/).

This project uses:

1. [p5.js](https://p5js.org/): JavaScript library for creative coding
2. [dat.GUI](https://github.com/dataarts/dat.gui): Variable tinkering
3. [parcel](https://parceljs.org/): Build tooling

## Getting Started

### Prerequisites

1. Installation of [git SCM](https://git-scm.com/downloads)
1. Installation of [node.js v18.12.1](https://nodejs.org/en/)

### Development

1. Complete the 'Getting Started > Prerequisites' section
2. `npm i`: To install the dependencies
3. `npm start`: To start a local dev server
4. Visit [http://localhost:1234](http://localhost:1234/) in a browser
5. Press `CTRL+c`: To stop the local dev server

### Production Build

1. Complete the 'Getting Started > Prerequisites' section
1. `npm run build`: Builds a production build to `./dist`

## Commands

|Command|Description|
|---|---|
|`npm run clean`|Cleans the [./dist](./dist) directory|
|`npm run build`|Runs `npm run clean` and `parcel build`|
|`npm run lint`|Runs [ESLint](https://eslint.org/) with 0 warnings argument|
|`npm run lint-fix`|Runs [ESLint](https://eslint.org/) with 0 warnings and `--fix` arguments|
|`npm run prettier`|Runs [Prettier](https://prettier.io/) with `--check` argument|
|`npm run prettier-fix`|Runs [Prettier](https://prettier.io/) with `--write` argument|
|`npm start`|Runs a local development server using the [parcel](https://parceljs.org/)|

## Credits

* [codetocloth reddit post](https://www.reddit.com/r/generative/comments/gc2r54/first_four_cap_designs_generated_every_design/) for the inspiration
* [Des Holmes: Technical Leadership & Product Development](https://dholmes.co.uk) for creating this repo
