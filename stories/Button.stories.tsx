import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';
import { styled } from 'stitches.config';

export default {
  title: 'Actions/Button',
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
        type: 'radio',
        options: ['compact', 'default'],
      },
      table: { type: { summary: 'compact | default' }, defaultValue: { summary: 'default' } },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'subtle',
          'outline',
          'secondary-outline',
          'link',
          'subtle-link',
          'default',
        ],
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
        type: 'select',
        options: ['active', 'loading', 'null'],
      },
      table: {
        type: { summary: 'active | loading' },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
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
        type: 'string',
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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.parameters = {
  docs: {
    description: {
      story:
        'Buttons can have various sizes. Default size is used for most use cases, compact for tables and none for breadcrumbs.',
    },
  },
};
Size.decorators = [
  () => (
    <FlexBox>
      <Button size="compact">Compact</Button>
      <Button>Default</Button>
      <Button size="none" variant="subtle-link">
        None
      </Button>
    </FlexBox>
  ),
];

export const Variant = Template.bind({});
Variant.decorators = [
  () => (
    <FlexBox>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="link">Link</Button>
      <Button variant="subtle-link">Subtle Link</Button>
    </FlexBox>
  ),
];

export const State = Template.bind({});
State.decorators = [
  () => (
    <FlexBox>
      <Button state="selected">Selected</Button>
      <Button variant="secondary" state="selected">
        Selected
      </Button>
      <Button state="loading" variant="primary">
        Waiting
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </FlexBox>
  ),
];

export const Width = Template.bind({});
Width.decorators = [
  () => (
    <FlexBox>
      <Button variant="primary" fullWidth>
        Full Width
      </Button>
    </FlexBox>
  ),
];
