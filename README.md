# apiway-sdk-js
[![npm version](https://badge.fury.io/js/apiway-sdk-js.svg)](https://badge.fury.io/js/apiway-sdk-js)

apiway-sdk-js provides a minimal higher-level wrapper around ApiWay's API.

## Usage

```javascript
/*
   Data can be retrieved from the API either using callbacks (as in versions < 1.0)
   or using a new promise-based API. The promise-based API returns the raw Axios
   request promise.
 */
var ApiWay = require('apiway-sdk-js');

const aw = new ApiWay();
let project = aw.Project(); 
let projectId = 'xxxxx'
project.getProject( projectId)
    .then(project => {
      // Promise !
      // Do something
      })
```

## API Documentation

https://apiway.github.io/apiway-sdk-js/


## Installation
ApiWay.js is available from `npm` or [unpkg][unpkg].

```shell
npm install apiway-api
```

```html
<!-- just apiway-api source (5.3kb) -->
<script src="https://unpkg.com/apiway-api/dist/ApiWay.min.js"></script>

<!-- standalone (20.3kb) -->
<script src="https://unpkg.com/apiway-api/dist/ApiWay.bundle.min.js"></script>
```

## Compatibility
`ApiWay.js` is tested on Node.js:
* 6.x

Note: `ApiWay.js` uses Promise, hence it will not work in Node.js < 4 without polyfill.

