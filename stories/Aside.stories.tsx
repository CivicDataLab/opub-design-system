import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Aside } from 'components/Aside';

export default {
  title: 'Layout/Aside',
  component: Aside,

  parameters: {
    docs: {
      description: {
        component: 'Represents a portion of a document whose content is only indirectly related.',
      },
    },
  },
} as ComponentMeta<typeof Aside>;

const Template: ComponentStory<typeof Aside> = () => {
  return (
    <Aside
      title={
        <p>
          <strong>MGNREGS</strong> aims to enhance livelihood security of the rural masses with a
          provision of at least 100 days of wage employment in a financial year to every rural
          household whose adult member volunteers to do unskilled manual work. This is one of the
          world’s largest public sector employment programmes, providing guaranteed income through
          employment.
        </p>
      }
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
