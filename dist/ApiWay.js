(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ApiWay = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _Project = require('./Project');

var _Project2 = _interopRequireDefault(_Project);

var _Instance = require('./Instance');

var _Instance2 = _interopRequireDefault(_Instance);

var _Schedule = require('./Schedule');

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Scheduler = require('./Scheduler');

var _Scheduler2 = _interopRequireDefault(_Scheduler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ApiWay encapsulates the functionality to create various API wrapper objects.
 */
var ApiWay = function () {
  /**
   * Create a new ApiWay.
   * @param {Requestable.auth} [auth] - the credentials to authenticate to ApiWay. If auth is
   *                                  not provided requests will be made unauthenticated
   * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
   */
  // constructor(auth, apiBase = 'http://api.apiway.io') {
  function ApiWay(auth) {
    var apiBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'http://127.0.0.1:3000';

    _classCallCheck(this, ApiWay);

    this.__apiBase = apiBase;
    this.__auth = auth || {};
  }

  /**
   * Create a new User wrapper
   * @param {string} [user] - the name of the user to get information about
   *                        leave undefined for the authenticated user
   * @return {User}
   */


  _createClass(ApiWay, [{
    key: 'getUser',
    value: function getUser(user) {
      return new _User2.default(user, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Project wrapper
     * @param {string} [fullName] - the name of the project to get information about
     *                        leave undefined for the authenticated user
     * @return {Project}
     */

  }, {
    key: 'getProject',
    value: function getProject(fullName) {
      return new _Project2.default(fullName, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Instance wrapper
     * @param {string} [instance] - the id of the instance to get information about
     *                        leave undefined for the authenticated user
     * @return {Instance}
     */

  }, {
    key: 'getInstance',
    value: function getInstance(instance) {
      return new _Instance2.default(instance, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Schedule wrapper
     * @param {string} [scheduleId] - the id of the instance to get information about
     *                        leave undefined for the authenticated user
     * @return {Schedule}
     */

  }, {
    key: 'getSchedule',
    value: function getSchedule(scheduleId) {
      return new _Schedule2.default(scheduleId, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Scheduler wrapper
     * @param {string} [schedulerId] - the id of the instance to get information about
     *                        leave undefined for the authenticated user
     * @return {Schedule}
     */

  }, {
    key: 'getScheduler',
    value: function getScheduler(schedulerId) {
      return new _Scheduler2.default(schedulerId, this.__auth, this.__apiBase);
    }
  }]);

  return ApiWay;
}();

module.exports = ApiWay;

},{"./Instance":2,"./Project":3,"./Schedule":5,"./Scheduler":6,"./User":7}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = require('./Requestable');

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var log = (0, _debug2.default)('apiway:instance');

/**
 * A Project allows scoping of API requests to a particular ApiWay user.
 */

var Instance = function (_Requestable) {
  _inherits(Instance, _Requestable);

  /**
   * Create a Instance.
   * @param {string} [instance] - the instance to use for user-scoped queries
   * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
   * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
   */
  function Instance(instance, auth, apiBase) {
    _classCallCheck(this, Instance);

    var _this = _possibleConstructorReturn(this, (Instance.__proto__ || Object.getPrototypeOf(Instance)).call(this, auth, apiBase));

    _this.instanceId = instance;
    return _this;
  }

  /**
   * Get project information
   * @param {string} [projectId]
   * @param {Requestable.callback} [cb] - will receive the list of repositories
   * @return {Promise} - the promise for the http request
   */


  _createClass(Instance, [{
    key: 'getInstance',
    value: function getInstance(instanceId, cb) {
      return this._request('GET', '/instances/' + instanceId, null, cb);
    }

    /**
     * Get user's project list
     * @param {string} [userId]
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getInstancesByUser',
    value: function getInstancesByUser(userId, options, cb) {
      return this._request('GET', '/instances/users/' + userId, options, cb);
    }

    /**
     * Get project's instance list
     * @param {string} [projectId]
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getInstancesByProject',
    value: function getInstancesByProject(projectId, options, cb) {
      return this._request('GET', '/instances/projects/' + projectId, options, cb);
    }

    /**
     * Add a new Instance
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the API response
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'addInstance',
    value: function addInstance(options, cb) {
      return this._request('POST', '/instances', options, cb);
    }

    /**
     * Update user's profile (Will create a new user if not exist)
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the API response
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'updateInstance',
    value: function updateInstance(instanceId, options, cb) {
      return this._request('PUT', '/instances/' + instanceId, options, cb);
    }
  }]);

  return Instance;
}(_Requestable3.default);

module.exports = Instance;

},{"./Requestable":4,"debug":undefined}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = require('./Requestable');

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('apiway:project');

/**
 * A Project allows scoping of API requests to a particular ApiWay user.
 */

var Project = function (_Requestable) {
   _inherits(Project, _Requestable);

   /**
    * Create a Project.
    * @param {string} [fullName] - the project to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   function Project(fullName, auth, apiBase) {
      _classCallCheck(this, Project);

      var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, auth, apiBase));

      _this.fullName = fullName;
      return _this;
   }

   /**
    * Get project information
    * @param {string} [projectId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */


   _createClass(Project, [{
      key: 'getProject',
      value: function getProject(projectId, cb) {
         return this._request('GET', '/projects/' + projectId, null, cb);
      }

      /**
       * Get user's project list
       * @param {string} [userId]
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getProjectsByUser',
      value: function getProjectsByUser(userId, cb) {
         return this._request('GET', '/projects/users/' + userId, null, cb);
      }

      /**
       * Add a repo as a Project
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'addProject',
      value: function addProject(options, cb) {
         return this._request('POST', '/projects', options, cb);
      }

      /**
       * Update data of project
       * @param {string} [projectId]
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateProject',
      value: function updateProject(projectId, options, cb) {
         return this._request('PUT', '/projects/' + projectId, options, cb);
      }

      /**
       * Add a email subscriber
       * @param {string} [projectId]
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'addEmailSubscriber',
      value: function addEmailSubscriber(projectId, options, cb) {
         return this._request('POST', '/projects/' + projectId + '/subscribe/email', options, cb);
      }

      /**
       * Delete a email subscriber
       * @param {string} [projectId]
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteEmailSubscriber',
      value: function deleteEmailSubscriber(projectId, options, cb) {
         return this._request('DELETE', '/projects/' + projectId + '/subscribe/email', options, cb);
      }
   }, {
      key: 'setScheduleId',
      value: function setScheduleId(projectId, scheduleId, cb) {
         var options = {
            scheduleId: scheduleId
         };
         return this._request('PUT', '/projects/' + projectId, options, cb);
      }

      /**
       * Update schedule of project
       * @param {string} [projectId]
       * @param {string} [when]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateScheduleWhen',
      value: function updateScheduleWhen(projectId, when, cb) {
         var schedule = '';
         if (when.endsWith('m')) {
            schedule = when.replace('m', '') + ' * * * *';
         } else if (when.endsWith('h')) {
            schedule = '* ' + when.replace('h', '') + ' * * *';
         }
         var options = {
            schedule: schedule
         };
         return this._request('PUT', '/projects/' + projectId, options, cb);
      }

      /**
       * Update schedule of project
       * @param {string} [projectId]
       * @param {string} [interval]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateScheduleInterval',
      value: function updateScheduleInterval(projectId, interval, cb) {
         var schedule = '';
         if (interval.endsWith('h')) {
            schedule = '* */' + interval.replace('h', '') + ' * * *';
         } else if (interval.endsWith('d')) {
            schedule = '* * */' + interval.replace('d', '') + ' * *';
         }
         var options = {
            schedule: schedule
         };
         return this._request('PUT', '/projects/' + projectId, options, cb);
      }

      /**
       * Update schedule of project
       * @param {string} [projectId]
       * @param {string} [cron]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateScheduleCron',
      value: function updateScheduleCron(projectId, cron, cb) {
         var options = {
            schedule: cron
         };
         return this._request('PUT', '/projects/' + projectId, options, cb);
      }

      /**
       * Delete a project
       * @param {string} [projectId]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteProject',
      value: function deleteProject(projectId, cb) {
         return this._request('DELETE', '/projects/' + projectId, null, cb);
      }
   }]);

   return Project;
}(_Requestable3.default);

module.exports = Project;

},{"./Requestable":4,"debug":undefined}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _jsBase = require('js-base64');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('apiway:request');

/**
 * The error structure returned when a network call fails
 */

var ResponseError = function (_Error) {
   _inherits(ResponseError, _Error);

   /**
    * Construct a new ResponseError
    * @param {string} message - an message to return instead of the the default error message
    * @param {string} path - the requested path
    * @param {Object} response - the object returned by Axios
    */
   function ResponseError(message, path, response) {
      _classCallCheck(this, ResponseError);

      var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this, message));

      _this.path = path;
      _this.request = response.config;
      _this.response = (response || {}).response || response;
      _this.status = response.status;
      return _this;
   }

   return ResponseError;
}(Error);

/**
 * Requestable wraps the logic for making http requests to the API
 */


var Requestable = function () {
   /**
    * Either a username and password or an oauth token for ApiWay
    * @typedef {Object} Requestable.auth
    * @prop {string} [username] - the ApiWay username
    * @prop {string} [password] - the user's password
    * @prop {token} [token] - an OAuth token
    */
   /**
    * Initialize the http internals.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to ApiWay. If auth is
    *                                  not provided request will be made unauthenticated
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    * @param {string} [AcceptHeader=v3] - the accept header for the requests
    */
   function Requestable(auth, apiBase, AcceptHeader) {
      _classCallCheck(this, Requestable);

      // this.__apiBase = apiBase || 'https://api.apiway.io';
      this.__apiBase = apiBase || 'https://api.apiway.io';
      this.__auth = {
         token: auth.token,
         username: auth.username,
         password: auth.password
      };
      this.__AcceptHeader = AcceptHeader || 'v3';

      if (auth.token) {
         this.__authorizationHeader = 'token ' + auth.token;
      } else if (auth.username && auth.password) {
         this.__authorizationHeader = 'Basic ' + _jsBase.Base64.encode(auth.username + ':' + auth.password);
      }
   }

   /**
    * Compute the URL to use to make a request.
    * @private
    * @param {string} path - either a URL relative to the API base or an absolute URL
    * @return {string} - the URL to use
    */


   _createClass(Requestable, [{
      key: '__getURL',
      value: function __getURL(path) {
         var url = path;

         if (path.indexOf('//') === -1) {
            url = this.__apiBase + path;
         }

         var newCacheBuster = 'timestamp=' + new Date().getTime();
         return url.replace(/(timestamp=\d+)/, newCacheBuster);
      }

      /**
       * Compute the headers required for an API request.
       * @private
       * @param {boolean} raw - if the request should be treated as JSON or as a raw request
       * @param {string} AcceptHeader - the accept header for the request
       * @return {Object} - the headers to use in the request
       */

   }, {
      key: '__getRequestHeaders',
      value: function __getRequestHeaders(raw, AcceptHeader) {
         var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/vnd.apiway.' + (AcceptHeader || this.__AcceptHeader)
         };

         if (raw) {
            headers.Accept += '.raw';
         }
         headers.Accept += '+json';

         if (this.__authorizationHeader) {
            headers.Authorization = this.__authorizationHeader;
         }

         return headers;
      }

      /**
       * Sets the default options for API requests
       * @protected
       * @param {Object} [requestOptions={}] - the current options for the request
       * @return {Object} - the options to pass to the request
       */

   }, {
      key: '_getOptionsWithDefaults',
      value: function _getOptionsWithDefaults() {
         var requestOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

         if (!(requestOptions.visibility || requestOptions.affiliation)) {
            requestOptions.type = requestOptions.type || 'all';
         }
         requestOptions.sort = requestOptions.sort || 'updated';
         requestOptions.per_page = requestOptions.per_page || '100'; // eslint-disable-line

         return requestOptions;
      }

      /**
       * if a `Date` is passed to this function it will be converted to an ISO string
       * @param {*} date - the object to attempt to cooerce into an ISO date string
       * @return {string} - the ISO representation of `date` or whatever was passed in if it was not a date
       */

   }, {
      key: '_dateToISO',
      value: function _dateToISO(date) {
         if (date && date instanceof Date) {
            date = date.toISOString();
         }

         return date;
      }

      /**
       * A function that receives the result of the API request.
       * @callback Requestable.callback
       * @param {Requestable.Error} error - the error returned by the API or `null`
       * @param {(Object|true)} result - the data returned by the API or `true` if the API returns `204 No Content`
       * @param {Object} request - the raw {@linkcode https://apiway.com/mzabriskie/axios#response-schema Response}
       */
      /**
       * Make a request.
       * @param {string} method - the method for the request (GET, PUT, POST, DELETE)
       * @param {string} path - the path for the request
       * @param {*} [data] - the data to send to the server. For HTTP methods that don't have a body the data
       *                   will be sent as query parameters
       * @param {Requestable.callback} [cb] - the callback for the request
       * @param {boolean} [raw=false] - if the request should be sent as raw. If this is a falsy value then the
       *                              request will be made as JSON
       * @return {Promise} - the Promise for the http request
       */

   }, {
      key: '_request',
      value: function _request(method, path, data, cb, raw) {
         var url = this.__getURL(path);
         // console.log(url)

         var AcceptHeader = (data || {}).AcceptHeader;
         if (AcceptHeader) {
            delete data.AcceptHeader;
         }
         var headers = this.__getRequestHeaders(raw, AcceptHeader);

         var queryParams = {};

         var shouldUseDataAsParams = data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && methodHasNoBody(method);
         if (shouldUseDataAsParams) {
            queryParams = data;
            data = undefined;
         }

         var config = {
            url: url,
            method: method,
            headers: headers,
            params: queryParams,
            data: data,
            responseType: raw ? 'text' : 'json'
         };

         // console.log(config)
         log(config.method + ' to ' + config.url);
         var requestPromise = (0, _axios2.default)(config).catch(callbackErrorOrThrow(cb, path));

         if (cb) {
            requestPromise.then(function (response) {
               if (response.data && Object.keys(response.data).length > 0) {
                  // When data has results
                  cb(null, response.data, response);
               } else if (config.method !== 'GET' && Object.keys(response.data).length < 1) {
                  // True when successful submit a request and receive a empty object
                  cb(null, response.status < 300, response);
               } else {
                  cb(null, response.data, response);
               }
            });
         }

         return requestPromise;
      }

      /**
       * Make a request to an endpoint the returns 204 when true and 404 when false
       * @param {string} path - the path to request
       * @param {Object} data - any query parameters for the request
       * @param {Requestable.callback} cb - the callback that will receive `true` or `false`
       * @param {method} [method=GET] - HTTP Method to use
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: '_request204or404',
      value: function _request204or404(path, data, cb) {
         var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';

         return this._request(method, path, data).then(function success(response) {
            if (cb) {
               cb(null, true, response);
            }
            return true;
         }, function failure(response) {
            if (response.response.status === 404) {
               if (cb) {
                  cb(null, false, response);
               }
               return false;
            }

            if (cb) {
               cb(response);
            }
            throw response;
         });
      }

      /**
       * Make a request and fetch all the available data. ApiWay will paginate responses so for queries
       * that might span multiple pages this method is preferred to {@link Requestable#request}
       * @param {string} path - the path to request
       * @param {Object} options - the query parameters to include
       * @param {Requestable.callback} [cb] - the function to receive the data. The returned data will always be an array.
       * @param {Object[]} results - the partial results. This argument is intended for interal use only.
       * @return {Promise} - a promise which will resolve when all pages have been fetched
       * @deprecated This will be folded into {@link Requestable#_request} in the 2.0 release.
       */

   }, {
      key: '_requestAllPages',
      value: function _requestAllPages(path, options, cb, results) {
         var _this2 = this;

         results = results || [];

         return this._request('GET', path, options).then(function (response) {
            var _results;

            var thisGroup = void 0;
            if (response.data instanceof Array) {
               thisGroup = response.data;
            } else if (response.data.items instanceof Array) {
               thisGroup = response.data.items;
            } else {
               var message = 'cannot figure out how to append ' + response.data + ' to the result set';
               throw new ResponseError(message, path, response);
            }
            (_results = results).push.apply(_results, _toConsumableArray(thisGroup));

            var nextUrl = getNextPage(response.headers.link);
            if (nextUrl && typeof options.page !== 'number') {
               log('getting next page: ' + nextUrl);
               return _this2._requestAllPages(nextUrl, options, cb, results);
            }

            if (cb) {
               cb(null, results, response);
            }

            response.data = results;
            return response;
         }).catch(callbackErrorOrThrow(cb, path));
      }
   }]);

   return Requestable;
}();

module.exports = Requestable;

// ////////////////////////// //
//  Private helper functions  //
// ////////////////////////// //
var METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];
function methodHasNoBody(method) {
   return METHODS_WITH_NO_BODY.indexOf(method) !== -1;
}

function getNextPage() {
   var linksHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

   var links = linksHeader.split(/\s*,\s*/); // splits and strips the urls
   return links.reduce(function (nextUrl, link) {
      if (link.search(/rel="next"/) !== -1) {
         return (link.match(/<(.*)>/) || [])[1];
      }

      return nextUrl;
   }, undefined);
}

function callbackErrorOrThrow(cb, path) {
   return function handler(object) {
      var error = void 0;
      if (object.hasOwnProperty('config')) {
         var _object$response = object.response,
             status = _object$response.status,
             statusText = _object$response.statusText,
             _object$config = object.config,
             method = _object$config.method,
             url = _object$config.url;

         var message = status + ' error making request ' + method + ' ' + url + ': "' + statusText + '"';
         error = new ResponseError(message, path, object);
         log(message + ' ' + JSON.stringify(object.data));
      } else {
         error = object;
      }
      if (cb) {
         log('going to error callback');
         cb(error);
      } else {
         log('throwing error');
         throw error;
      }
   };
}

},{"axios":undefined,"debug":undefined,"js-base64":undefined}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = require('./Requestable');

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('apiway:schedule');

/**
 * A Schedule allows scoping of API requests to a particular ApiWay user.
 */

var Schedule = function (_Requestable) {
   _inherits(Schedule, _Requestable);

   /**
    * Create a Schedule.
    * @param {string} [scheduleId] -
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   function Schedule(scheduleId, auth, apiBase) {
      _classCallCheck(this, Schedule);

      var _this = _possibleConstructorReturn(this, (Schedule.__proto__ || Object.getPrototypeOf(Schedule)).call(this, auth, apiBase));

      _this.scheduleId = scheduleId;
      return _this;
   }

   /**
    * Get schedule information
    * @param {string} [scheduleId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */


   _createClass(Schedule, [{
      key: 'getSchedule',
      value: function getSchedule(scheduleId, cb) {
         return this._request('GET', '/schedules/' + scheduleId, null, cb);
      }

      /**
       * Get schedule list
       * @param {string} [scheduleId]
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSchedules',
      value: function getSchedules(options, cb) {
         return this._request('GET', '/schedules', options, cb);
      }

      /**
       * Get user's schedules list
       * @param {string} [userId]
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSchedulesByUser',
      value: function getSchedulesByUser(userId, options, cb) {
         return this._request('GET', '/schedules/users/' + userId, options, cb);
      }

      /**
       * Get project related schedule list
       * @param {string} [projectId]
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSchedulesByProject',
      value: function getSchedulesByProject(projectId, options, cb) {
         return this._request('GET', '/schedules/projects/' + projectId, options, cb);
      }

      /**
       * Create a schedule
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'addSchedule',
      value: function addSchedule(options, cb) {
         return this._request('POST', '/schedules', options, cb);
      }

      /**
       * Update data of schedule
       * @param {string} [scheduleId]
       * @param {object} options -
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateSchedule',
      value: function updateSchedule(scheduleId, options, cb) {
         return this._request('PUT', '/schedules/' + scheduleId, options, cb);
      }

      /**
       * Update cron of Schedule
       * @param {string} [scheduleId]
       * @param {string} [when]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateScheduleWhen',
      value: function updateScheduleWhen(scheduleId, when, cb) {
         var schedule = '';
         if (when.endsWith('m')) {
            schedule = when.replace('m', '') + ' * * * *';
         } else if (when.endsWith('h')) {
            schedule = '* ' + when.replace('h', '') + ' * * *';
         }
         var options = {
            cron: schedule
         };
         return this._request('PUT', '/schedules/' + scheduleId, options, cb);
      }

      /**
       * Update cron of Schedule
       * @param {string} [scheduleId]
       * @param {string} [interval]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateScheduleInterval',
      value: function updateScheduleInterval(scheduleId, interval, cb) {
         var schedule = '';
         if (interval.endsWith('h')) {
            schedule = '* */' + interval.replace('h', '') + ' * * *';
         } else if (interval.endsWith('d')) {
            schedule = '* * */' + interval.replace('d', '') + ' * *';
         }
         var options = {
            cron: schedule
         };
         return this._request('PUT', '/schedules/' + scheduleId, options, cb);
      }

      /**
       * Update cron of Schedule
       * @param {string} [scheduleId]
       * @param {string} [cron]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateCron',
      value: function updateCron(scheduleId, cron, cb) {
         var options = {
            cron: cron
         };
         return this._request('PUT', '/schedules/' + scheduleId, options, cb);
      }

      /**
       * Update state of Schedule
       * @param {string} [scheduleId]
       * @param {string} [state]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateState',
      value: function updateState(scheduleId, state, cb) {
         var options = {
            state: state
         };
         return this._request('PUT', '/schedules/' + scheduleId, options, cb);
      }

      /**
       * Delete a schedule
       * @param {string} [scheduleId]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteSchedule',
      value: function deleteSchedule(scheduleId, cb) {
         return this._request('DELETE', '/schedules/' + scheduleId, null, cb);
      }

      /**
       * Delete schedules by userId
       * @param {string} [userId]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteSchedulesByUser',
      value: function deleteSchedulesByUser(userId, cb) {
         return this._request('DELETE', '/schedules/users/' + userId, null, cb);
      }

      /**
       * Delete schedules by projectId
       * @param {string} [projectId]
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteSchedulesByProject',
      value: function deleteSchedulesByProject(projectId, cb) {
         return this._request('DELETE', '/schedules/projects/' + projectId, null, cb);
      }
   }]);

   return Schedule;
}(_Requestable3.default);

module.exports = Schedule;

},{"./Requestable":4,"debug":undefined}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = require('./Requestable');

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('apiway:scheduler');

/**
 * A Schedule allows scoping of API requests to a particular ApiWay user.
 */

var Scheduler = function (_Requestable) {
  _inherits(Scheduler, _Requestable);

  /**
   * Create a Schedule.
   * @param {string} [schedulerId] -
   * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
   * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
   */
  function Scheduler(schedulerId, auth, apiBase) {
    _classCallCheck(this, Scheduler);

    var _this = _possibleConstructorReturn(this, (Scheduler.__proto__ || Object.getPrototypeOf(Scheduler)).call(this, auth, apiBase));

    _this.schedulerId = schedulerId;
    return _this;
  }

  /**
   * Create a Scheduler
   * @param {object} options -
   * @param {Requestable.callback} [cb] - will receive the API response
   * @return {Promise} - the promise for the http request
   */


  _createClass(Scheduler, [{
    key: 'addScheduler',
    value: function addScheduler(options, cb) {
      return this._request('POST', '/schedulers', options, cb);
    }

    /**
     * Update Scheduler
     * @param {string} [schedulerId]
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the API response
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'updateScheduler',
    value: function updateScheduler(schedulerId, options, cb) {
      return this._request('PUT', '/schedulers/' + schedulerId, options, cb);
    }

    /**
     * Add Schedules
     * @param {string} [schedulerId]
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getScheduler',
    value: function getScheduler(schedulerId, cb) {
      return this._request('GET', '/schedulers/' + schedulerId, null, cb);
    }

    /**
     * Get Scheduler list
     * @param {string} [schedulerId]
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getSchedulers',
    value: function getSchedulers(options, cb) {
      return this._request('GET', '/schedulers', options, cb);
    }

    /**
     * Delete a Scheduler
     * @param {string} [schedulerId]
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the API response
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteScheduler',
    value: function deleteScheduler(schedulerId, options, cb) {
      return this._request('DELETE', '/schedulers/' + schedulerId, options, cb);
    }

    /**
     * Delete a Schedule in aScheduler
     * @param {string} [scheduleId]
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the API response
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteSchedule',
    value: function deleteSchedule(scheduleId, options, cb) {
      return this._request('DELETE', '/schedulers/' + scheduleId, options, cb);
    }
  }]);

  return Scheduler;
}(_Requestable3.default);

module.exports = Scheduler;

},{"./Requestable":4,"debug":undefined}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = require('./Requestable');

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2017 BlueHack Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under MIT.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var log = (0, _debug2.default)('apiway:user');

/**
 * A User allows scoping of API requests to a particular ApiWay user.
 */

var User = function (_Requestable) {
  _inherits(User, _Requestable);

  /**
   * Create a User.
   * @param {string} [username] - the user to use for user-scoped queries
   * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
   * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
   */
  function User(username, auth, apiBase) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, auth, apiBase));

    _this.__user = username;
    return _this;
  }

  /**
   * Get the user's profile
   * @param {string} [userId]
   * @param {Requestable.callback} [cb] - will receive the list of repositories
   * @return {Promise} - the promise for the http request
   */


  _createClass(User, [{
    key: 'getProfile',
    value: function getProfile(userId, cb) {
      return this._request('GET', '/users/' + userId, null, cb);
    }

    /**
     * Update user's profile (Will create a new user if not exist)
     * @param {object} options -
     * @param {Requestable.callback} [cb] - will receive the API response
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'updateProfile',
    value: function updateProfile(options, cb) {
      return this._request('POST', '/users', options, cb);
    }
  }]);

  return User;
}(_Requestable3.default);

module.exports = User;

},{"./Requestable":4,"debug":undefined}]},{},[1])(1)
});

//# sourceMappingURL=ApiWay.js.map
