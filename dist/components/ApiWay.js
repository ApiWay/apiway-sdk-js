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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwaVdheS5qcyJdLCJuYW1lcyI6WyJBcGlXYXkiLCJhdXRoIiwiYXBpQmFzZSIsIl9fYXBpQmFzZSIsIl9fYXV0aCIsInVzZXIiLCJmdWxsTmFtZSIsImluc3RhbmNlIiwic2NoZWR1bGVJZCIsInNjaGVkdWxlcklkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7cWpCQUFBOzs7Ozs7QUFNQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7SUFHTUEsTTtBQUNIOzs7Ozs7QUFNQTtBQUNDLGtCQUFZQyxJQUFaLEVBQXFEO0FBQUEsUUFBbkNDLE9BQW1DLHVFQUF6Qix1QkFBeUI7O0FBQUE7O0FBQ25ELFNBQUtDLFNBQUwsR0FBaUJELE9BQWpCO0FBQ0EsU0FBS0UsTUFBTCxHQUFjSCxRQUFRLEVBQXRCO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7NEJBTVFJLEksRUFBTTtBQUNYLGFBQU8sbUJBQVNBLElBQVQsRUFBZSxLQUFLRCxNQUFwQixFQUE0QixLQUFLRCxTQUFqQyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzsrQkFNV0csUSxFQUFVO0FBQ2xCLGFBQU8sc0JBQVlBLFFBQVosRUFBc0IsS0FBS0YsTUFBM0IsRUFBbUMsS0FBS0QsU0FBeEMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Z0NBTVlJLFEsRUFBVTtBQUNuQixhQUFPLHVCQUFhQSxRQUFiLEVBQXVCLEtBQUtILE1BQTVCLEVBQW9DLEtBQUtELFNBQXpDLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7O2dDQU1ZSyxVLEVBQVk7QUFDckIsYUFBTyx1QkFBYUEsVUFBYixFQUF5QixLQUFLSixNQUE5QixFQUFzQyxLQUFLRCxTQUEzQyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztpQ0FNYU0sVyxFQUFhO0FBQ3ZCLGFBQU8sd0JBQWNBLFdBQWQsRUFBMkIsS0FBS0wsTUFBaEMsRUFBd0MsS0FBS0QsU0FBN0MsQ0FBUDtBQUNGOzs7Ozs7QUFHSk8sT0FBT0MsT0FBUCxHQUFpQlgsTUFBakIiLCJmaWxlIjoiQXBpV2F5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxNyBCbHVlSGFjayBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciBNSVQuXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cbi8qIGVzbGludCB2YWxpZC1qc2RvYzogW1wiZXJyb3JcIiwge1wicmVxdWlyZVJldHVybkRlc2NyaXB0aW9uXCI6IGZhbHNlfV0gKi9cblxuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9JbnN0YW5jZSc7XG5pbXBvcnQgU2NoZWR1bGUgZnJvbSAnLi9TY2hlZHVsZSc7XG5pbXBvcnQgU2NoZWR1bGVyIGZyb20gJy4vU2NoZWR1bGVyJztcblxuLyoqXG4gKiBBcGlXYXkgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSB2YXJpb3VzIEFQSSB3cmFwcGVyIG9iamVjdHMuXG4gKi9cbmNsYXNzIEFwaVdheSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBBcGlXYXkuXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIHRoZSBjcmVkZW50aWFscyB0byBhdXRoZW50aWNhdGUgdG8gQXBpV2F5LiBJZiBhdXRoIGlzXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgcHJvdmlkZWQgcmVxdWVzdHMgd2lsbCBiZSBtYWRlIHVuYXV0aGVudGljYXRlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmFwaXdheS5pb10gLSB0aGUgYmFzZSBBcGlXYXkgQVBJIFVSTFxuICAgICovXG4gICAvLyBjb25zdHJ1Y3RvcihhdXRoLCBhcGlCYXNlID0gJ2h0dHA6Ly9hcGkuYXBpd2F5LmlvJykge1xuICAgIGNvbnN0cnVjdG9yKGF1dGgsIGFwaUJhc2UgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJykge1xuICAgICAgdGhpcy5fX2FwaUJhc2UgPSBhcGlCYXNlO1xuICAgICAgdGhpcy5fX2F1dGggPSBhdXRoIHx8IHt9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBVc2VyIHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlcl0gLSB0aGUgbmFtZSBvZiB0aGUgdXNlciB0byBnZXQgaW5mb3JtYXRpb24gYWJvdXRcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmUgdW5kZWZpbmVkIGZvciB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtVc2VyfVxuICAgICovXG4gICBnZXRVc2VyKHVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVXNlcih1c2VyLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBQcm9qZWN0IHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZnVsbE5hbWVdIC0gdGhlIG5hbWUgb2YgdGhlIHByb2plY3QgdG8gZ2V0IGluZm9ybWF0aW9uIGFib3V0XG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlIHVuZGVmaW5lZCBmb3IgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICogQHJldHVybiB7UHJvamVjdH1cbiAgICAqL1xuICAgZ2V0UHJvamVjdChmdWxsTmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KGZ1bGxOYW1lLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBJbnN0YW5jZSB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2luc3RhbmNlXSAtIHRoZSBpZCBvZiB0aGUgaW5zdGFuY2UgdG8gZ2V0IGluZm9ybWF0aW9uIGFib3V0XG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlIHVuZGVmaW5lZCBmb3IgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICogQHJldHVybiB7SW5zdGFuY2V9XG4gICAgKi9cbiAgIGdldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlKGluc3RhbmNlLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBTY2hlZHVsZSB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlSWRdIC0gdGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byBnZXQgaW5mb3JtYXRpb24gYWJvdXRcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmUgdW5kZWZpbmVkIGZvciB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtTY2hlZHVsZX1cbiAgICAqL1xuICAgZ2V0U2NoZWR1bGUoc2NoZWR1bGVJZCkge1xuICAgICAgcmV0dXJuIG5ldyBTY2hlZHVsZShzY2hlZHVsZUlkLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBTY2hlZHVsZXIgd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY2hlZHVsZXJJZF0gLSB0aGUgaWQgb2YgdGhlIGluc3RhbmNlIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dFxuICAgICogICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZSB1bmRlZmluZWQgZm9yIHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICAqIEByZXR1cm4ge1NjaGVkdWxlfVxuICAgICovXG4gICBnZXRTY2hlZHVsZXIoc2NoZWR1bGVySWQpIHtcbiAgICAgIHJldHVybiBuZXcgU2NoZWR1bGVyKHNjaGVkdWxlcklkLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaVdheTtcbiJdfQ==
//# sourceMappingURL=ApiWay.js.map
