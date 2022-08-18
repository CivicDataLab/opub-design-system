import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadCrumbs, BreadCrumbsItems } from 'components/Breadcrumb';

export default {
  title: 'Layout/Breadcrumb',
  component: BreadCrumbs,
  argTypes: {
    icon: {
      control: {
        type: null,
      },
    },
    'aria-current="page"': {
      control: {
        type: null,
      },
      table: { type: { summary: 'add aria-current="page" to mark the item as current page.' } },
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
      <BreadCrumbsItems aria-current="page" href="#">
        Odisha
      </BreadCrumbsItems>
    </BreadCrumbs>
  ),
];
