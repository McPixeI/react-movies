import { themes } from '@storybook/theming'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#333' },
    light: { ...themes.normal, appBg: 'white' },
    classTarget: 'html',
    current: 'light',
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
