const strapi = require('@strapi/strapi');
const app = strapi({ distDir: './api/dist' });
app.start();
