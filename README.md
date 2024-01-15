# get-file-size

[![npm version](https://badge.fury.io/js/get-file-size.svg)](https://www.npmjs.com/package/get-file-size)

## Description

`get-file-size` is a lightweight and simple-to-use Node.js package to format file sizes. It provides a function to convert file sizes from bytes to human-readable units like kilobytes, megabytes, gigabytes, etc.

## Installation

```bash
npm install get-file-size
```

## Usage
```javascript
const { formatFileSize } = require('get-file-size');

const exampleSize: number = 2048;
formatFileSize(exampleSize, false).then(result => {
  console.log(result);
});
```

### Options
`size`: The file size in bytes.
`useBinaryUnits`: (Optional) If set to `true`, uses binary units (e.g., KiB, MiB) instead of decimal units (e.g., KB, MB). Default is `false`. 

## Example
```javascript
const { formatFileSize } = require('get-file-size');

const fileSize = 1024;
const exampleSize: number = 2048;
formatFileSize(exampleSize, false).then(result => {
  console.log(result);
});
// Output: "2.00 KB"
```

## Contributing
Contributions to `get-file-size` are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name.`
3. Commit your changes: `git commit -m "Add your feature or fix".`
4. Push your branch to your fork: `git push origin feature/your-feature-name.`
5. Create a pull request on the original repository.

Please follow the Code of Conduct and Contributing Guidelines when contributing.

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/ishangawali02)