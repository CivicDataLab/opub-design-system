import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'components/ScrollArea';
import { styled } from 'stitches.config';
import { mauve, violet } from '@radix-ui/colors';

export default {
  title: 'Primitive/Scroll Area',
  component: ScrollArea,
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
} as ComponentMeta<typeof ScrollArea>;

const Box = styled('div', {});
const Text = styled('div', {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: '18px',
  fontWeight: 500,
});
const Tag = styled('div', {
  color: mauve.mauve12,
  fontSize: 13,
  lineHeight: '18px',
  marginTop: 10,
  borderTop: `1px solid ${mauve.mauve6}`,
  paddingTop: 10,
});

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const Template: ComponentStory<typeof ScrollArea> = (args) => {
  return (
    <ScrollArea>
      <ScrollAreaViewport css={{ backgroundColor: 'white' }}>
        <Box style={{ padding: '15px 20px' }}>
          <Text>Tags</Text>
          {TAGS.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Box>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      {/* <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner /> */}
    </ScrollArea>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
