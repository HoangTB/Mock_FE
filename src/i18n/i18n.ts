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
import CONTACT_EN from '../localles/en/contact.json';
import CONTACT_JP from '../localles/jp/contact.json';
import ROMALIST_EN from '../localles/en/room-list.json';
import ROMALIST_JP from '../localles/jp/room-list.json';
import STEP_EN from '../localles/en/step.json';
import STEP_JP from '../localles/jp/step.json';
import REGISTER_EN from '../localles/en/register.json';
import REGISTER_JP from '../localles/jp/register.json';
import FILTER_EN from '../localles/en/filter.json';
import FILTER_JP from '../localles/jp/filter.json';
import LOGIN_EN from '../localles/en/login.json';
import LOGIN_JP from '../localles/jp/login.json';

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
        aboutUs: ABOUTUS_EN,
        contact: CONTACT_EN,
        roomList: ROMALIST_EN,
        step: STEP_EN,
        register: REGISTER_EN,
        filter: FILTER_EN,
        login: LOGIN_EN
    },

    jp: {
        header: HEADER_JP,
        footer: FOOTER_JP,
        carousel: CAROUSEL_JP,
        listCity: LISTCITY_JP,
        aboutUs: ABOUTUS_JP,
        contact: CONTACT_JP,
        roomList: ROMALIST_JP,
        step: STEP_JP,
        register: REGISTER_JP,
        filter: FILTER_JP,
        login: LOGIN_JP
    }
}

const defaultNS = 'aboutUs'

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("lng") || "en",
    ns: ['header', 'footer', 'carousel', 'listCity','aboutUs','contact','roomList','step','register', 'filter', 'login'],
    fallbackLng: 'jp',
    defaultNS,
    interpolation: {
        escapeValue: false
    }
})