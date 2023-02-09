import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ActiveLink from './ActiveLink';

export default {
  title: 'Example/ActiveLink',
  component: ActiveLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ActiveLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActiveLink> = (args) => <ActiveLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  href: '/tentang-kami',
  activeClassName: 'active',
  children: <div>Test</div>,
  className: 'btn btn-danger'
};

Template.parameters = {
  nextRouter: {
    path: "/tentang-kami"
  },
}