const exif = require("jpeg-exif");
const fs = require("fs");
const dataObj = require('../public/data/data.js');


var gcd = function(a, b) {
  if (!b) return a;
    a = parseInt(a);
    b = parseInt(b);
  return gcd(b, a % b);
};

const parse = (path, pI, mI) => {
  exif.parse(path, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const exif = data.SubExif;
        
        var fraction = exif.ExposureTime[0];
        var len = fraction.toString().length - 2;

        var denominator = Math.pow(10, len);
        var numerator = fraction * denominator;

        var divisor = gcd(numerator, denominator);    // Should be 8

        numerator /= divisor;                         // Should be 439
        denominator /= divisor;                       // Should be 1250

        const obj = {
          aperture: exif.FNumber[0],
          exposure: exif.ExposureTime[0],
          exposureFraction: numerator.toFixed() + '/' + denominator.toFixed(),
          focalLength: exif.FocalLength[0],
          iso: exif.PhotographicSensitivity,
        };
        dataObj.default.series[pI].media[mI].exif = obj;
    }
  });
}

dataObj.default.series.forEach((project, pI) => {
  project.media.forEach((medium, mI) => {
    const path = `${__dirname}/../public/img/${project.path}/${medium.name}.jpg`;
    const obj = parse(path, pI, mI);
  })
})

setTimeout(() => {  
  fs.writeFile(`${__dirname}/../public/data/data.js`, `const data = ${JSON.stringify(dataObj.default)} export default data;`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}, 3000);

