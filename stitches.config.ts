import { createStitches } from '@stitches/react';
import {
  gray,
  mauve,
  slate,
  blue,
  green,
  amber,
  whiteA,
  blackA,
  slateDark,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...mauve,
        ...slate,
        ...blue,
        ...green,
        ...amber,

        ...whiteA,
        ...blackA,

        hiContrast: '$slate12',
        loContrast: 'white',
        canvas: 'hsl(0 0% 93%)',
        panel: 'white',
        transparentPanel: 'hsl(0 0% 0% / 97%)',
        shadowLight: 'hsl(206 22% 7% / 35%)',
        shadowDark: 'hsl(206 22% 7% / 20%)',

        primary: '#28A062',
        primaryHover: '#238E57',
        primaryActive: '#1D7548',

        secondary: '#E9B840',
        secondaryHover: '#CEA338',
        secondaryActive: '#AA862E',

        // -----------------------------
        backgroundLighter: '#FFFFFF',
        backgroundLight: '#EBF0EE',
        backgroundLightHover: '$mauve3',
        backgroundDark: '#2D523F',
        backgroundDarkA: '#2D523F50',
        backgroundDarker: '#172920',

        // scroll
        scrollBar: '$mauve10',
        scrollBackground: '$blackA6',
        scrollBackgroundHover: '$blackA8',

        // form
        formBoundary: '$slate7',
        formHover: '$slate8',
        formFocus: '$blue8',
        formSelected: '$blue9',

        separator: '$textLightDisabled',

        // text-background-foreground
        textLightHigh: 'rgba(0, 0, 0, 0.9)',
        textLightMedium: 'rgba(0, 0, 0, 0.6)',
        textLightLight: 'rgba(0, 0, 0, 0.32)',
        textLightDisabled: 'rgba(0, 0, 0, 0.16)',

        textDarkHigh: 'rgba(255, 255, 255, 0.9)',
        textDarkMedium: 'rgba(255, 255, 255, 0.72)',
        textDarkLight: 'rgba(255, 255, 255, 0.36)',
        textDarkDisabled: 'rgba(255, 255, 255, 0.16)',

        // Semantic
        semanticInfo: '#317EB9',
        semanticSuccess: '#33835A',
        semanticWarning: '##D7AA3B',
        semanticError: '#CD503D',

        bgOverlay: 'rgba(0, 0, 0, 0.44)',

        breadcrumbs: '#888F8B',
        breadcrumbsActive: '$hiContrast',

        asideBg: '$backgroundLighter',
        bannerBg: '$backgroundLight',
        // animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      fonts: {
        primary: 'Inter, -apple-system, system-ui, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      shadows: {
        boxShadow: '0 2px 10px $colors$blackA7',
        boxShadowFocus: '0 0 0 2px #0D331F',
        boxShadowFocusSlim: '0 0 0 1px #0D331F',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '20px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '80px',
        12: '12px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '20px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '80px',
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
        4: '20px',
        5: '24px',
        6: '32px',
        7: '40px',
        8: '48px',
        9: '64px',
      },
      fontWeights: {
        1: 400,
        2: 500,
        3: 600,
        4: 700,
        5: 800,
        6: 900,
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),

      ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

      fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
      fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

      ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
      ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
      jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
      as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
      fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
      fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
      fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

      bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),

      br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
      }),

      bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

      lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

      ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
      oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

      pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
      us: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),

      appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...slateDark,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});
