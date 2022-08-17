import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from 'components/Toggle';
import { FontItalicIcon } from '@radix-ui/react-icons';

export default {
  title: 'Primitive/Toggle',
  component: Toggle,
  argTypes: {
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
          'A two-state button that can be either on or off. <br /> [Radix UI Toggle](https://www.radix-ui.com/docs/primitives/components/toggle)',
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => {
  return (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon />
    </Toggle>
  );
};

export const Default = Template.bind({});
Default.args = {};
