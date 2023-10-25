// i18n.ts
import { createIntl, createIntlCache } from 'react-intl';

const cache = createIntlCache();
const defaultLocale = 'en';

const messages = {
  en: {
    greeting: 'Hello, {name}!',
  },
  es: {
    greeting: '¡Hola, {name}!',
  }
};

export const intl = createIntl(
  {
    locale: defaultLocale,
    messages: messages[defaultLocale]
  },
  cache
);
