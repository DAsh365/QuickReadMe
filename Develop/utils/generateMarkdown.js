function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC') {
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else {
      return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'None') {
      return '';
  } else {
      return `[View License](https://opensource.org/licenses/${license})`;
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  } else {
      return `This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
  }
}

function generateMarkdown(data) {
return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, you can reach me through my GitHub profile:
[${data.github}](https://github.com/${data.github})

Alternatively, you can email me at ${data.email}.
`;
}

module.exports = generateMarkdown;