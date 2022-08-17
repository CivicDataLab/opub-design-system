import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'components/Toast';
import { Button } from 'components/Button';

export default {
  title: 'Primitive/Toast',
  component: Toast,
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
          'A succinct message that is displayed temporarily. <br /> [Radix UI Toast](https://www.radix-ui.com/docs/primitives/components/toast)',
      },
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof ToastProvider> = (args) => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </Button>

      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button variant="green" size="sm">
            Undo
          </Button>
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}
