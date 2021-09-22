<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby starter boilerplate for Redux and Material-UI (v5)
</h1>

This boilerplate gives you everything you need to write a Gatsby app using Redux and using Material-UI with Emotion as a style library and theme for your app. The boilerplate also offers ESLint, Jest, React-Test-Renderer, TypeScript, and Storybook. Since everything is already setup, all you have to do is start writing your app!

## Built-In Material-UI Theme using Emotion

Material UI version 5 has several ways to override and inject styles, but since the plan is to move away from styled-components, the boilerplate demo is using Emotion directly with the MUI Theme, which you can see in the header.js and layout.js files. If you wish to continue using styled-components with MUI v5, you can install the @mui/styles package using the methods outlined in the [Migration from v4 to v5 guide](https://mui.com/guides/migration-v4/).

## Material-UI v4 Boilerplate

If you want to use Material-UI v4 with the old API, you can switch to the [mui-v4 branch](https://github.com/MutableLoss/gatsby-redux-material-ui-boilerplate/tree/mui-v4), or download the [0.1.0](https://github.com/MutableLoss/gatsby-redux-material-ui-boilerplate/releases/tag/0.1.0) release which are both MUI v4 boilerplates using the gatsby-theme-material-ui plugin.

# Getting Started

## Pre-Requisites

- Install [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install)
- Install a [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools#redux-devtools)

## Installation

Clone the repo:

```
$ git clone https://github.com/MutableLoss/gatsby-redux-material-ui-boilerplate.git
```

Install packages:

```
$ cd gatsby-redux-material-ui-boilerplate
$ yarn install
```

# Development Usage

Starting the Gatsby App in Development
```
$ gatsby develop
```

*or*

```
$ yarn start
```

Start Storybook:
```
$ yarn storybook
```

Run Unit Tests (once):

```
$ yarn test
```

Run Unit Tests (watch-mode):

```
$ yarn test-watch
```

## Noteable Boilerplate Files

* gatsby-browser.js - default context providers (Redux/MUI Theme)
* theme.js - the MUI Theme File
* src/state - Redux store / initial state file / Redux slices
* src/stories - Storybook Story folder
* jest.config.js - Jest config file

## TypeScript Support

Gatsby offers TypeScript support by default, so you can use it right out of the box. You can find more information on using TypeScript in Using Typescript built into the start app itself [using-typecript.tsx](src/pages/using-typecript.tsx), or from the [Gatsby Docs](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/). 

For TS you will also want to make sure unit-testing is setup as well. To configure the Jest process, replace the [jest.config.js](jest.config.js) file with the [jest.config-ts.js](jest.config-ts.js) file. You will also want to update the [jest-preprocess file](jest-preprocess.js) file by enabling the typescript-preset which is commented out. 
