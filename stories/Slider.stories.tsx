import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from 'components/Slider';

export default {
  title: 'Primitive/Slider',
  component: Slider,
  argTypes: {
    defaultValue: {
      control: {
        options: [[10], [40], [100]],
        type: 'radio',
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
    as: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'An input where the user selects a value from within a given range. <br /> [Radix UI Slider](https://www.radix-ui.com/docs/primitives/components/slider)',
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  return <Slider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: [45],
};

export const Range = Template.bind({});
Range.args = {
  defaultValue: [25, 75],
};

export const Vertical = Template.bind({});
Vertical.args = {
  defaultValue: [50],
  orientation: 'vertical',
  css: { height: 150 },
};
