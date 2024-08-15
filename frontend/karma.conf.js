// Karma configuration
// Generated on Thu Aug 15 2024 00:15:18 GMT-0400 (Eastern Daylight Time)

// process.env.CHROME_BIN = require("puppeteer").executablePath();
// console.log(process.env.CHROME_BIN);

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("karma-jasmine-html-reporter"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-requirejs"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ["jasmine", "@angular-devkit/build-angular"],

    // list of files / patterns to load in the browser
    files: [{ pattern: '"src/**/**.ts"' }],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ["progress", "kjhtml", "mocha", "coverage"],

    client: {
      clearContext: false,
    },

    jasmineHtmlReporter: {
      suppressAll: true, // Suppress all messages (overrides other suppress settings)
      suppressFailed: true, // Suppress failed messages
    },

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      "src/**/*/*.ts": ["coverage"],
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ["ChromeHeadless", "Chrome_without_security"], // You may use 'ChromeCanary', 'Chromium' or any other supported browser

    // you can define custom flags
    customLaunchers: {
      Chrome_without_security: {
        base: "Chrome",
        flags: ["--disable-web-security", "--disable-site-isolation-trials"],
      },
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
  });
};
