import React from 'react';
import { styled } from '@stitches/react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: '$backgroundLighter',
  borderRadius: 4,
  boxShadow: '$boxShadow',
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  color: '$textLightHigh',
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover': { backgroundColor: '$backgroundLightHover' },
  '&[data-state=on]': { backgroundColor: '$backgroundDarkA' },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;
