
# next-google-fonts-helper
[![package version](https://img.shields.io/npm/v/next-google-fonts-helper.svg?style=flat-square)](https://npmjs.org/package/next-google-fonts-helper)
[![package downloads](https://img.shields.io/npm/dm/next-google-fonts-helper.svg?style=flat-square)](https://npmjs.org/package/next-google-fonts-helper)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/next-google-fonts-helper.svg?style=flat-square)](https://npmjs.org/package/next-google-fonts-helper)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Little component for loading Google fonts fast in Next.js

## Table of Contents

- [About](#about)
- [Features](#features)
- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## About

Based on [this article by Harry Roberts](https://csswizardry.com/2020/05/the-fastest-google-fonts/), an efficient strategy for loading fonts from the [Google Fonts CDN](https://fonts.google.com/).

## Features

- Preemptively warm up the fonts’ origin.
- Initiate a high-priority, asynchronous fetch for the CSS file. Works in most modern browsers.
- Initiate a low-priority, asynchronous fetch that gets applied to the page only after it’s arrived. Works in all browsers with JavaScript enabled.
- In the unlikely event that a visitor has intentionally disabled JavaScript, fall back to the original method.

## Usage


In your `_document.js`:

```js
import Head from "next/head"
import NextGoogleFontsHelper from "next-google-fonts-helper"

// ...

<Head>
  <NextGoogleFontsHelper fonts={['Montserrat:wght@300;400;500;600']} />
</Head>
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install next-google-fonts-helper
$ # OR
$ yarn add next-google-fonts-helper
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © [[object Object]]([object Object])
