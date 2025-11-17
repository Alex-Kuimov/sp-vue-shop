import { createI18n } from 'vue-i18n';
import ru from '@/shared/locales/ru.json';
import en from '@/shared/locales/en.json';

export function initI18n() {
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    fallbackLocale: 'en',
    messages: { ru, en }
  })
}