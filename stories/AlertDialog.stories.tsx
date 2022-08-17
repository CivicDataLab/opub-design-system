import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/AlertDialog';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';

export default {
  title: 'Primitive/Alert Dialog',
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog that interrupts the user with important content and expects a response.. <br /> [Radix UI Alert Dialog](https://www.radix-ui.com/docs/primitives/components/alert-dialog)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Delete account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </AlertDialogDescription>
      <Flex css={{ justifyContent: 'flex-end' }}>
        <AlertDialogCancel asChild>
          <Button variant="gray" css={{ marginRight: 25 }}>
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="red">Yes, delete account</Button>
        </AlertDialogAction>
      </Flex>
    </AlertDialogContent>
  </AlertDialog>
);

export const Primary = Template.bind({});
Primary.args = {};
