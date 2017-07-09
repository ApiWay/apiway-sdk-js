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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbImxvZyIsIlNjaGVkdWxlIiwic2NoZWR1bGVJZCIsImF1dGgiLCJhcGlCYXNlIiwiY2IiLCJfcmVxdWVzdCIsIm9wdGlvbnMiLCJ1c2VySWQiLCJwcm9qZWN0SWQiLCJ3aGVuIiwic2NoZWR1bGUiLCJlbmRzV2l0aCIsInJlcGxhY2UiLCJjcm9uIiwiaW50ZXJ2YWwiLCJzdGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVJBOzs7Ozs7O0FBU0EsSUFBTUEsTUFBTSxxQkFBTSxpQkFBTixDQUFaOztBQUVBOzs7O0lBR01DLFE7OztBQUNIOzs7Ozs7QUFNQSxxQkFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQUE7O0FBQUEsc0hBQzlCRCxJQUQ4QixFQUN4QkMsT0FEd0I7O0FBRXBDLFlBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0FBRm9DO0FBR3RDOztBQUVEOzs7Ozs7Ozs7O2tDQU1ZQSxVLEVBQVlHLEUsRUFBSTtBQUMxQixnQkFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxrQkFBbUNKLFVBQW5DLEVBQWlELElBQWpELEVBQXVERyxFQUF2RCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzttQ0FNYUUsTyxFQUFTRixFLEVBQUk7QUFDdkIsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsZ0JBQW1DQyxPQUFuQyxFQUE0Q0YsRUFBNUMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O3lDQU9tQkcsTSxFQUFRRCxPLEVBQVNGLEUsRUFBSTtBQUNyQyxnQkFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCx3QkFBeUNFLE1BQXpDLEVBQW1ERCxPQUFuRCxFQUE0REYsRUFBNUQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzRDQU9zQkksUyxFQUFXRixPLEVBQVNGLEUsRUFBSTtBQUMzQyxnQkFBTyxLQUFLQyxRQUFMLENBQWMsS0FB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T0FBT0MsT0FBUCxHQUFpQmpCLFFBQWpCIiwiZmlsZSI6IlNjaGVkdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxNyBCbHVlSGFjayBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciBNSVQuXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyA9IGRlYnVnKCdhcGl3YXk6c2NoZWR1bGUnKTtcblxuLyoqXG4gKiBBIFNjaGVkdWxlIGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgQXBpV2F5IHVzZXIuXG4gKi9cbmNsYXNzIFNjaGVkdWxlIGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBTY2hlZHVsZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NoZWR1bGVJZF0gLVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gQXBpV2F5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuYXBpd2F5LmlvXSAtIHRoZSBiYXNlIEFwaVdheSBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKHNjaGVkdWxlSWQsIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5zY2hlZHVsZUlkID0gc2NoZWR1bGVJZDtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgc2NoZWR1bGUgaW5mb3JtYXRpb25cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NoZWR1bGVJZF1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFNjaGVkdWxlKHNjaGVkdWxlSWQsIGNiKSB7XG4gICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3NjaGVkdWxlcy8ke3NjaGVkdWxlSWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBzY2hlZHVsZSBsaXN0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlSWRdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRTY2hlZHVsZXMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3NjaGVkdWxlc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdXNlcidzIHNjaGVkdWxlcyBsaXN0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJJZF1cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFNjaGVkdWxlc0J5VXNlcih1c2VySWQsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9zY2hlZHVsZXMvdXNlcnMvJHt1c2VySWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBwcm9qZWN0IHJlbGF0ZWQgc2NoZWR1bGUgbGlzdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9qZWN0SWRdXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRTY2hlZHVsZXNCeVByb2plY3QocHJvamVjdElkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvc2NoZWR1bGVzL3Byb2plY3RzLyR7cHJvamVjdElkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBzY2hlZHVsZVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGFkZFNjaGVkdWxlKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsICcvc2NoZWR1bGVzJywgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBkYXRhIG9mIHNjaGVkdWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlSWRdXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlU2NoZWR1bGUoc2NoZWR1bGVJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3NjaGVkdWxlcy8ke3NjaGVkdWxlSWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBjcm9uIG9mIFNjaGVkdWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3NjaGVkdWxlSWRdXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3doZW5dXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlU2NoZWR1bGVXaGVuIChzY2hlZHVsZUlkLCB3aGVuLCBjYikge1xuICAgICAgbGV0IHNjaGVkdWxlID0gJydcbiAgICAgIGlmICh3aGVuLmVuZHNXaXRoKCdtJykpIHtcbiAgICAgICAgIHNjaGVkdWxlID0gYCR7d2hlbi5yZXBsYWNlKCdtJywgJycpfSAqICogKiAqYFxuICAgICAgfSBlbHNlIGlmICh3aGVuLmVuZHNXaXRoKCdoJykpIHtcbiAgICAgICAgIHNjaGVkdWxlID0gYCogJHt3aGVuLnJlcGxhY2UoJ2gnLCAnJyl9ICogKiAqYFxuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICBjcm9uOiBzY2hlZHVsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvc2NoZWR1bGVzLyR7c2NoZWR1bGVJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGNyb24gb2YgU2NoZWR1bGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NoZWR1bGVJZF1cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbaW50ZXJ2YWxdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlU2NoZWR1bGVJbnRlcnZhbChzY2hlZHVsZUlkLCBpbnRlcnZhbCwgY2IpIHtcbiAgICAgIGxldCBzY2hlZHVsZSA9ICcnXG4gICAgICBpZiAoaW50ZXJ2YWwuZW5kc1dpdGgoJ2gnKSkge1xuICAgICAgICAgc2NoZWR1bGUgPSBgKiAqLyR7aW50ZXJ2YWwucmVwbGFjZSgnaCcsICcnKX0gKiAqICpgXG4gICAgICB9IGVsc2UgaWYgKGludGVydmFsLmVuZHNXaXRoKCdkJykpIHtcbiAgICAgICAgIHNjaGVkdWxlID0gYCogKiAqLyR7aW50ZXJ2YWwucmVwbGFjZSgnZCcsICcnKX0gKiAqYFxuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICBjcm9uOiBzY2hlZHVsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvc2NoZWR1bGVzLyR7c2NoZWR1bGVJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGNyb24gb2YgU2NoZWR1bGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NoZWR1bGVJZF1cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY3Jvbl1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVDcm9uKHNjaGVkdWxlSWQsIGNyb24sIGNiKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgIGNyb246IGNyb25cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3NjaGVkdWxlcy8ke3NjaGVkdWxlSWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBzdGF0ZSBvZiBTY2hlZHVsZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY2hlZHVsZUlkXVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0ZV1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVTdGF0ZShzY2hlZHVsZUlkLCBzdGF0ZSwgY2IpIHtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9zY2hlZHVsZXMvJHtzY2hlZHVsZUlkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBzY2hlZHVsZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY2hlZHVsZUlkXVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZVNjaGVkdWxlKHNjaGVkdWxlSWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9zY2hlZHVsZXMvJHtzY2hlZHVsZUlkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgc2NoZWR1bGVzIGJ5IHVzZXJJZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt1c2VySWRdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlU2NoZWR1bGVzQnlVc2VyKHVzZXJJZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3NjaGVkdWxlcy91c2Vycy8ke3VzZXJJZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIHNjaGVkdWxlcyBieSBwcm9qZWN0SWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvamVjdElkXVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZVNjaGVkdWxlc0J5UHJvamVjdChwcm9qZWN0SWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9zY2hlZHVsZXMvcHJvamVjdHMvJHtwcm9qZWN0SWR9YCwgbnVsbCwgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVkdWxlO1xuIl19
//# sourceMappingURL=Schedule.js.map
