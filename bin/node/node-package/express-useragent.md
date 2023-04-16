## express-useragent
express-useragent is a middleware for the Express framework that allows you to easily parse the user agent string of an HTTP request and make the information available to your application.

Installation
To install express-useragent, use the following command:
`npm install express-useragent`

## Usage
To use express-useragent in your Express application, simply require it and add it as middleware:

```javascript
const express = require('express');
const useragent = require('express-useragent');

const app = express();

app.use(useragent.express());


app.get('/', (req, res) => {
  res.send(`Your browser is ${req.useragent.browser}`);
});

```
The req.useragent object contains the following properties:

isAuthoritative: Boolean indicating if the user agent information is from the user agent string or from a device library.
isMobile: Boolean indicating if the user agent represents a mobile device.
isTablet: Boolean indicating if the user agent represents a tablet device.
isiPad: Boolean indicating if the user agent represents an iPad device.
isiPod: Boolean indicating if the user agent represents an iPod device.
isiPhone: Boolean indicating if the user agent represents an iPhone device.
isAndroid: Boolean indicating if the user agent represents an Android device.
isBlackberry: Boolean indicating if the user agent represents a Blackberry device.
isOpera: Boolean indicating if the user agent represents an Opera browser.
isIE: Boolean indicating if the user agent represents an Internet Explorer browser.
isEdge: Boolean indicating if the user agent represents an Edge browser.
isIECompatibilityMode: Boolean indicating if the user agent represents an Internet Explorer compatibility mode.
isSafari: Boolean indicating if the user agent represents a Safari browser.
isFirefox: Boolean indicating if the user agent represents a Firefox browser.
isWebkit: Boolean indicating if the user agent represents a Webkit browser.
isChrome: Boolean indicating if the user agent represents a Chrome browser.
isKonqueror: Boolean indicating if the user agent represents a Konqueror browser.
isOmniWeb: Boolean indicating if the user agent represents an OmniWeb browser.
isSeaMonkey: Boolean indicating if the user agent represents a SeaMonkey browser.
isFlock: Boolean indicating if the user agent represents a Flock browser.
isAmaya: Boolean indicating if the user agent represents an Amaya browser.
isPhantomJS: Boolean indicating if the user agent represents a PhantomJS browser.
isEpiphany: Boolean indicating if the user agent represents an