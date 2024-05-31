import i18n from "i18next";
import { escape } from "querystring";
import { initReactI18next } from "react-i18next";
import HEADER_EN from '../localles/en/header.json'; 
import HEADER_JP from '../localles/jp/header.json';
import FOOTER_EN from '../localles/en/footer.json';
import FOOTER_JP from '../localles/jp/footer.json';
import CAROUSEL_EN from '../localles/en/carousel.json';
import CAROUSEL_JP from '../localles/jp/carousel.json';
import LISTCITY_EN from '../localles/en/list-city.json';
import LISTCITY_JP from '../localles/jp/list-city.json';
import ABOUTUS_EN from '../localles/en/about-us.json';
import ABOUTUS_JP from '../localles/jp/about-us.json';

export const localles = {
    en: 'English',
    jp: 'Japanese'
}

const resources = {
    en: {
        header: HEADER_EN,
        footer: FOOTER_EN,
        carousel: CAROUSEL_EN,
        listCity: LISTCITY_EN,
        aboutUs: ABOUTUS_EN
    },

    jp: {
        header: HEADER_JP,
        footer: FOOTER_JP,
        carousel: CAROUSEL_JP,
        listCity: LISTCITY_JP,
        aboutUs: ABOUTUS_JP
    }
}

const defaultNS = 'aboutUs'

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    ns: ['header', 'footer', 'carousel', 'listCity','aboutUs'],
    fallbackLng: 'jp',
    defaultNS,
    interpolation: {
        escapeValue: false
    }
})
