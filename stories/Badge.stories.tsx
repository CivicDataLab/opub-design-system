import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Flex } from '../components/Flex';
import { Badge } from '../components/Badge';
import { Box } from '../components/Box';
import { Status } from '../components/Status';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default {
  title: 'Layout/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'A layout component to add a badge.',
      },
    },
  },
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: ComponentStory<typeof Badge> = () => <Badge>Coming soon</Badge>;

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = {};
Size.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$3' }}>
      <Badge>Coming soon</Badge>
      <Badge size="2">Coming soon</Badge>
    </Flex>
  ),
];

export const Variant = Template.bind({});
Variant.args = {};
Variant.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$3', fw: 'wrap' }}>
      <Badge size="2" variant="red">
        <Box css={{ mr: 5 }}>
          <Status size="1" variant="red" />
        </Box>
        Live
      </Badge>
      <Badge size="2" variant="crimson">
        Approved
      </Badge>
      <Badge size="2" variant="pink">
        Pending
      </Badge>
      <Badge size="2" variant="purple">
        Failed
      </Badge>
    </Flex>
  ),
];

export const Interactive = Template.bind({});
Interactive.args = {};
Interactive.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$3', fw: 'wrap' }}>
      <Badge as="a" href="#" size="2" variant="red" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="crimson" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="pink" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="purple" interactive>
        Failed
        <Box css={{ ml: 5 }}>
          <CaretDownIcon />
        </Box>
      </Badge>
      <Badge as="button" size="2" variant="pink" interactive disabled>
        Disabled
      </Badge>
    </Flex>
  ),
];
