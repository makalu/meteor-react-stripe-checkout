Package.describe({
  name: 'makalu:react-document-title',
  version: '0.0.1',
  summary: "react-document-title 2.0.0 by Dan Abramov, repackaged for Meteor.",
  git: 'https://github.com/makalu/meteor-react-document-title.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'react-document-title': '2.0.0'
});

Package.onUse(function(api) {
  api.use(['react-runtime@0.13.3_6', 'cosmos:browserify@0.5.0']);
  api.imply(['react-runtime@0.13.3_6']);

  api.add_files([
    'react-document-title.browserify.options.json',
    'react-document-title.browserify.js'
  ]);

  api.export('DocumentTitle');
});
