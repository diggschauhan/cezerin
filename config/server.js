// config used by server side only
module.exports = {
  // used by Store (server side)
  apiBaseUrl: `http://env-0287497.mj.milesweb.cloud:3001/api/v1`,

  // used by Store (server and client side)
  ajaxBaseUrl: `http://env-0287497.mj.milesweb.cloud:3001/ajax`,

  // Access-Control-Allow-Origin
  storeBaseUrl: `http://env-0287497.mj.milesweb.cloud:3000`,

  // used by API
  adminLoginUrl: '/admin/login',

  apiListenPort: 3001,
  storeListenPort: 3000,

  // used by API
  mongodbServerUrl: 'mongodb://127.0.0.1:27017/db',

  smtpServer: {
    host: '',
    port: 0,
    secure: true,
    user: '',
    pass: '',
    fromName: '',
    fromAddress: ''
  },

  // key to sign tokens
  jwtSecretKey: '-flkasldfkpaewr0wcckldsfk',

  // key to sign store cookies
  cookieSecretKey: '-89e40vmiodsmfvosigmvdfog',

  // path to uploads
  categoriesUploadPath: 'public/content/images/categories',
  productsUploadPath: 'public/content/images/products',
  filesUploadPath: 'public/content',
  themeAssetsUploadPath: 'theme/assets/images',

  // url to uploads
  categoriesUploadUrl: '/images/categories',
  productsUploadUrl: '/images/products',
  filesUploadUrl: '',
  themeAssetsUploadUrl: '/assets/images',

  // store UI language
  language: 'en',

  // used by API
  orderStartNumber: 1000,

  developerMode: false
}
