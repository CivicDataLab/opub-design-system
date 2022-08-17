import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { styled } from 'stitches.config';
import { Switch } from 'components/Switch';

export default {
  title: 'Primitive/Switch',
  component: Switch,
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
    size: {
      control: {
        options: ['1', '2'],
        type: 'radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A control that allows the user to toggle between checked and not checked. <br /> [Radix UI Switch](https://www.radix-ui.com/docs/primitives/components/Switch)',
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Flex = styled('div', { display: 'flex' });

const Template: ComponentStory<typeof Switch> = (args) => {
  return <Switch {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};

const Label = styled('label', {
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});

export const Demo = Template.bind({});
Demo.args = {};
Demo.decorators = [
  () => (
    <Flex css={{ alignItems: 'center' }}>
      <Label htmlFor="s1" css={{ paddingRight: 15 }}>
        Airplane mode
      </Label>
      <Switch defaultChecked id="s1" />
    </Flex>
  ),
];
