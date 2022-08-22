import React, { ReactNode } from 'react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { styled } from '../stitches.config';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  color: violet.violet11,
  boxShadow: '$boxShadow',
  '&:hover': { backgroundColor: mauve.mauve3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-placeholder]': { color: violet.violet9 },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: violet.violet11,
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default',
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

// Exports
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

// Abstracting the component
type ContentProps = {
  children?: ReactNode;
};
type Selectariants = React.ComponentProps<typeof SelectPrimitive.Content>;
type AlertDialogContentProps = Selectariants & ContentProps;

function Content({ children, ...props }: AlertDialogContentProps) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

type SelectItemVariants = React.ComponentProps<typeof StyledItem>;
type SelectItemContentProps = SelectItemVariants;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof StyledItem>,
  SelectItemContentProps
>(({ children, ...props }: SelectItemContentProps, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator>
        <CheckIcon />
      </SelectItemIndicator>
    </StyledItem>
  );
});

type SelectProps = {
  placeholder?: string;
};
type SelectVariants = React.ComponentProps<typeof SelectPrimitive.Root>;
type SelectContentProps = SelectVariants & SelectProps;

export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectContentProps
>(({ children, placeholder, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectTrigger ref={forwardedRef}>
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>{children}</SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPrimitive.Root>
  );
});
