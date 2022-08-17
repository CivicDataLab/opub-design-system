import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlusIcon } from '@radix-ui/react-icons';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/Tooltip';
import { IconButton } from 'components/IconButton';

export default {
  title: 'Primitive/Tooltip',
  component: Tooltip,
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
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. <br /> [Radix UI Tooltip](https://www.radix-ui.com/docs/primitives/components/tooltip)',
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton variant="raised">
            <PlusIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
