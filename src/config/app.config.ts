export default () => ({
  app: {
    pathPrefix: 'api-service',
    paginateLimit: 50,
    appPort: process.env.SERVICE_PORT || 3100,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'always_learning',
  },
});
