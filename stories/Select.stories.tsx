import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from 'components/Select';

export default {
  title: 'Primitive/Select',
  component: Select,
  argTypes: {
    defaultValue: {
      control: {
        type: null,
      },
      table: { type: { summary: 'select value of an item for default selected item.' } },
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
          'Displays a list of options for the user to pick from—triggered by a button. <br /> [Radix UI Select](https://www.radix-ui.com/docs/primitives/components/select)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof SelectContent>;

const Template: ComponentStory<typeof SelectContent> = (args) => {
  return (
    <Select placeholder={args.placeholder}>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Banana</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="aubergine">Aubergine</SelectItem>
        <SelectItem value="broccoli">Broccoli </SelectItem>
        <SelectItem value="carrot" disabled>
          Carrot
        </SelectItem>
      </SelectGroup>
    </Select>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'choose...',
};
