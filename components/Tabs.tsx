import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,

  '&:focus-visible': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px currentColor, $boxShadowFocusSlim',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6',
  },
});

type TabsListPrimitiveProps = React.ComponentProps<typeof TabsPrimitive.List>;
type TabsListProps = TabsListPrimitiveProps & { css?: CSS };

export const TabsList = React.forwardRef<React.ElementRef<typeof StyledTabsList>, TabsListProps>(
  (props, forwardedRef) => (
    <>
      <StyledTabsList {...props} ref={forwardedRef} />
    </>
  )
);

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
  },

  '&:focus-visible': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px currentColor, $boxShadowFocusSlim',
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  outline: 'none',
  '&:focus-visible': { boxShadow: `0 0 0 2px black` },
});
