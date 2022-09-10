const fs = require('fs');

const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        return new Promise((resolve, reject) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        return new Promise((resolve, reject) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };