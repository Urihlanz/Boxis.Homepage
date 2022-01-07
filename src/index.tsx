import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { getUserLocale, hasLocale, saveUserLocale } from './utils/translation';

// TODO: заменить на detectLocale, если нет локали (определение локализации)
const locale = getUserLocale();

if (!hasLocale()) {
  saveUserLocale(locale);
}

ReactDOM.render(<App />, document.getElementById('app'));
