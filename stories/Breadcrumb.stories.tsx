import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadCrumbs, BreadCrumbsItems } from 'components/Breadcrumb';

export default {
  title: 'Primitive/Breadcrumb',
  component: BreadCrumbs,
  argTypes: {
    icon: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
      },
    },
  },
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => {
  return (
    <BreadCrumbs>
      <BreadCrumbsItems href="#">Home</BreadCrumbsItems>
      <BreadCrumbsItems href="#">Odisha</BreadCrumbsItems>
    </BreadCrumbs>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Chevron = Template.bind({});
Chevron.decorators = [
  () => (
    <BreadCrumbs icon="chevron">
      <BreadCrumbsItems href="#">Home</BreadCrumbsItems>
      <BreadCrumbsItems href="#">Odisha</BreadCrumbsItems>
    </BreadCrumbs>
  ),
];
