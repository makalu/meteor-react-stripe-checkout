Package.describe({
  name: 'makalu:react-stripe-checkout',
  version: '0.0.1',
  summary: "react-stripe-checkout 1.7.0 by Adam Zmenak, repackaged for Meteor.",
  git: 'https://github.com/makalu/meteor-stripe-checkout.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'react-stripe-checkout': '1.7.0'
});

Package.onUse(function(api) {
  api.use(['react-runtime@0.13.3_6', 'cosmos:browserify@0.5.0']);
  api.imply(['react-runtime@0.13.3_6']);

  api.add_files([
    'react-stripe-checkout.browserify.options.json',
    'react-stripe-checkout.browserify.js'
  ]);

  api.export('ReactStripeCheckout');
});
