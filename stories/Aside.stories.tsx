import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Aside } from 'components/Aside';
import { styled } from 'stitches.config';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export default {
  title: 'Primitive/Aside',
  component: Aside,

  parameters: {
    docs: {
      description: {
        component:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. <br /> [Radix UI Tooltip](https://www.radix-ui.com/docs/primitives/components/tooltip)',
      },
    },
  },
} as ComponentMeta<typeof Aside>;

const Title = styled('span', {
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.7,
});

const Template: ComponentStory<typeof Aside> = () => {
  return (
    <Aside
      title={
        <Title>Select any constituency to do the comparision and report card generation.</Title>
      }
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Icon = Template.bind({});
Icon.decorators = [
  () => (
    <Aside
      icon={<InfoCircledIcon />}
      title={
        <Title>Select any constituency to do the comparision and report card generation.</Title>
      }
    />
  ),
];
