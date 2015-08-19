# vsblockui v. 0.0.1

**Block UI service - AngularJS reusable UI component**

## Description
Simple AngularJS service which implements the block UI functionality. This component uses the CSS3 transforms and the CSS3 animations. This component depends on only the AngularJS.

## Usage

* include the **vsblockui-0.0.1.min.js** and the **vsblockui-0.0.1.min.css** files into your project. See the **Build project** and the **Installation** chapters below.
```html
<script src="vsblockui-0.0.1.min.js"></script>
<link href="vsblockui-0.0.1.min.css" rel="stylesheet" type="text/css">
```
* inject the **vsblockui** module into your application module.
* and inject the **vsblockui** service into each controller which is using the block UI.
```js
var sampleapp = angular.module('sampleapp', ['vsblockui']);
sampleapp.controller('samplectrl', function ($scope, vsblockui) {
    ...
});
```

### Javascript example
```js
var sampleapp = angular.module('sampleapp', ['vsblockui']);
sampleapp.controller('samplectrl', function ($scope, $timeout, vsblockui) {

    $scope.disable = function () {
        // block the UI
        vsblockui.disable({message: 'Loading data...'});

        // the timeout enable the UI automatically after 3 seconds
        $timeout(function () {
            vsblockui.enable();
        }, 3000);
    };
});

```


#### vsblockui

By injecting the **vsblockui** it is possible to block the UI by calling the **disable** function from the service.

* parameter to the **disable** function is a javascript object. See below.
```js
    {
        message: 'Loading data...'
        disableTime: 5000
    }
```

| Parameter | Type | Description | Mandatory | 
| :------------ |:---------------|:---------------|:---------------|
| message | string | Message of the popup shown on the UI. | yes |
| disableTime | number | Milliseconds on how long time the UI is blocked. | no |


It is possible to enable the UI by calling the **enable** function from the service.

* No parameters.

## Demo
In the **examples** folder of this project has the sample application and the online demo is [here](http://kekeh.github.io/vsblockui)

## Dependencies
Depends on only the AngularJS. Implemented using the AngularJS version 1.4.3.

## Build project
* Build can be done by executing the **grunt** command. It creates the **dist/debug** and the **dist/min** folders and put files to these folders.
```js
grunt
```

## Installation
* Installation can be done using the **bower**. It installs files from the **dist/debug** and the **dist/min** folders. Needed CSS and javascript files are located in these folders.
```js
bower install vsblockui
```

## Compatibility (tested with)
* Firefox 40
* Chromium 44.0.2403.89 
* 
* 

## License
* License: MIT

## Author
* Author: kekeh