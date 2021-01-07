import i18n from 'i18next';
import { initReactI18next, } from 'react-i18next';

const resources = {
  en: {
    translation: {
    },
  },
  'zh-cn': {
    translation: {
      uploadAttachments: '上传附件',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-cn',

    keySeparator: false,
  });

export default i18n;