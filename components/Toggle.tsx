import React from 'react';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { FontItalicIcon } from '@radix-ui/react-icons';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: violet.violet3,
  color: mauve.mauve11,
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet4 },
  '&[data-state=on]': { backgroundColor: violet.violet6, color: violet.violet12 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
export const Toggle = StyledToggle;
