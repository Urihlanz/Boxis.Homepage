import locales from '../translations';
import unstranslatable from '../translations/untranslatable.json';

export const defaultLocale = 'ru';

export const getTranslations = (locale: string): Record<string, string> => ({
  ...locales[defaultLocale],
  ...locales[locale],
  ...unstranslatable,
});

export const hasLocale = () => !!localStorage.getItem('locale');

export const isLocaleValid = (locale: string) => !!locales[locale];

export const saveUserLocale = (locale: string) => {
  if (!isLocaleValid(locale)) {
    return;
  }

  localStorage.setItem('locale', locale);
};

export const resetUserLocale = () => {
  localStorage.removeItem('locale');
};

export const getUserLocale = () => {
  const locale = localStorage.getItem('locale');

  if (!locale) {
    return defaultLocale;
  }

  if (!isLocaleValid(locale)) {
    resetUserLocale();

    return defaultLocale;
  }

  return locale;
};
