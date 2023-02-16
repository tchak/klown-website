/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverBuildDirectory: 'netlify/functions/server/build',
  ignoredRouteFiles: ['.*'],
  future: {
    v2_meta: false,
    v2_routeConvention: false,
  },
};
