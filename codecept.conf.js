const { setHeadlessWhen } = require('@codeceptjs/configure');

exports.config = {
  tests: './tests/*_test.js',
  output: './reports/output',
  helpers: {
    Puppeteer: {
      url: 'https://www.pyszne.pl/',
      show: true,
      windowSize: '1280x960',
      waitForNavigation: "networkidle0"
    },
    
    Mochawesome: {
      uniqueScreenshotNames: "true",
      reportFileName: 'reportUI'
    }
  },
  include: {
    I: './steps_file.js',
    searchPage: './pages/search.js',
    restaurantPage: './pages/restaurant.js',
    orderPage: './pages/order.js',
    homePage: './pages/home.js',
    successPage: './pages/success.js',
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
        reportDir: "./reports/output"
    }
  },
  name: 'takeaway',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    customLocator: {
      enabled: true,
      attribute: 'data-qa'
    }
  },
  rerun: {
    minSuccess: 1,
    maxReruns: 4,
  }
}