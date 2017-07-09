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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXIuanMiXSwibmFtZXMiOlsibG9nIiwiVXNlciIsInVzZXJuYW1lIiwiYXV0aCIsImFwaUJhc2UiLCJfX3VzZXIiLCJ1c2VySWQiLCJjYiIsIl9yZXF1ZXN0Iiwib3B0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFNQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVBBOzs7Ozs7OztBQVFBLElBQU1BLE1BQU0scUJBQU0sYUFBTixDQUFaOztBQUVBOzs7O0lBR01DLEk7OztBQUNIOzs7Ozs7QUFNQSxnQkFBWUMsUUFBWixFQUFzQkMsSUFBdEIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQUE7O0FBQUEsNEdBQzVCRCxJQUQ0QixFQUN0QkMsT0FEc0I7O0FBRWxDLFVBQUtDLE1BQUwsR0FBY0gsUUFBZDtBQUZrQztBQUdwQzs7QUFFRDs7Ozs7Ozs7OzsrQkFNV0ksTSxFQUFRQyxFLEVBQUk7QUFDckIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQkYsTUFBL0IsRUFBeUMsSUFBekMsRUFBK0NDLEVBQS9DLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O2tDQU1jRSxPLEVBQVNGLEUsRUFBSTtBQUN4QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLEVBQXNCLFFBQXRCLEVBQWdDQyxPQUFoQyxFQUF5Q0YsRUFBekMsQ0FBUDtBQUNGOzs7Ozs7QUFHSkcsT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTcgQmx1ZUhhY2sgSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIgTUlULlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2FwaXdheTp1c2VyJyk7XG5cbi8qKlxuICogQSBVc2VyIGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgQXBpV2F5IHVzZXIuXG4gKi9cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFVzZXIuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJuYW1lXSAtIHRoZSB1c2VyIHRvIHVzZSBmb3IgdXNlci1zY29wZWQgcXVlcmllc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gQXBpV2F5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuYXBpd2F5LmlvXSAtIHRoZSBiYXNlIEFwaVdheSBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX191c2VyID0gdXNlcm5hbWU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSB1c2VyJ3MgcHJvZmlsZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt1c2VySWRdXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRQcm9maWxlKHVzZXJJZCwgY2IpIHtcbiAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvdXNlcnMvJHt1c2VySWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSB1c2VyJ3MgcHJvZmlsZSAoV2lsbCBjcmVhdGUgYSBuZXcgdXNlciBpZiBub3QgZXhpc3QpXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUHJvZmlsZShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCAnL3VzZXJzJywgb3B0aW9ucywgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7XG4iXX0=
//# sourceMappingURL=User.js.map
