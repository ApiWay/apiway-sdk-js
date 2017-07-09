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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjaGVkdWxlci5qcyJdLCJuYW1lcyI6WyJsb2ciLCJTY2hlZHVsZXIiLCJzY2hlZHVsZXJJZCIsImF1dGgiLCJhcGlCYXNlIiwib3B0aW9ucyIsImNiIiwiX3JlcXVlc3QiLCJzY2hlZHVsZUlkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQU9BOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBUkE7Ozs7Ozs7QUFTQSxJQUFNQSxNQUFNLHFCQUFNLGtCQUFOLENBQVo7O0FBRUE7Ozs7SUFHTUMsUzs7O0FBQ0g7Ozs7OztBQU1BLHFCQUFZQyxXQUFaLEVBQXlCQyxJQUF6QixFQUErQkMsT0FBL0IsRUFBd0M7QUFBQTs7QUFBQSxzSEFDL0JELElBRCtCLEVBQ3pCQyxPQUR5Qjs7QUFFckMsVUFBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFGcUM7QUFHdkM7O0FBRUQ7Ozs7Ozs7Ozs7aUNBTWFHLE8sRUFBU0MsRSxFQUFJO0FBQ3ZCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0IsYUFBdEIsRUFBcUNGLE9BQXJDLEVBQThDQyxFQUE5QyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT2dCSixXLEVBQWFHLE8sRUFBU0MsRSxFQUFJO0FBQ3ZDLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsbUJBQW9DTCxXQUFwQyxFQUFtREcsT0FBbkQsRUFBNERDLEVBQTVELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7O2lDQU1hSixXLEVBQWFJLEUsRUFBSTtBQUM1QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLG1CQUFvQ0wsV0FBcEMsRUFBbUQsSUFBbkQsRUFBeURJLEVBQXpELENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztrQ0FPY0QsTyxFQUFTQyxFLEVBQUk7QUFDeEIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxpQkFBb0NGLE9BQXBDLEVBQTZDQyxFQUE3QyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT2dCSixXLEVBQWFHLE8sRUFBU0MsRSxFQUFJO0FBQ3ZDLGFBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsbUJBQXVDTCxXQUF2QyxFQUFzREcsT0FBdEQsRUFBK0RDLEVBQS9ELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzttQ0FPZUUsVSxFQUFZSCxPLEVBQVNDLEUsRUFBSTtBQUNyQyxhQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLG1CQUF1Q0MsVUFBdkMsRUFBcURILE9BQXJELEVBQThEQyxFQUE5RCxDQUFQO0FBQ0Y7Ozs7OztBQUdKRyxPQUFPQyxPQUFQLEdBQWlCVCxTQUFqQiIsImZpbGUiOiJTY2hlZHVsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDE3IEJsdWVIYWNrIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIE1JVC5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2FwaXdheTpzY2hlZHVsZXInKTtcblxuLyoqXG4gKiBBIFNjaGVkdWxlIGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgQXBpV2F5IHVzZXIuXG4gKi9cbmNsYXNzIFNjaGVkdWxlciBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgU2NoZWR1bGUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlcklkXSAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBBcGlXYXlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5hcGl3YXkuaW9dIC0gdGhlIGJhc2UgQXBpV2F5IEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3Ioc2NoZWR1bGVySWQsIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5zY2hlZHVsZXJJZCA9IHNjaGVkdWxlcklkO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFNjaGVkdWxlclxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGFkZFNjaGVkdWxlcihvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCAnL3NjaGVkdWxlcnMnLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIFNjaGVkdWxlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY2hlZHVsZXJJZF1cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVTY2hlZHVsZXIoc2NoZWR1bGVySWQsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9zY2hlZHVsZXJzLyR7c2NoZWR1bGVySWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBTY2hlZHVsZXNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NoZWR1bGVySWRdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRTY2hlZHVsZXIoc2NoZWR1bGVySWQsIGNiKSB7XG4gICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3NjaGVkdWxlcnMvJHtzY2hlZHVsZXJJZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IFNjaGVkdWxlciBsaXN0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlcklkXVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0U2NoZWR1bGVycyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvc2NoZWR1bGVyc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBTY2hlZHVsZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NoZWR1bGVySWRdXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlU2NoZWR1bGVyKHNjaGVkdWxlcklkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvc2NoZWR1bGVycy8ke3NjaGVkdWxlcklkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBTY2hlZHVsZSBpbiBhU2NoZWR1bGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlSWRdXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlU2NoZWR1bGUoc2NoZWR1bGVJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3NjaGVkdWxlcnMvJHtzY2hlZHVsZUlkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2hlZHVsZXI7XG4iXX0=
//# sourceMappingURL=Scheduler.js.map
