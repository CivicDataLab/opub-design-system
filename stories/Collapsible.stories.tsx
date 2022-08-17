import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components/Text';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/Collapsible';
import { IconButton } from '../components/IconButton';
import { RowSpacingIcon } from '@radix-ui/react-icons';
import { styled } from '../stitches.config';
import { blackA } from '@radix-ui/colors';

export default {
  title: 'Primitive/Collapsible',
  component: Collapsible,
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
          'An interactive component which expands/collapses a panel. <br /> [Radix UI Collapsible](https://www.radix-ui.com/docs/primitives/components/collapsible)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Collapsible>;

const Repository = styled('div', {
  backgroundColor: 'white',
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const Template: ComponentStory<typeof Collapsible> = (args) => {
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <IconButton>{<RowSpacingIcon />}</IconButton>
        </CollapsibleTrigger>

        <Repository>
          <Text>@radix-ui/primitives</Text>
        </Repository>

        <CollapsibleContent>
          <Repository>
            <Text>@radix-ui/colors</Text>
          </Repository>
          <Repository>
            <Text>@stitches/react</Text>
          </Repository>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
