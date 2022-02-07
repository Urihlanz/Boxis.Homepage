import { Select as UISelect } from 'boxis-uikit';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';

import { LocaleContext } from '../../../context/Locale';
import { overrideStyled } from '../../../utils/styled';
import EnglishFlag from './flags/English';
import RussianFlag from './flags/Russian';

const Select = overrideStyled(UISelect)`

  .ui-select__value {
    color: transparent;
    width: 0;
  }

  .ui-select__list {
    top: 100%;
    right: 0;
    width: 194px;
    padding: 15px 12px;
  }

  .ui-select__option {
    border-radius: 8px;

    span {
      font-family: Gilroy;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .ui-select__arrow {
    width: 8px;
    height: 5px;
  }

  .ui-select__icon {
    margin-right: 18px;
  }
`;

const LanguageSelect: React.FC<{ className?: string }> = ({ className }) => {
  const { locale, setLocale } = useContext(LocaleContext);
  const intl = useIntl();

  const localeOptions = [
    {
      label: intl.formatMessage({ id: 'locale.ru' }),
      value: 'ru',
      icon: <RussianFlag />,
    },
    {
      label: intl.formatMessage({ id: 'locale.en' }),
      value: 'en',
      icon: <EnglishFlag />,
    },
  ];

  const onSelectLocale = (value: string) => setLocale(value);

  return (
    <Select
      defaultValue={locale}
      options={localeOptions}
      onChange={onSelectLocale}
      className={className}
    />
  );
};

export default LanguageSelect;
