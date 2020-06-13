import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const StoryInstances = {};

// Manager
function Story(name) {
  if (!(name in StoryInstances)) {
    StoryInstances[name] = storiesOf(name, module);
    StoryInstances[name].addDecorator((story, context) =>
      withInfo()(story)(context)
    );
    StoryInstances[name].addDecorator(withKnobs);
  }
  return StoryInstances[name];
}

export default Story;
