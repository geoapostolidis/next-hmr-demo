const HttpBackend = require("i18next-http-backend/cjs")

const isBrowser = typeof window !== 'undefined'


module.exports = {
  // debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ["el", "en"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "el"
  },
  // HMR in dev when updating translations
  ...(typeof window !== 'undefined'
  ? {
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  }
  : {}),
  use: isBrowser ? [HttpBackend] : [],
}