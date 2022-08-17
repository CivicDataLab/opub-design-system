import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '../components/Dialog';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import { IconButton } from 'components/IconButton';
import { Cross2Icon } from '@radix-ui/react-icons';
import { styled } from 'stitches.config';

export default {
  title: 'Primitive/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. <br /> [Radix UI Dialog](https://www.radix-ui.com/docs/primitives/components/dialog)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const StyledIconButton = styled(IconButton, {
  position: 'absolute',
  top: 10,
  right: 10,
});

const Template: ComponentStory<typeof Dialog> = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
        Dialog Heading
      </Text>
      <Text size="3" as="p" css={{ lineHeight: '25px' }}>
        There are 5 variants to choose from. Use is for positive states. This is a link Traditional
        business literature won’t help you solve it- most of that stuff is focused on life after
        product/market fit, after the Trough of Sorrow.
      </Text>
      <DialogClose asChild>
        <StyledIconButton aria-label="Close">
          <Cross2Icon />
        </StyledIconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export const Primary = Template.bind({});
Primary.args = {};
