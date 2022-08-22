import { keyframes, styled } from '../stitches.config';

const DEFAULT_TAG = 'button';

const loadingSpinner = keyframes({
  from: { transform: 'rotate(0turn)' },
  to: { transform: 'rotate(1turn)' },
});

export const Button = styled(DEFAULT_TAG, {
  // Reset
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1.5',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: 'fit-content',
  px: '$5',
  py: '$12',
  fontFamily: '$primary',
  fontWeight: 600,
  fontVariantNumeric: 'tabular-nums',
  borderRadius: '2px',
  transition:
    'background-color 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s',

  '&:disabled': {
    backgroundColor: '$slate3',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      compact: {
        px: '$3',
        py: '$1',
        fontSize: '0.875rem',
        lineHeight: '1.7',
      },
      default: {
        px: '$5',
        py: '$12',
      },
      none: {
        p: '0',
        lineHeight: '1.5',
      },
    },
    variant: {
      'subtle-link': {
        background: 'none',
        fontWeight: 500,
        '@hover': {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        '&:focus-visible': {
          textDecoration: 'underline',
        },
      },
      link: {
        background: 'none',
        fontWeight: 500,
        color: '$blue10',
        '@hover': {
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        '&:focus-visible': {
          textDecoration: 'underline',
        },
      },
      default: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: 'hsl(36 16.0% 20.0%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slate4',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
      },
      primary: {
        backgroundColor: '$primary',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primaryHover',
            boxShadow: 'inset 0 0 0 1px $primaryHover',
          },
        },
        '&:active': {
          backgroundColor: '$primaryActive',
          boxShadow: 'inset 0 0 0 1px $primaryActive',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 2px $colors$green7, 0 0 0 2px $colors$green7',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$colors$green7',
            boxShadow: 'inset 0 0 0 2px $colors$green7',
          },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondaryHover',
            boxShadow: 'inset 0 0 0 1px $secondaryHover',
          },
        },
        '&:active': {
          backgroundColor: '$secondaryActive',
          boxShadow: 'inset 0 0 0 1px $secondaryActive',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 2px $colors$amber7, 0 0 0 2px $colors$amber7',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$colors$amber7',
            boxShadow: 'inset 0 0 0 2px $colors$amber7',
          },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$primary',
        boxShadow: 'inset 0 0 0 2px $colors$primary',
        '@hover': {
          '&:hover': {
            backgroundColor: '$green2',
          },
        },
        '&:active': {
          backgroundColor: '$green4',
          boxShadow: 'inset 0 0 0 2px $colors$primary',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 2px $colors$green7, 0 0 0 2px $colors$green7',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$colors$green7',
            boxShadow: 'inset 0 0 0 2px $colors$green7',
          },
      },
      'secondary-outline': {
        backgroundColor: 'transparent',
        color: '$secondary',
        boxShadow: 'inset 0 0 0 2px $colors$secondary',
        '@hover': {
          '&:hover': {
            backgroundColor: '$amber2',
          },
        },
        '&:active': {
          backgroundColor: '$amber4',
          boxShadow: 'inset 0 0 0 2px $colors$secondary',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 2px $colors$amber7, 0 0 0 2px $colors$amber7',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$colors$amber7',
            boxShadow: 'inset 0 0 0 2px $colors$amber7',
          },
      },
      subtle: {
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$slateA4',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA4',
            boxShadow: 'none',
          },
      },
    },
    state: {
      selected: {
        backgroundColor: '$primaryActive',
        boxShadow: 'inset 0 0 0 1px $colors$primaryActive',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primaryActive',
            boxShadow: 'inset 0 0 0 1px $primaryActive',
          },
        },
        '&:active': {
          backgroundColor: '$primaryActive',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 2px $colors$green7, 0 0 0 2px $colors$green7',
        },
      },
      loading: {
        position: 'relative',
        pointerEvents: 'none',
        color: 'transparent',
        '&::after': {
          content: '',
          position: 'absolute',
          width: '16px',
          height: '16px',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          border: '4px solid transparent',
          'border-top-color': '$hiContrast',
          'border-radius': '50%',
          animation: `${loadingSpinner} 1s ease infinite`,
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'secondary',
      state: 'selected',
      css: {
        backgroundColor: '$secondaryActive',
        boxShadow: 'inset 0 0 0 1px $colors$secondaryActive',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondaryActive',
            boxShadow: 'inset 0 0 0 1px $secondaryActive',
          },
        },
        '&:focus-visible': {
          boxShadow: 'inset 0 0 0 2px $colors$amber7, 0 0 0 2px $colors$amber7',
        },
      },
    },
    {
      variant: 'secondary-outline',
      state: 'loading',
      css: {
        '&::after': {
          'border-top-color': '$secondary',
        },
      },
    },
    {
      variant: 'outline',
      state: 'loading',
      css: {
        '&::after': {
          'border-top-color': '$primary',
        },
      },
    },
    {
      variant: 'primary',
      state: 'loading',
      css: {
        '&::after': {
          'border-top-color': '$loContrast',
        },
      },
    },
    {
      variant: 'secondary',
      state: 'loading',
      css: {
        '&::after': {
          'border-top-color': '$loContrast',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});
