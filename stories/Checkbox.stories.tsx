import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Flex } from '../components/Flex';
import { Checkbox } from '../components/Checkbox';
import { styled } from '../stitches.config';

export default {
  title: 'Primitive/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A control that allows the user to toggle between checked and not checked. <br /> [Radix UI Checkbox](https://www.radix-ui.com/docs/primitives/components/checkbox)',
      },
    },
  },
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

const Label = styled('label', {
  color: '$black',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});

const Template: ComponentStory<typeof Checkbox> = () => (
  <Flex css={{ alignItems: 'center' }}>
    <Checkbox defaultChecked id="c1" />
    <Label css={{ pl: 15 }} htmlFor="c1">
      Accept terms and conditions.
    </Label>
  </Flex>
);
export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = {};
Size.decorators = [
  () => (
    <Flex>
      <Checkbox css={{ mr: '$5' }} />
      <Checkbox size="2" css={{ mr: '$5' }} />
    </Flex>
  ),
];
