import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        concept: 'Concepto',
        incomes: 'Rendimientos',
        deductions: 'Gastos Deducibles',
        calculator: 'Calculadora',
        language: 'Idioma'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        concept: 'Concept',
        incomes: 'Incomes',
        deductions: 'Deductions',
        calculator: 'Calculator',
        language: 'Language'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 