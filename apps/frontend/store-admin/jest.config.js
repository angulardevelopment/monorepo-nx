module.exports = {
  name: 'frontend-store-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/store-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
