module.exports = {
  name: 'mono',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mono',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
