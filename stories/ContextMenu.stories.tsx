import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from '../stitches.config';
import { mauve } from '@radix-ui/colors';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuItemIndicator,
} from '../components/ContextMenu';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import { Flex } from 'components/Flex';

export default {
  title: 'Primitive/ContextMenu',
  component: ContextMenu,
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
          'Displays a menu located at the pointer, triggered by a right-click or a long-press. <br /> [Radix UI ContextMenu](https://www.radix-ui.com/docs/primitives/components/context-menu)',
      },
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof ContextMenu>;

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve11,
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 },
});

const Template: ComponentStory<typeof ContextMenu> = (args) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: '$9',
              bc: '$slate2',
              border: '2px dashed $colors$slate6',
              br: '$2',
            }}
          >
            <span>Right click here.</span>
          </Flex>
        </ContextMenuTrigger>
        <ContextMenuContent sideOffset={5} align="end">
          <ContextMenuItem>
            Back <RightSlot>⌘+[</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Foward <RightSlot>⌘+]</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload <RightSlot>⌘+R</RightSlot>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
              <ContextMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut…</ContextMenuItem>
              <ContextMenuItem>Name Window…</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
