import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from 'components/Banner';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export default {
  title: 'Layout/Banner',
  component: Banner,

  parameters: {
    docs: {
      description: {
        component: 'Represents a portion of a document whose content is only indirectly related.',
      },
    },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => {
  return (
    <Banner
      icon={<InfoCircledIcon />}
      title={'Select any constituency to do the comparision and report card generation.'}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Bold = Template.bind({});
Bold.decorators = [
  () => (
    <Banner
      bold
      title="Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS) . Opening Balance (2020-21) . Odisha"
    />
  ),
];
