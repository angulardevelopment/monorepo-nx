import { Component } from '@angular/core';
import * as fingerprint2 from 'fingerprintjs2';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  ngOnInit(){
    this.demo();
  }

  demo(){
    setTimeout(function () {
      fingerprint2.get(function (data) {
      console.log(data);
      })
      }, 500)
  }
}


// e array that it will return is-

// [{

// "key": "userAgent",

// "value": "Mozilla/5.0 .."

// },

// {

// "key": "webdriver",

// "value": "not available"

// },

// {

// "key": "language",

// "value": "en-US"

// },

// {

// "key": "colorDepth",

// "value": 24

// },

// {

// "key": "deviceMemory",

// "value": 8

// },

// {

// "key": "hardwareConcurrency",

// "value": 8

// },

// {

// "key": "screenResolution",

// "value": [720, 1280]

// },

// {

// "key": "availableScreenResolution",

// "value": [680, 1280]

// },

// {

// "key": "timezoneOffset",

// "value": -330

// },

// {

// "key": "timezone",

// "value": "Asia/Calcutta"

// },

// {

// "key": "sessionStorage",

// "value": true

// },

// {

// "key": "localStorage",

// "value": true

// },

// {

// "key": "indexedDb",

// "value": true

// },

// {

// "key": "addBehavior",

// "value": false

// },

// {

// "key": "openDatabase",

// "value": true

// },

// {

// "key": "cpuClass",

// "value": "not available"

// },

// {

// "key": "platform",

// "value": "Win32"

// },

// {

// "key": "plugins",

// "value": [["Chrome PDF Plugin","Portable Document Format",[["application/google-chrome-pdf",

// "pdf"]]],["Chrome PDF Viewer","",[["application/pdf", "pdf"]]],["Native Client","",[

// ["application/x-nacl",""],["application/x-pnacl",""]]]]

// },

// {

// "key": "canvas",

// "value": [

// ]

// },

// {

// "key": "webgl",

// "value": [

// ]

// },

// {

// "key": "webglVendorAndRenderer",

// "value": "Google Inc.~"

// },

// {

// "key": "adBlock",

// "value": false

// },

// {

// "key": "hasLiedLanguages",

// "value": false

// },

// {

// "key": "hasLiedResolution",

// "value": false

// },

// {

// "key": "hasLiedOs",

// "value": false

// },

// {

// "key": "hasLiedBrowser",

// "value": false

// },

// {

// "key": "touchSupport",

// "value": [

// 0,

// false,

// false

// ]

// },

// {

// "key": "fonts",

// "value": ["Arial", "Arial Black"]

// },

// {

// "key": "audio",

// "value": "124.04344884395687"

// }

// ]