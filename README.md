<div align="center">@eCrowJS</div>
<h1 align="center">Storybook</h1>

<div align="center">

Storybook configurations for eCrowJS component libraries. This is not a fork of the Storybook repository; instead, it's a package containing common storybook configurations, addons, and CLI for visually testing most eCrowJS component libraries. Possibly more properly defined as a Storybook "wrapper".

To learn more about Storybook, check out their [website](https://storybook.js.org/) or [GitHub page](https://github.com/storybookjs/storybook).

</div>

# Installation

eCrowJS Storybook can be installed as an [npm package](https://www.npmjs.com/package/@ecrowjs/storybook) itself.

```sh
# Install with NPM
npm install @ecrowjs/storybook --save-dev
# Install with Yarn
yarn add @ecrowjs/storybook --dev
```

# Usage

eCrowJS Storybook will include files in your project's `src` folder that match the expression below:

```javascript
// Regular Expression
.chapter.tsx$
// Glob
*.chapter.tsx
```

In a chapter file, you can include the Story function from `@ecrowjs/storybook` package to add it to the application:

```javascript
// ReactJS Example
import Story from '@ecrowjs/storybook';
import React from 'react';
import MyComponent from './MyComponent';

Story('Name of Story').add('MyComponentChapter', () => {
  return <MyComponent />;
});
```

Finally, to run the storybook application in development mode, you can use the command:

```sh
$ ecrowjs-storybook
```

That's all there is to it.
