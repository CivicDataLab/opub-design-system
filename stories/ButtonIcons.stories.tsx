import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Box } from '../components/Box';
import { ArrowRightIcon, PlusIcon } from '@radix-ui/react-icons';
import { styled } from 'stitches.config';

export default {
  title: 'Actions/Button Icon',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons allow users to take actions, and make choices, with a single tap.',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: null,
      },
      table: { type: { summary: 'compact | default' }, defaultValue: { summary: 'default' } },
    },
    variant: {
      control: {
        type: null,
      },
      table: {
        type: {
          summary:
            'primary | secondary | outline | default | secondary-outline | subtle | link | subtle-link',
        },
        defaultValue: { summary: 'default' },
      },
    },
    state: {
      control: {
        type: null,
      },
      table: {
        type: { summary: 'active | loading' },
      },
    },
    disabled: {
      control: {
        type: null,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: {
        type: null,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    as: {
      table: {
        type: { summary: 'a | span' },
      },
      description: 'changes the type of component, eg:',
      type: { required: false },
      control: {
        type: null,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

const FlexBox = styled('div', {
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  alignItems: 'center',
});

const Template: ComponentStory<typeof Button> = () => (
  <Button variant="primary">
    Button
    <Box css={{ ml: '$2' }}>
      <ArrowRightIcon />
    </Box>
  </Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Direction = Template.bind({});
Direction.decorators = [
  () => (
    <FlexBox>
      <Button variant="primary">
        Button
        <Box css={{ ml: '$2' }}>
          <ArrowRightIcon />
        </Box>
      </Button>

      <Button variant="primary">
        <Box css={{ mr: '$2' }}>
          <PlusIcon />
        </Box>
        Button
      </Button>
    </FlexBox>
  ),
];

export const IconOnly = Template.bind({});
IconOnly.decorators = [
  () => (
    <FlexBox>
      <IconButton size="2" aria-label="Right arrow">
        <ArrowRightIcon />
      </IconButton>
    </FlexBox>
  ),
];
