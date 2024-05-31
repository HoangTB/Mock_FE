import i18n from "i18next";
import { escape } from "querystring";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'home': 'Home',
            'branch': 'Branch',
            'contact': 'Contact',
            'about us': 'About Us'
        }
    },

    jp: {
        translation: {
            'home': 'ホーム',
            'branch': '支店',
            'contact': 'コンタクト',
            'about us': '私たちについて'
        }
    }
}
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'jp',
    interpolation: {
        escapeValue: false
    }
})