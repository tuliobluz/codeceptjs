const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './reports/output',
  helpers: {
    Puppeteer: {
      browser: process.env.BROWSER || 'chrome',
      url: process.env.BASE_URL || 'https://www.pyszne.pl/',
      windowSize: process.env.WINDOWS_SIZE || '1280x960',
      waitForNavigation: "networkidle0",
      chrome: {
          args: [
              '--ignore-certificate-errors',
          ],
      },
      firefox: {
          args: [
              '--ignore-certificate-errors'
          ],
      },
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
    successPage: './pages/success.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
        reportDir: "./reports/output"
    }
  },
  name: 'takeaway',
  plugins: {
    pauseOnFail: {},
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