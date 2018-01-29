const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3050',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=',
    'LOCAL_PASSWORD=',
    'LOCAL_PORT=3050',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=gowithme'
  ]
};

module.exports = envBuild;