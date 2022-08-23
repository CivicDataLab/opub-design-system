import React from 'react';
import { styled } from '@stitches/react';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: '$backgroundLighter',
  color: '$textLightHigh',
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$boxShadow',
  '&:hover': { backgroundColor: '$backgroundLightHover' },
  '&[data-state=on]': { backgroundColor: '$backgroundDarkA' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
export const Toggle = StyledToggle;
