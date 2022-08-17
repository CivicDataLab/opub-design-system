import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextAlignCenterIcon, TextAlignLeftIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import { ToggleGroup, ToggleGroupItem } from 'components/ToggleGroup';

export default {
  title: 'Primitive/Toggle Group',
  component: ToggleGroup,
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
          'A set of two-state buttons that can be toggled on or off. <br /> [Radix UI Toggle Group](https://www.radix-ui.com/docs/primitives/components/toggle-group)',
      },
    },
  },
} as ComponentMeta<typeof ToggleGroup>;

const Template: ComponentStory<typeof ToggleGroup> = () => {
  return (
    <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export const Default = Template.bind({});
Default.args = {};
