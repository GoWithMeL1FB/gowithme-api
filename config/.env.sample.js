const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3050',
    'LOCAL_USER=gowithme',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=GoWithMe',
    'LOCAL_PASSWORD=password',
    'LOCAL_PORT=',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=gowithme',
    'FBAPP_ID=$FBAPP_ID',
    'FBAPP_SECRET=$FBAPP_SECRET',
    'GOOGLE_ID=$GOOGLE_ID',
    'GOOGLE_SECRET=$GOOGLE_SECRET'
  ]
};

module.exports = envBuild;