import React, { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import {
  defaultLocale,
  getTranslations,
  getUserLocale,
  saveUserLocale,
} from '../utils/translation';

type LocaleContextProps = {
  locale: string;
  setLocale: (localeId: string) => void;
};

export const LocaleContext = createContext<LocaleContextProps>({
  locale: defaultLocale,
  setLocale: () => {},
});

export const LocaleProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<string>(getUserLocale());

  const changeLocale = (localeId: string) => {
    setLocale(localeId);
    saveUserLocale(localeId);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
      <IntlProvider
        locale={locale}
        messages={getTranslations(locale)}
        defaultLocale={defaultLocale}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
