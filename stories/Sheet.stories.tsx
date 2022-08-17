import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sheet, SheetTrigger, SheetContent } from '../components/Sheet';
import { Button } from '../components/Button';

export default {
  title: 'Actions/Sheet',
  component: SheetContent,
  parameters: {
    docs: {
      description: {
        component:
          "A composite component build using Dialog. <br /> Since it's similar to Dialog component, we can use same props: [Radix UI Dialog](https://www.radix-ui.com/docs/primitives/components/dialog)",
      },
    },
  },
  argTypes: {
    side: {
      control: { type: null },
      table: {
        type: { summary: 'top | bottom | left | right' },
        defaultValue: { summary: 'right' },
      },
    },
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

const Template: ComponentStory<typeof SheetContent> = (args) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent {...args}></SheetContent>
  </Sheet>
);

export const Default = Template.bind({});
Default.args = {};

export const Direction = Template.bind({});
Direction.decorators = [
  () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        placeContent: 'center',
      }}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button>Top</Button>
        </SheetTrigger>
        <SheetContent side="top"></SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom"></SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Left</Button>
        </SheetTrigger>
        <SheetContent side="left"></SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Right</Button>
        </SheetTrigger>
        <SheetContent side="right"></SheetContent>
      </Sheet>
    </div>
  ),
];
