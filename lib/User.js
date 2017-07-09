/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */
import Requestable from './Requestable';
import debug from 'debug';
const log = debug('apiway:user');

/**
 * A User allows scoping of API requests to a particular ApiWay user.
 */
class User extends Requestable {
   /**
    * Create a User.
    * @param {string} [username] - the user to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   constructor(username, auth, apiBase) {
      super(auth, apiBase);
      this.__user = username;
   }

   /**
    * Get the user's profile
    * @param {string} [userId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getProfile(userId, cb) {
     return this._request('GET', `/users/${userId}`, null, cb);
   }

   /**
    * Update user's profile (Will create a new user if not exist)
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateProfile(options, cb) {
      return this._request('POST', '/users', options, cb);
   }
}

module.exports = User;
