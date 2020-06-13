// Type definitions for @ecrowjs/storybook
// Project: eCrow Storybook
// Definitions by: Eric Crowell <https://github.com/eric-crowell>

// TODO: Lame declarations. Good enough for now. Make it into a build later.

declare const StoryInstances: { [key: string]: any };

declare function Story(name: string): StoryInstances[name] {
  /* ... */
};

export = Story;
