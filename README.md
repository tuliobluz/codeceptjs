## Technologies used

* [codecept](https://codecept.io/): CodeceptJS is a modern end to end testing framework with a special BDD-style syntax. The tests are written as a linear scenario of the user's action on a site.
* [codecept-puppeteer](https://codecept.io/puppeteer/): It operates over Google Chrome directly without requiring additional tools like ChromeDriver. 
* [mochawesome](https://www.npmjs.com/package/mochawesome): Mochawesome is a custom reporter for use with the Javascript testing framework

## Requirement

- [Node.js](https://nodejs.org/en/download/) installed;

## Set Up project

- Run ```npm install``` to install dependencies;

## Folders Structures

* ```helpers``` Helpers and utils in general should be place here
* ```pages``` Where the page object of tests should be created
* ```reports``` Where the report and screenshots are located
* ```tests``` Where the specification of tests should be created

## Configuration

* ```codecept.conf.js``` default one
* ```codecept.ci.conf.js``` for CI

## Running the test

Run all tests from current dir ```npx codeceptjs run```

Run only tests with "order" word in name ```npx codeceptjs run --grep "Order"```

Run single test [path to codecept.js] [test filename] ```npx codeceptjs run github_test.js```

Select config file manually (-c or --config option) ```npx codeceptjs run -c codecept.ci.conf.js```

## Report

Running to generate the Report ```npx codeceptjs run --reporter mochawesome```
    The report HTML it will saved to ```\reports\output\mochawesome.html```
