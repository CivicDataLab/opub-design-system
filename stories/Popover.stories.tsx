import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '../components/Popover';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Badge } from '../components/Badge';
import { CaretDownIcon, Cross2Icon, MixerHorizontalIcon, VideoIcon } from '@radix-ui/react-icons';
import { Box } from '../components/Box';
import { IconButton } from '../components/IconButton';
import { violet } from '@radix-ui/colors';
import { styled } from 'stitches.config';

export default {
  title: 'Primitive/Popover',
  component: PopoverContent,
  parameters: {
    docs: {
      description: {
        component:
          'Displays rich content in a portal, triggered by a button. <br /> [Radix UI Popover](https://www.radix-ui.com/docs/primitives/components/popover)',
      },
    },
    source: {
      type: 'code',
    },
  },
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
  },
};

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

const Label = styled('label', {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Template: ComponentStory<typeof Popover> = () => (
  <Popover>
    <PopoverTrigger asChild>
      <IconButton aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </IconButton>
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex css={{ flexDirection: 'column', gap: 10 }}>
        <Text bold css={{ marginBottom: 10 }}>
          Dimensions
        </Text>
        <Fieldset>
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" />
        </Fieldset>
      </Flex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);

export const Primary = Template.bind({});
Primary.args = {};

export const HideArrow = Template.bind({});
HideArrow.args = {};
HideArrow.decorators = [
  () => (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent sideOffset={5} hideArrow>
        <Flex css={{ flexDirection: 'column', gap: 10 }}>
          <Text bold css={{ marginBottom: 10 }}>
            Dimensions
          </Text>
          <Fieldset>
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" />
          </Fieldset>
        </Flex>
        <PopoverClose aria-label="Close">
          <Cross2Icon />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
];
