import React from 'react';
import { styled } from '@stitches/react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 200,
  height: 225,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: '$boxShadow',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: '$scrollBackground',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$scrollBackgroundHover' },
  '&[data-orientation="vertical"]': { width: '$sizes$2' },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: '$sizes$2',
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$scrollBar',
  borderRadius: '$sizes$2',
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: '$scrollBackgroundHover',
});

// Exports
export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;
