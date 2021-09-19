export default () => ({
  app: {
    pathPrefix: 'api-service',
    paginateLimit: 50,
    appPort: process.env.SERVICE_PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  service: {
    elastic: {
      path: process.env.ELASTIC_PATH,
      username: process.env.ELASTIC_USERNAME,
      password: process.env.ELASTIC_PASSWORD,
    },
  },
});
