import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { styled } from 'stitches.config';
import { mauve, violet } from '@radix-ui/colors';
import { Separator } from 'components/Separator';

export default {
  title: 'Primitive/Separator',
  component: Separator,
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
          'Augments native scroll functionality for custom, cross-browser styling. <br /> [Radix UI Scroll Area](https://www.radix-ui.com/docs/primitives/components/scroll-area)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Separator>;

const Box = styled('div', {});
const Text = styled('div', {
  // color: violet.violet11,
  fontSize: 15,
  lineHeight: '18px',
  fontWeight: 500,
});

const Flex = styled('div', { display: 'flex' });

const Template: ComponentStory<typeof Separator> = (args) => {
  return (
    <Box css={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
      <Text css={{ fontWeight: 500 }}>Radix Primitives</Text>
      <Text>An open-source UI component library.</Text>
      <Separator css={{ margin: '15px 0' }} />
      <Flex css={{ height: 20, alignItems: 'center' }}>
        <Text>Blog</Text>
        <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
        <Text>Docs</Text>
        <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
        <Text>Source</Text>
      </Flex>
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
