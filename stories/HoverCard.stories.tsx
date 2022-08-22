import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from '../stitches.config';
import { mauve } from '@radix-ui/colors';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/HoverCard';

export default {
  title: 'Primitive/Hover Card',
  component: HoverCard,
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
  parameters: {
    docs: {
      description: {
        component:
          'For sighted users to preview content available behind a link. <br /> [Radix UI Hover Card](https://www.radix-ui.com/docs/primitives/components/hover-card)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof HoverCard>;

// Your app...
const Flex = styled('div', { display: 'flex' });

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const Template: ComponentStory<typeof HoverCardContent> = (args) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <ImageTrigger href="https://twitter.com/radix_ui" target="_blank" rel="noreferrer noopener">
          <Img src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" />
        </ImageTrigger>
      </HoverCardTrigger>
      <HoverCardContent sideOffset={5} arrow={args.arrow}>
        <Flex css={{ flexDirection: 'column', gap: 7 }}>
          <Img
            size="large"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          />
          <Flex css={{ flexDirection: 'column', gap: 15 }}>
            <Text>
              <Text bold>Radix</Text>
              <Text faded>@radix_ui</Text>
            </Text>
            <Text>
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </Text>
            <Flex css={{ gap: 15 }}>
              <Flex css={{ gap: 5 }}>
                <Text bold>0</Text> <Text faded>Following</Text>
              </Flex>
              <Flex css={{ gap: 5 }}>
                <Text bold>2,900</Text> <Text faded>Followers</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </HoverCardContent>
    </HoverCard>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  arrow: true,
};

export const NoArrow = Template.bind({});
Primary.args = {
  arrow: false,
};
