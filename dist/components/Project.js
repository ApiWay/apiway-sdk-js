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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2plY3QuanMiXSwibmFtZXMiOlsibG9nIiwiUHJvamVjdCIsImZ1bGxOYW1lIiwiYXV0aCIsImFwaUJhc2UiLCJwcm9qZWN0SWQiLCJjYiIsIl9yZXF1ZXN0IiwidXNlcklkIiwib3B0aW9ucyIsInNjaGVkdWxlSWQiLCJ3aGVuIiwic2NoZWR1bGUiLCJlbmRzV2l0aCIsInJlcGxhY2UiLCJpbnRlcnZhbCIsImNyb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFSQTs7Ozs7OztBQVNBLElBQU1BLE1BQU0scUJBQU0sZ0JBQU4sQ0FBWjs7QUFFQTs7OztJQUdNQyxPOzs7QUFDSDs7Ozs7O0FBTUEsb0JBQVlDLFFBQVosRUFBc0JDLElBQXRCLEVBQTRCQyxPQUE1QixFQUFxQztBQUFBOztBQUFBLG9IQUM1QkQsSUFENEIsRUFDdEJDLE9BRHNCOztBQUVsQyxZQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUZrQztBQUdwQzs7QUFFRDs7Ozs7Ozs7OztpQ0FNV0csUyxFQUFXQyxFLEVBQUk7QUFDeEIsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsaUJBQWtDRixTQUFsQyxFQUErQyxJQUEvQyxFQUFxREMsRUFBckQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7d0NBTWtCRSxNLEVBQVFGLEUsRUFBSTtBQUMzQixnQkFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCx1QkFBd0NDLE1BQXhDLEVBQWtELElBQWxELEVBQXdERixFQUF4RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztpQ0FNV0csTyxFQUFTSCxFLEVBQUk7QUFDckIsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0IsV0FBdEIsRUFBbUNFLE9BQW5DLEVBQTRDSCxFQUE1QyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT2NELFMsRUFBV0ksTyxFQUFTSCxFLEVBQUk7QUFDbkMsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsaUJBQWtDRixTQUFsQyxFQUErQ0ksT0FBL0MsRUFBd0RILEVBQXhELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPbUJELFMsRUFBV0ksTyxFQUFTSCxFLEVBQUk7QUFDeEMsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsaUJBQW1DRixTQUFuQyx1QkFBZ0VJLE9BQWhFLEVBQXlFSCxFQUF6RSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7NENBT3NCRCxTLEVBQVdJLE8sRUFBU0gsRSxFQUFJO0FBQzNDLGdCQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLGlCQUFxQ0YsU0FBckMsdUJBQWtFSSxPQUFsRSxFQUEyRUgsRUFBM0UsQ0FBUDtBQUNGOzs7b0NBRWFELFMsRUFBV0ssVSxFQUFZSixFLEVBQUk7QUFDdEMsYUFBSUcsVUFBVTtBQUNYQyx3QkFBWUE7QUFERCxVQUFkO0FBR0EsZ0JBQU8sS0FBS0gsUUFBTCxDQUFjLEtBQWQsaUJBQWtDRixTQUFsQyxFQUErQ0ksT0FBL0MsRUFBd0RILEVBQXhELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPb0JELFMsRUFBV00sSSxFQUFNTCxFLEVBQUk7QUFDdEMsYUFBSU0sV0FBVyxFQUFmO0FBQ0EsYUFBSUQsS0FBS0UsUUFBTCxDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUNyQkQsdUJBQWNELEtBQUtHLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLENBQWQ7QUFDRixVQUZELE1BRU8sSUFBSUgsS0FBS0UsUUFBTCxDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUM1QkQsOEJBQWdCRCxLQUFLRyxPQUFMLENBQWEsR0FBYixFQUFrQixFQUFsQixDQUFoQjtBQUNGO0FBQ0QsYUFBSUwsVUFBVTtBQUNYRyxzQkFBVUE7QUFEQyxVQUFkO0FBR0EsZ0JBQU8sS0FBS0wsUUFBTCxDQUFjLEtBQWQsaUJBQWtDRixTQUFsQyxFQUErQ0ksT0FBL0MsRUFBd0RILEVBQXhELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs2Q0FPdUJELFMsRUFBV1UsUSxFQUFVVCxFLEVBQUk7QUFDN0MsYUFBSU0sV0FBVyxFQUFmO0FBQ0EsYUFBSUcsU0FBU0YsUUFBVCxDQUFrQixHQUFsQixDQUFKLEVBQTRCO0FBQ3pCRCxnQ0FBa0JHLFNBQVNELE9BQVQsQ0FBaUIsR0FBakIsRUFBc0IsRUFBdEIsQ0FBbEI7QUFDRixVQUZELE1BRU8sSUFBSUMsU0FBU0YsUUFBVCxDQUFrQixHQUFsQixDQUFKLEVBQTRCO0FBQ2hDRCxrQ0FBb0JHLFNBQVNELE9BQVQsQ0FBaUIsR0FBakIsRUFBc0IsRUFBdEIsQ0FBcEI7QUFDRjtBQUNELGFBQUlMLFVBQVU7QUFDWEcsc0JBQVVBO0FBREMsVUFBZDtBQUdBLGdCQUFPLEtBQUtMLFFBQUwsQ0FBYyxLQUFkLGlCQUFrQ0YsU0FBbEMsRUFBK0NJLE9BQS9DLEVBQXdESCxFQUF4RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7eUNBT21CRCxTLEVBQVdXLEksRUFBTVYsRSxFQUFJO0FBQ3JDLGFBQUlHLFVBQVU7QUFDWEcsc0JBQVVJO0FBREMsVUFBZDtBQUdBLGdCQUFPLEtBQUtULFFBQUwsQ0FBYyxLQUFkLGlCQUFrQ0YsU0FBbEMsRUFBK0NJLE9BQS9DLEVBQXdESCxFQUF4RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztvQ0FNY0QsUyxFQUFXQyxFLEVBQUk7QUFDMUIsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsaUJBQXFDRixTQUFyQyxFQUFrRCxJQUFsRCxFQUF3REMsRUFBeEQsQ0FBUDtBQUNGOzs7Ozs7QUFHSlcsT0FBT0MsT0FBUCxHQUFpQmpCLE9BQWpCIiwiZmlsZSI6IlByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDE3IEJsdWVIYWNrIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIE1JVC5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2FwaXdheTpwcm9qZWN0Jyk7XG5cbi8qKlxuICogQSBQcm9qZWN0IGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgQXBpV2F5IHVzZXIuXG4gKi9cbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFByb2plY3QuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2Z1bGxOYW1lXSAtIHRoZSBwcm9qZWN0IHRvIHVzZSBmb3IgdXNlci1zY29wZWQgcXVlcmllc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gQXBpV2F5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuYXBpd2F5LmlvXSAtIHRoZSBiYXNlIEFwaVdheSBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGZ1bGxOYW1lLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgcHJvamVjdCBpbmZvcm1hdGlvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9qZWN0SWRdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRQcm9qZWN0KHByb2plY3RJZCwgY2IpIHtcbiAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcHJvamVjdHMvJHtwcm9qZWN0SWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB1c2VyJ3MgcHJvamVjdCBsaXN0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJJZF1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFByb2plY3RzQnlVc2VyKHVzZXJJZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3Byb2plY3RzL3VzZXJzLyR7dXNlcklkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBZGQgYSByZXBvIGFzIGEgUHJvamVjdFxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGFkZFByb2plY3Qob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgJy9wcm9qZWN0cycsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVcGRhdGUgZGF0YSBvZiBwcm9qZWN0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb2plY3RJZF1cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVQcm9qZWN0KHByb2plY3RJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBZGQgYSBlbWFpbCBzdWJzY3JpYmVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb2plY3RJZF1cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBhZGRFbWFpbFN1YnNjcmliZXIocHJvamVjdElkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfS9zdWJzY3JpYmUvZW1haWxgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgZW1haWwgc3Vic2NyaWJlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9qZWN0SWRdXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlRW1haWxTdWJzY3JpYmVyKHByb2plY3RJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfS9zdWJzY3JpYmUvZW1haWxgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIHNldFNjaGVkdWxlSWQocHJvamVjdElkLCBzY2hlZHVsZUlkLCBjYikge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICBzY2hlZHVsZUlkOiBzY2hlZHVsZUlkXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9wcm9qZWN0cy8ke3Byb2plY3RJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIHNjaGVkdWxlIG9mIHByb2plY3RcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvamVjdElkXVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt3aGVuXVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZVNjaGVkdWxlV2hlbiAocHJvamVjdElkLCB3aGVuLCBjYikge1xuICAgICAgbGV0IHNjaGVkdWxlID0gJydcbiAgICAgIGlmICh3aGVuLmVuZHNXaXRoKCdtJykpIHtcbiAgICAgICAgIHNjaGVkdWxlID0gYCR7d2hlbi5yZXBsYWNlKCdtJywgJycpfSAqICogKiAqYFxuICAgICAgfSBlbHNlIGlmICh3aGVuLmVuZHNXaXRoKCdoJykpIHtcbiAgICAgICAgIHNjaGVkdWxlID0gYCogJHt3aGVuLnJlcGxhY2UoJ2gnLCAnJyl9ICogKiAqYFxuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICBzY2hlZHVsZTogc2NoZWR1bGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVcGRhdGUgc2NoZWR1bGUgb2YgcHJvamVjdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9qZWN0SWRdXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2ludGVydmFsXVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZVNjaGVkdWxlSW50ZXJ2YWwocHJvamVjdElkLCBpbnRlcnZhbCwgY2IpIHtcbiAgICAgIGxldCBzY2hlZHVsZSA9ICcnXG4gICAgICBpZiAoaW50ZXJ2YWwuZW5kc1dpdGgoJ2gnKSkge1xuICAgICAgICAgc2NoZWR1bGUgPSBgKiAqLyR7aW50ZXJ2YWwucmVwbGFjZSgnaCcsICcnKX0gKiAqICpgXG4gICAgICB9IGVsc2UgaWYgKGludGVydmFsLmVuZHNXaXRoKCdkJykpIHtcbiAgICAgICAgIHNjaGVkdWxlID0gYCogKiAqLyR7aW50ZXJ2YWwucmVwbGFjZSgnZCcsICcnKX0gKiAqYFxuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICBzY2hlZHVsZTogc2NoZWR1bGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVcGRhdGUgc2NoZWR1bGUgb2YgcHJvamVjdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9qZWN0SWRdXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2Nyb25dXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlU2NoZWR1bGVDcm9uKHByb2plY3RJZCwgY3JvbiwgY2IpIHtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgc2NoZWR1bGU6IGNyb25cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBwcm9qZWN0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb2plY3RJZF1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3Byb2plY3RzLyR7cHJvamVjdElkfWAsIG51bGwsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19
//# sourceMappingURL=Project.js.map
