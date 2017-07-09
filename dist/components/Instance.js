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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkluc3RhbmNlLmpzIl0sIm5hbWVzIjpbImxvZyIsIkluc3RhbmNlIiwiaW5zdGFuY2UiLCJhdXRoIiwiYXBpQmFzZSIsImluc3RhbmNlSWQiLCJjYiIsIl9yZXF1ZXN0IiwidXNlcklkIiwib3B0aW9ucyIsInByb2plY3RJZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFNQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVBBOzs7Ozs7OztBQVFBLElBQU1BLE1BQU0scUJBQU0saUJBQU4sQ0FBWjs7QUFFQTs7OztJQUdNQyxROzs7QUFDSDs7Ozs7O0FBTUEsb0JBQVlDLFFBQVosRUFBc0JDLElBQXRCLEVBQTRCQyxPQUE1QixFQUFxQztBQUFBOztBQUFBLG9IQUM1QkQsSUFENEIsRUFDdEJDLE9BRHNCOztBQUVsQyxVQUFLQyxVQUFMLEdBQWtCSCxRQUFsQjtBQUZrQztBQUdwQzs7QUFFRDs7Ozs7Ozs7OztnQ0FNWUcsVSxFQUFZQyxFLEVBQUk7QUFDMUIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxrQkFBbUNGLFVBQW5DLEVBQWlELElBQWpELEVBQXVEQyxFQUF2RCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7dUNBT21CRSxNLEVBQVFDLE8sRUFBU0gsRSxFQUFJO0FBQ3JDLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsd0JBQXlDQyxNQUF6QyxFQUFtREMsT0FBbkQsRUFBNERILEVBQTVELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzswQ0FPc0JJLFMsRUFBV0QsTyxFQUFTSCxFLEVBQUk7QUFDM0MsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCwyQkFBNENHLFNBQTVDLEVBQXlERCxPQUF6RCxFQUFrRUgsRUFBbEUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Z0NBTVlHLE8sRUFBU0gsRSxFQUFJO0FBQ3RCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0IsWUFBdEIsRUFBb0NFLE9BQXBDLEVBQTZDSCxFQUE3QyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzttQ0FNZUQsVSxFQUFZSSxPLEVBQVNILEUsRUFBSTtBQUNyQyxhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGtCQUFtQ0YsVUFBbkMsRUFBaURJLE9BQWpELEVBQTBESCxFQUExRCxDQUFQO0FBQ0Y7Ozs7OztBQUdKSyxPQUFPQyxPQUFQLEdBQWlCWCxRQUFqQiIsImZpbGUiOiJJbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTcgQmx1ZUhhY2sgSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIgTUlULlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2FwaXdheTppbnN0YW5jZScpO1xuXG4vKipcbiAqIEEgUHJvamVjdCBhbGxvd3Mgc2NvcGluZyBvZiBBUEkgcmVxdWVzdHMgdG8gYSBwYXJ0aWN1bGFyIEFwaVdheSB1c2VyLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgSW5zdGFuY2UuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2luc3RhbmNlXSAtIHRoZSBpbnN0YW5jZSB0byB1c2UgZm9yIHVzZXItc2NvcGVkIHF1ZXJpZXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gYXV0aGVudGljYXRlIHRvIEFwaVdheVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmFwaXdheS5pb10gLSB0aGUgYmFzZSBBcGlXYXkgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLmluc3RhbmNlSWQgPSBpbnN0YW5jZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgcHJvamVjdCBpbmZvcm1hdGlvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9qZWN0SWRdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRJbnN0YW5jZShpbnN0YW5jZUlkLCBjYikge1xuICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9pbnN0YW5jZXMvJHtpbnN0YW5jZUlkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdXNlcidzIHByb2plY3QgbGlzdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt1c2VySWRdXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRJbnN0YW5jZXNCeVVzZXIodXNlcklkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvaW5zdGFuY2VzL3VzZXJzLyR7dXNlcklkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgcHJvamVjdCdzIGluc3RhbmNlIGxpc3RcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvamVjdElkXVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0SW5zdGFuY2VzQnlQcm9qZWN0KHByb2plY3RJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL2luc3RhbmNlcy9wcm9qZWN0cy8ke3Byb2plY3RJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQWRkIGEgbmV3IEluc3RhbmNlXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgYWRkSW5zdGFuY2Uob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgJy9pbnN0YW5jZXMnLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIHVzZXIncyBwcm9maWxlIChXaWxsIGNyZWF0ZSBhIG5ldyB1c2VyIGlmIG5vdCBleGlzdClcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIEFQSSByZXNwb25zZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVJbnN0YW5jZShpbnN0YW5jZUlkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvaW5zdGFuY2VzLyR7aW5zdGFuY2VJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5zdGFuY2U7XG4iXX0=
//# sourceMappingURL=Instance.js.map
