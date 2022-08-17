import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProgressBar } from '../components/ProgressBar';

export default {
  title: 'Primitive/Progress Bar',
  component: ProgressBar,
  argTypes: {
    variant: {
      control: {
        options: ['gray', 'blue', 'gradient'],
        type: 'select',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. <br /> [Radix UI Progress](https://www.radix-ui.com/docs/primitives/components/progress)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => {
  return <ProgressBar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: 50,
  variant: 'gray',
};

export const Intermediate = Template.bind({});
Intermediate.args = {};

export const Gradient = Template.bind({});
Gradient.args = {
  variant: 'gradient',
  value: 100,
};

export const Color = Template.bind({});
Color.args = {};
Color.decorators = [
  () => (
    <>
      <ProgressBar variant="blue" value={80} />
    </>
  ),
];
