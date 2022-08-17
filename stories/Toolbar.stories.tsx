import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from 'components/Toolbar';

export default {
  title: 'Primitive/Toolbar',
  component: Toolbar,
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
          'A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus. <br /> [Radix UI Toolbar](https://www.radix-ui.com/docs/primitives/components/toolbar)',
      },
    },
  },
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = () => {
  return (
    <Toolbar aria-label="Formatting options">
      <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
        <ToolbarToggleItem value="bold" aria-label="Bold">
          <FontBoldIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic">
          <FontItalicIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
          <StrikethroughIcon />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <ToolbarToggleItem value="left" aria-label="Left aligned">
          <TextAlignLeftIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center" aria-label="Center aligned">
          <TextAlignCenterIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right" aria-label="Right aligned">
          <TextAlignRightIcon />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarLink href="#" target="_blank" css={{ marginRight: 10 }}>
        Edited 2 hours ago
      </ToolbarLink>
      <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
    </Toolbar>
  );
};

export const Default = Template.bind({});
Default.args = {};
