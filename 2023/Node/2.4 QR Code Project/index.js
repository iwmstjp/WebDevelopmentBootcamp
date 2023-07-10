/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import * as fs from "fs";
var url = fs.readFileSync("URL.txt", 'utf-8');
console.log(url);
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('url.png'));
