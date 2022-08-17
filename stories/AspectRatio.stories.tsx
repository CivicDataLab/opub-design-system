import React from 'react';
import { ComponentStory } from '@storybook/react';
import { AspectRatio } from '../components/AspectRatio';

export default {
  title: 'Primitive/Aspect Ratio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      table: {
        type: { summary: '1 | 16/9 | 4/3 | etc...' },
        defaultValue: { summary: '1' },
      },
      control: { type: null },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Displays content within a desired ratio. <br /> [Radix UI Aspect Ratio](https://www.radix-ui.com/docs/primitives/components/aspect-ratio)',
      },
    },
  },
};

const Template: ComponentStory<typeof AspectRatio> = (args) => (
  <div style={{ width: '300px' }}>
    <AspectRatio ratio={args.ratio || 1}>
      <img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photo by Tobias Tullius"
      />
    </AspectRatio>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  ratio: 16 / 9,
};
