import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio, RadioGroup } from 'components/Radio';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Flex } from 'components/Flex';
import { styled } from 'stitches.config';
import { blackA, violet } from '@radix-ui/colors';
import { RadioCard, RadioCardGroup } from 'components/RadioCard';
import { Text } from 'components/Text';

export default {
  title: 'Primitive/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        options: ['1', '2'],
        type: 'radio',
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
  parameters: {
    docs: {
      description: {
        component:
          'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. <br /> [Radix UI Radio](https://www.radix-ui.com/docs/primitives/components/radio-group)',
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <RadioGroup defaultValue="1">
      <Radio {...args} />
    </RadioGroup>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = {};
Size.decorators = [
  () => (
    <RadioGroup style={{ display: 'flex', alignItems: 'center' }} defaultValue="1">
      <Radio value="1" css={{ mr: '$5' }} />
      <Radio value="2" size="2" css={{ mr: '$5' }} />
    </RadioGroup>
  ),
];

export const Card = Template.bind({});
Card.args = {};
Card.decorators = [
  () => (
    <RadioCardGroup defaultValue="1" css={{ maxWidth: '650px' }}>
      <RadioCard value="1" css={{ mb: '$2' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray">
            -$1600
          </Text>
        </Flex>
      </RadioCard>
      <RadioCard value="2" css={{ mb: '$2' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray">
            -$800
          </Text>
        </Flex>
      </RadioCard>
      <RadioCard value="3" css={{ mb: '$2' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray"></Text>
        </Flex>
      </RadioCard>
    </RadioCardGroup>
  ),
];

const CustomStyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: violet.violet11,
  },
});

const CustomStyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${blackA.blackA10}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const Label = styled('label', {
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15,
});

export const Custom = Template.bind({});
Custom.args = {};
Custom.decorators = [
  () => (
    <RadioGroup defaultValue="default" aria-label="View density">
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <CustomStyledRadio value="default" id="r1">
          <CustomStyledIndicator />
        </CustomStyledRadio>
        <Label htmlFor="r1">Default</Label>
      </Flex>
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <CustomStyledRadio value="comfortable" id="r2">
          <CustomStyledIndicator />
        </CustomStyledRadio>
        <Label htmlFor="r2">Default</Label>
      </Flex>
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <CustomStyledRadio value="compact" id="r3">
          <CustomStyledIndicator />
        </CustomStyledRadio>
        <Label htmlFor="r3">Comfortable</Label>
      </Flex>
    </RadioGroup>
  ),
];
