import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar, AvatarGroup, AvatarNestedItem } from '../components/Avatar';
import { Flex } from '../components/Flex';
import { Popover, PopoverContent, PopoverTrigger } from '../components/Popover';
import { Text } from '../components/Text';
import { Box } from '../components/Box';

export default {
  title: 'Primitive/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'An image element with a fallback for representing the user. <br /> [Radix UI Avatar](https://www.radix-ui.com/docs/primitives/components/avatar)',
      },
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

const Template: ComponentStory<typeof Avatar> = () => (
  <Avatar
    size="3"
    alt="John Smith"
    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
    fallback="J"
  />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Size = Template.bind({});
Size.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$6' }}>
      <Avatar size="1" alt="John Smith" src="" fallback="J" />

      <Avatar
        size="2"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
        fallback="J"
      />

      <Avatar
        size="3"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
        fallback="J"
      />

      <Avatar
        size="4"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
        fallback="J"
      />

      <Avatar
        size="5"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
        fallback="J"
      />

      <Avatar
        size="6"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
        fallback="J"
      />
    </Flex>
  ),
];

export const Color = Template.bind({});
Color.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$6' }}>
      <Avatar alt="John Smith" variant="red" fallback="J" />

      <Avatar alt="John Smith" variant="pink" fallback="J" />

      <Avatar alt="John Smith" variant="violet" fallback="J" />

      <Avatar alt="John Smith" variant="teal" fallback="J" />

      <Avatar alt="John Smith" variant="green" fallback="J" />

      <Avatar alt="John Smith" variant="hiContrast" fallback="J" />
    </Flex>
  ),
];

export const Interactive = Template.bind({});
Interactive.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$6' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar interactive fallback="J" />
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use a lot. With
            horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Avatar
            interactive
            fallback="J"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
          />
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$3' }}>
          <Text size="2" css={{ lineHeight: '18px' }}>
            The other main improvement is with tables, which we'll probably use a lot. With
            horizontal overflow on small devices and when zoomed in.
          </Text>
        </PopoverContent>
      </Popover>
    </Flex>
  ),
];

export const Inactive = Template.bind({});
Inactive.decorators = [
  () => (
    <Flex css={{ ai: 'center', gap: '$6' }}>
      <Avatar
        size="3"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
        fallback="J"
        inactive
      />

      <Avatar size="3" alt="John Smith" fallback="J" inactive />
    </Flex>
  ),
];

export const Grouped = Template.bind({});
Grouped.decorators = [
  () => (
    <Flex css={{ gap: '$2' }}>
      <AvatarGroup>
        <AvatarNestedItem>
          <Avatar
            size="3"
            alt="John Smith"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&dpr=2&q=80"
            fallback="J"
          />
        </AvatarNestedItem>
        <AvatarNestedItem>
          <Avatar
            size="3"
            alt="John Smith"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="J"
          />
        </AvatarNestedItem>
      </AvatarGroup>
      <AvatarGroup>
        <AvatarNestedItem>
          <Avatar size="3" alt="John Smith" fallback="A" variant="blue" />
        </AvatarNestedItem>
        <AvatarNestedItem>
          <Avatar size="3" alt="John Smith" fallback="S" variant="crimson" />
        </AvatarNestedItem>
      </AvatarGroup>
    </Flex>
  ),
];

export const Status = Template.bind({});
Status.decorators = [
  () => (
    <Flex css={{ gap: '$2' }}>
      <Box
        css={{
          position: 'relative',
        }}
      >
        <Avatar
          alt="John Smith"
          src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
          fallback="J"
        />

        <Box
          as="span"
          css={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            boxShadow: '0 0 0 3px $colors$loContrast',
            borderRadius: '$round',
            mr: '-3px',
            mb: '-3px',
          }}
        >
          <Status size="2" variant="gray"></Status>
        </Box>
      </Box>
    </Flex>
  ),
];
