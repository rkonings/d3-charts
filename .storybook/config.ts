import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}
addDecorator(withKnobs);
configure(loadStories, module);
