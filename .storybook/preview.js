import '../styles.css';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    transformSource: (input) =>
      prettier.format(input, {
        parser: 'babel',
        plugins: [prettierBabel],
      }),
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff6f6',
      },
      {
        name: 'dark',
        value: '#121212',
      },
    ],
  },
};
