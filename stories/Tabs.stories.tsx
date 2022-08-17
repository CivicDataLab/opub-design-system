import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/Tabs';
import { styled } from 'stitches.config';
import { mauve, violet } from '@radix-ui/colors';
import { Flex } from 'components/Flex';
import { Button } from 'components/Button';
import { Box } from 'components/Box';
import { Separator } from 'components/Separator';

export default {
  title: 'Primitive/Tabs',
  component: Tabs,
  argTypes: {
    // defaultValue: {
    //   control: {
    //     options: [[10], [40], [100]],
    //     type: 'radio',
    //   },
    // },
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
          'A set of layered sections of content—known as tab panels—that are displayed one at a time. <br /> [Radix UI Tabs](https://www.radix-ui.com/docs/primitives/components/tabs)',
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const Label = styled('label', {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: violet.violet12,
  display: 'block',
});

const Input = styled('input', {
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled('div', {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <Box css={{ maxWidth: '420px' }}>
      <Tabs defaultValue="tab1" {...args}>
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
        </TabsList>
        {args.orientation && args.orientation != 'vertical' && <Separator />}
        <TabsContent value="tab1">
          <Text>Make changes to your account here. Click save when you're done.</Text>
          <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
            <Button variant="green">Save changes</Button>
          </Flex>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Change your password here. After saving, you'll be logged out.</Text>
          <Fieldset>
            <Label htmlFor="currentPassword">Current password</Label>
            <Input id="currentPassword" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="newPassword">New password</Label>
            <Input id="newPassword" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" type="password" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
            <Button variant="green">Change password</Button>
          </Flex>
        </TabsContent>
      </Tabs>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
