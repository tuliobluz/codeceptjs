const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

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
      uniqueScreenshotNames: "true"
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
        reportDir: "output"
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
    }
  }
}